import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import classNames from 'classnames';
import { clamp, range } from 'ramda';
import cssModules from 'helpers/cssModules';
import Icon from 'components/Icon';

import styles from './Pagination.sss';

@pureRender
@cssModules(styles)
export default class Pagination extends Component {
  static propTypes = {
    current: PropTypes.number,
    pages: PropTypes.number.isRequired,
    visiblePages: PropTypes.number,
    showArrows: PropTypes.bool,
    showFirstAndLast: PropTypes.bool,
    onClick: PropTypes.func,
    isLarge: PropTypes.bool,
  }

  static defaultProps = {
    current: 1,
    onClick: () => {},
  }

  handleClick = page => () => {
    const { pages } = this.props;
    const index = clamp(1, pages, page);
    this.props.onClick(index);
  }

  renderPage(page) {
    const { current, isLarge } = this.props;
    const props = {};

    if (parseInt(page, 10) && page !== current) {
      props.onClick = this.handleClick(page);
    } else {
      props.disabled = true;
    }

    return (
      <li>
        <button
          type='button'
          {...props}
          styleName={classNames('page', {
            page_active: page === current,
            page_large: isLarge,
          })}
        >
          {page}
        </button>
      </li>
    );
  }

  render() {
    const { current, pages, visiblePages, showArrows, isLarge, showFirstAndLast } = this.props;
    let renderPages = [];
    if (visiblePages) {
      const pagesInLeft = Math.floor(visiblePages / 2);
      let startPage = current - pagesInLeft >= 1 ? current - pagesInLeft : 1;
      let endPage = startPage + visiblePages;
      if (endPage > pages) {
        endPage = pages + 1;
        startPage = endPage - visiblePages;
      }
      renderPages = range(startPage, endPage);
    } else {
      renderPages = range(1, pages + 1);
    }

    if (showFirstAndLast) {
      const first = renderPages[0];

      if (first !== 1 && first !== 2) {
        renderPages.unshift(1, '...');
      }

      if (first === 2) {
        renderPages.unshift(1);
      }

      const last = renderPages[renderPages.length - 1];

      if (last !== pages && last !== pages - 1) {
        renderPages.push('...', pages);
      }

      if (last === pages - 1) {
        renderPages.push(pages);
      }
    }

    return (
      <ul
        styleName={classNames('pagination', {
          pagination_large: isLarge,
        })}
      >
        {showArrows && <li
          styleName={classNames('arrow-wrapper', 'arrow-wrapper_prev', {
            'arrow-wrapper_large': isLarge,
          })}
        >
          <button
            type='button'
            onClick={this.handleClick(current - 1)}
            disabled={current === 1}
            styleName={classNames('arrow', {
              arrow_large: isLarge,
            })}
          >
            <span styleName='arrow_icon arrow_icon-prev'>
              <Icon icon='arrow' />
            </span>
          </button>
        </li>}
        {renderPages.map(this.renderPage, this)}
        {showArrows && <li
          styleName={classNames('arrow-wrapper', {
            'arrow-wrapper_large': isLarge,
          })}
        >
          <button
            type='button'
            onClick={this.handleClick(current + 1)}
            disabled={current === pages}
            styleName={classNames('arrow', {
              arrow_large: isLarge,
            })}
          >
            <span styleName='arrow_icon'>
              <Icon icon='arrow' />
            </span>
          </button>
        </li>}
      </ul>
    );
  }
}
