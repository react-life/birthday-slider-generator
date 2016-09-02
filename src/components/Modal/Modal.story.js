import React from 'react';
import { action } from '@kadira/storybook';
import storiesOf from 'helpers/storiesOf';
import addPropsToStory from 'helpers/addPropsToStory';

import Modal from './Modal';

storiesOf('Modal')
  .addDecorator(story => {
    const Wrapper = class extends React.Component {
      static propTypes = {
        children: React.PropTypes.node,
      };

      state = {
        isOpen: false,
      }

      handleToggle = () => {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      };

      handleRequestClose = () => {
        action('onRequestClose')();

        this.setState({
          isOpen: false,
        });
      };

      render() {
        return (
          <div>
            <button type='button' onClick={this.handleToggle}>
              Toggle
            </button>

            {addPropsToStory(this.props.children, {
              isOpen: this.state.isOpen,
              onRequestClose: this.handleRequestClose,
            })}
          </div>
        );
      }
    };

    return (
      <Wrapper>
        {story()}
      </Wrapper>
    );
  })
  .addWithInfo('Default', () => (
    <Modal onAfterOpen={action('onAfterOpen')}>
      <div
        style={{
          width: 500,
          height: 500,
          background: 'linear-gradient(red, yellow)',
        }}
      >
        Hello, world
      </div>
    </Modal>
  ));
