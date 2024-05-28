import type { Metadata } from "next";
import "./globals.scss";
import Icon from '@/components/Icon/Icon'

export const metadata: Metadata = {
  title: "Romy Zhang",
  description: "Romy Zhang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-header">
          <div className="layout-header-avatar">
            <div className="layout-header-avatar-icon"></div>
          </div>
          <div className="layout-header-nav">
            <div className="layout-header-nav-item">
              <Icon name="home" />
              <span className="layout-header-nav-item-text"> 首页</span>
            </div>
            <div className="layout-header-nav-item">
              <Icon name="article" />
              <span className="layout-header-nav-item-text"> 文稿</span>
            </div>
            <div className="layout-header-nav-item">
              <Icon name="diary" />
              <span className="layout-header-nav-item-text"> 日记</span>
            </div>
            <div className="layout-header-nav-item">
              <Icon name="album" />
              <span className="layout-header-nav-item-text"> 相册</span>
            </div>
            <div className="layout-header-nav-item">
              <Icon name="time" />
              <span className="layout-header-nav-item-text"> 时光</span>
            </div>
          </div>
          <div className="layout-header-user">
            <div className="layout-header-user-avatar">
              <Icon name="user" />
            </div>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
