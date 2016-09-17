export const ContentDND = {
  name: 'content',
  target: {
    drop(props, monitor, component) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const item = monitor.getItem();

      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      if (props.snapToGrid) {
        [left, top] = snapToGrid(left, top);
      }

      component.moveBox(item.id, left, top);
    }
  },
  source: {
    beginDrag(props) {
      console.log(props);
      const { id, title, left, top } = props;
      return { id, title, left, top };
    }
  },
};