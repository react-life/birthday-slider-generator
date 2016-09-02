import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import ReactModal from 'react-modal';

import cssModules from 'helpers/cssModules';

import styles from './Modal.sss';

@pureRender
@cssModules(styles)
export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <ReactModal
          {...this.props}
          overlayClassName={styles.modal}
          className={styles.content}
          closeTimeoutMS={500}
        >
          {this.props.children}
        </ReactModal>
      </div>
    );
  }
}
