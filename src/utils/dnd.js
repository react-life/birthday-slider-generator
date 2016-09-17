export const ContentTypes = {
  name: 'content',
  target: {
    drop(props, monitor, component) {
      const item = monitor.getItem();
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      component.moveContent({
        id: item.id,
        left,
        top
      })
    }
  },
  source: {
    canDrag(props) {
      return props.editable;
    },

    beginDrag(props, monitor) {
      const { id, left, top } = props;
      return {
        id,
        left: parseInt(left, 10),
        top: parseInt(top, 10),
      };
    }
  },
};