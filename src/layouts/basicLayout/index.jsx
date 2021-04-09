import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import routes from '../../router/routes';
import { Link } from 'react-router-dom';
// import st from "./notfound.module.scss";
// import st from './notfound.scss';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function (props) {

  const [menus, setMenus] = useState([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState([])
  useEffect(() => {
    console.log(props)
    console.log(routes)
    setDefaultSelectedKeys(props.router.path)
    // // 把一级 Layout 的 children 作为菜单项
    // this.menus = props.navData.reduce(
    //   (arr, current) => arr.concat(current.children),
    //   []
    // );
  });
  const getNavMenuItems = (menus) => {
    if (menus && menus.length > 0) {
      {
        return menus.map(item => {
          if (item.children && item.children.some(child => child.name)) {
            //item.path对应props.router.children[0].path
            return (
              <SubMenu key={item.path} title={item.name}>
                {getNavMenuItems(item.children)}
              </SubMenu>
            )
          }
          return (
            <Menu.Item key={item.path.split('/')[0]}>
              <Link
                to={props.router.path + item.path}
              // target={item.target}
              // replace={itemPath === this.props.location.pathname}
              >
                {/* {icon} */}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        })
      }
    }
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultSelectedKeys]}>
          {
            routes.map((route, index) => {
              return (
                <Menu.Item key={route.path}>
                  <Link
                    key={route.path + index}
                    onClick={() => {
                      // if (route.to === '/publicsafety/system') {
                      //   // //获取并登录im
                      //   this.props.dispatch({
                      //     type: `global/imLogin`,
                      //     payload: {
                      //       username: this.state.userMobilePhone
                      //     }
                      //   });
                      // }
                      // this.mainmenu(index);
                    }}
                    // className={
                    //   this.state.currentGroup === index ? 'selected' : ''
                    // }
                    to={route.children ? route.path + route.children[0].children[0].path : route.path}
                  // replace={route.to === this.props.location.pathname}
                  >
                    {route.name}
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Header>
      <Layout>
        {
          props.router.children &&
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              // defaultSelectedKeys={['1']}
              defaultOpenKeys={[props.router.children[0].path]}
              style={{ height: '100%', borderRight: 0 }}
            >
              {getNavMenuItems(props.router.children)}
            </Menu>
          </Sider>
        }
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {
              props.component
            }
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
