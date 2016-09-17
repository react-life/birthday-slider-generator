import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { DragSource } from 'react-dnd';
import cssModules from 'helpers/cssModules';
import { ContentTypes } from 'utils/dnd';

import Button from 'components/Button';
import Icon from 'components/Icon';

import styles from './Content.sss';

@DragSource(ContentTypes.name, ContentTypes.source, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  clientOffset: monitor.getSourceClientOffset()
}))
@pureRender
@cssModules(styles)
export default class Content extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    id: PropTypes.string,
    isDragging: PropTypes.bool,
    left: PropTypes.string,
    top: PropTypes.string,
    editable: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { left, top, editable, children, connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div
        styleName={classNames('content', {
          content_editable: editable
        })}
        style={{ left, top }}
      >
        {children}
        {editable && <div styleName='dragArea'>

        </div>}
      </div>
    );
  }
}
