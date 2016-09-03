import { createAction, createReducer } from 'redux-act';
import data from './data';

const initialState = {
  loaded: false,
  isAgentMenuVisible: false,
  scrollPosition: 0,
  footerOffsetY: 0,
  headersHeight: 0,
  catalogFixTop: 0,
  data
};

export {
  getIsAgentMenuVisible,
  getScrollPosition,
  getFooterOffsetY,
  getHeadersHeight,
  getCatalogFixTop
} from './selector';

export const showMenu = createAction('relef/settings/SHOW_MENU');
export const hideMenu = createAction('relef/settings/HIDE_MENU');
export const setScrollPosition = createAction('relef/settings/SET_SCROLL_POSITION');
export const setFooterOffsetY = createAction('relef/settings/SET_FOOTER_OFFSET_Y');
export const setHeadersHeight = createAction('relef/settings/SET_HEADERS_HEIGHT');
export const setCatalogFixTop = createAction('relef/settings/SET_CATALOG_FIX_TOP');

const handleShowMenu = state => ({
  ...state,
  isAgentMenuVisible: true
});

const handleHideMenu = state => ({
  ...state,
  isAgentMenuVisible: false
});

const handleChange = field => (state, payload) => {
  if (state[field] === payload) {
    return state;
  }

  return {
    ...state,
    [field]: payload
  };
};

const reducer = createReducer(on => {
  on(showMenu, handleShowMenu);
  on(hideMenu, handleHideMenu);
  on(setScrollPosition, handleChange('scrollPosition'));
  on(setFooterOffsetY, handleChange('footerOffsetY'));
  on(setHeadersHeight, handleChange('headersHeight'));
  on(setCatalogFixTop, handleChange('catalogFixTop'));
}, initialState);

export default reducer;
