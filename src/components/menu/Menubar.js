import React, { PureComponent } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { Link } from 'react-router-dom';

const MenuContainerGrid = styled.div`
  // min-width: 1200px;
  z-index: 99;
  display: grid;
  display: -ms-grid;
  grid-template-rows: 67px 1px;
  grid-template-columns: 500px 95px 95px;
  justify-content: center;
  justify-items: center;

  .logo-text {
    font-size: 28px;
    font-weight: bold;
    line-height: 33px;
    letter-spacing: 0.8px;
    text-align: left;
    color: ${colors.black};
    text-decoration: none;
  }
  .menu-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
  .menu-item-logo {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
  #menu-item-no-cursor {
    cursor: default;
    text-decoration: none;
  }
  .menu-item-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.5px;
    color: ${colors.black};
  }

  .sub-menu-item-box {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: intrinsic;
    padding: 14px 0 14px 0;
    background-color: ${colors.white};
  }
  #sub-menu-item-box-first {
    grid-row: 3;
    grid-column: 2;
  }
  .sub-menu-item {
    width: 100%;
    height: 31px;
    align-self: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  }
  .sub-menu-item-text {
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0.4px;
    color: ${colors.black};
  }
  .sub-menu-item-text:hover {
    border-bottom: 1px solid ${colors.brightYellow};
    padding-bottom: 2px;
    color: ${colors.brightYellow};
  }

  .logo-box {
    height: 100%;
    width: 183px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
  }
`;

class Menubar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      hoveredMenu: undefined,
      menuItemTextHoverStyle: {
        borderBottom: '4px solid #faf400',
        borderRadius: '2px',
        paddingBottom: '3px',
        color: colors.brightYellow,
      },
      menuItemTextOtherStyle: {
        color: colors.black,
      },
      menuItemTextDefaultStyle: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '19px',
        letterSpacing: '0.5px',
        color: colors.black,
      },

      // 모달
      modalShowLogout: false,
    };
    this.open = this.modalOpen.bind(this);
    this.close = this.modalClose.bind(this);
  }

  handleLogout = () => {
    // logout api
    this.close();
  };

  handleHover = (hoveredMenu) => {
    if (hoveredMenu === undefined) {
      this.setState({
        isHover: false,
        hoveredMenu: undefined,
      });
    } else {
      this.setState({
        isHover: true,
        hoveredMenu: hoveredMenu,
      });
    }
  };

  modalOpen(modalName) {
    if (modalName === 'Logout') this.setState({ modalShowLogout: true });
  }

  modalClose(modalName) {
    if (modalName === 'Logout') this.setState({ modalShowLogout: false });
  }

  render() {
    const {
      isHover,
      hoveredMenu,
      menuItemTextHoverStyle,
      menuItemTextOtherStyle,
      menuItemTextDefaultStyle,
    } = this.state;

    return (
      <MenuContainerGrid
        onMouseLeave={() => this.handleHover()}
        style={{
          gridTemplateColumns: '500px 95px 95px',
        }}
      >
        <div
          className="menu-item-logo"
          id="menu-item-no-cursor"
          onMouseOver={() => this.handleHover()}
        >
          <Link className="logo-box" to="/streaming">
            <span className="logo-text">SnowWhite</span>
          </Link>
        </div>
        <>
          <div
            className="menu-item"
            onMouseOver={() => this.handleHover('gallery')}
          >
            <span
              className="menu-item-text"
              style={
                isHover
                  ? hoveredMenu === 'gallery' && hoveredMenu !== undefined
                    ? menuItemTextHoverStyle
                    : menuItemTextOtherStyle
                  : menuItemTextDefaultStyle
              }
            >
              갤러리
            </span>
          </div>
          <div
            className="menu-item"
            onMouseOver={() => this.handleHover('logout')}
            onClick={this.handleLogout}
          >
            <span
              className="menu-item-text"
              style={
                isHover
                  ? hoveredMenu === 'logout' && hoveredMenu !== undefined
                    ? menuItemTextHoverStyle
                    : menuItemTextOtherStyle
                  : menuItemTextDefaultStyle
              }
            >
              로그아웃
            </span>
          </div>
          {isHover && hoveredMenu === 'gallery' && (
            <div
              className="sub-menu-item-box"
              id="sub-menu-item-box-first"
              onMouseOver={() => this.handleHover('gallery')}
              onMouseLeave={() => this.handleHover()}
            >
              <Link className="sub-menu-item" to="/gallery/images">
                <span className="sub-menu-item-text">이미지</span>
              </Link>
              <Link className="sub-menu-item" to="/gallery/videos">
                <span className="sub-menu-item-text">영상</span>
              </Link>
            </div>
          )}
        </>
      </MenuContainerGrid>
    );
  }
}

export default Menubar;
