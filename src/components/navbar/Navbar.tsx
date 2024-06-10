import "./Navbar.scss";
import Icon from "@/components/icon/Icon";

const Navbar = () => {
  return (
    <div className="layout-navbar">
      <div className="layout-navbar-avatar">
        <div className="layout-navbar-avatar-icon"></div>
      </div>
      <div className="layout-navbar-nav">
        <div className="layout-navbar-nav-item">
          <Icon name="home" />
          <span className="layout-navbar-nav-item-text"> 首页</span>
        </div>
        <div className="layout-navbar-nav-item">
          <Icon name="article" />
          <span className="layout-navbar-nav-item-text"> 文稿</span>
        </div>
        <div className="layout-navbar-nav-item">
          <Icon name="diary" />
          <span className="layout-navbar-nav-item-text"> 日记</span>
        </div>
        <div className="layout-navbar-nav-item">
          <Icon name="album" />
          <span className="layout-navbar-nav-item-text"> 相册</span>
        </div>
        <div className="layout-navbar-nav-item">
          <Icon name="time" />
          <span className="layout-navbar-nav-item-text"> 时光</span>
        </div>
      </div>
      <div className="layout-navbar-user">
        <div className="layout-navbar-user-avatar">
          <Icon name="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
