import settings, {
  showMenu,
  hideMenu,
  setScrollPosition,
  setFooterOffsetY,
  setHeadersHeight,
  setCatalogFixTop,

  getIsAgentMenuVisible,
  getScrollPosition,
  getFooterOffsetY,
  getHeadersHeight,
  getCatalogFixTop
} from './index.js';

describe('@reducer settings', () => {
  it('should have initialState', () => {
    expect(settings(undefined, {})).to.not.equal(undefined);
  });

  it('should set menu visible on showMenu', () => {
    const actual = settings(undefined, showMenu());
    const isAgentMenuVisible = getIsAgentMenuVisible(actual);

    expect(isAgentMenuVisible).to.be.equal(true);
  });

  it('should not hide menu on showMenu when it is visible', () => {
    const actual = settings({
      isAgentMenuVisible: true
    }, showMenu());
    const isAgentMenuVisible = getIsAgentMenuVisible(actual);

    expect(isAgentMenuVisible).to.be.equal(true);
  });

  it('should set menu hidden on hideMenu', () => {
    const actual = settings(undefined, hideMenu());
    const isAgentMenuVisible = getIsAgentMenuVisible(actual);

    expect(isAgentMenuVisible).to.be.equal(false);
  });

  it('should not show menu on hideMenu when it is hidden', () => {
    const actual = settings({
      isAgentMenuVisible: false
    }, hideMenu());
    const isAgentMenuVisible = getIsAgentMenuVisible(actual);

    expect(isAgentMenuVisible).to.be.equal(false);
  });

  it('should set scrollPosition on setScrollPosition', () => {
    const actual = settings(undefined, setScrollPosition(1000));
    const scrollPosition = getScrollPosition(actual);

    expect(scrollPosition).to.be.equal(1000);
  });

  it('should set footerOffsetY on setFooterOffsetY', () => {
    const actual = settings(undefined, setFooterOffsetY(1000));
    const footerOffsetY = getFooterOffsetY(actual);

    expect(footerOffsetY).to.be.equal(1000);
  });

  it('should set headersHeight on setHeadersHeight', () => {
    const actual = settings(undefined, setHeadersHeight(1000));
    const headersHeight = getHeadersHeight(actual);

    expect(headersHeight).to.be.equal(1000);
  });

  it('should set headersHeight on setCatalogFixTop', () => {
    const actual = settings(undefined, setCatalogFixTop(1000));
    const catalogFixTop = getCatalogFixTop(actual);

    expect(catalogFixTop).to.be.equal(1000);
  });
});
