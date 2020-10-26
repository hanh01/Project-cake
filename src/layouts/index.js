import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import logowhite from './images/logo_cake.png';
import './style.scss';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    StarOutlined,
    ShopOutlined,

} from '@ant-design/icons';
import Home from "./Home";
import routes from '../constants/routes';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';
import {renderRoutes} from "react-router-config";


const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Head extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {route} = this.props;
        return (
            <>
            <div align="center" className="notification">
                Trang Web này không khả dụng với giao diện điện thoại bạn vui lòng tải
                ứng dụng sau:
                <a
                    className="notification-link"
                    href="https://apps.apple.com/vn/app/vinschool-teachers/id1275338591?l=v"
                >
                    https://apps.apple.com/vn/app/vinschool-teachers/id1275338591?l=v
                </a>
            </div>
            <Layout className="layoutall">
                <Sider trigger={null} collapsible collapsedWidth="0" collapsed={this.state.collapsed}>
                    <div className="logo">
                        <img className="logo-img text-center" src={logowhite} alt={''}  height="60px"/>
                    </div>
                    <Menu
                        onClick={this.handleClick}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={this.props.location.pathname}
                        defaultOpenKeys={['1']}
                    >
                        <Menu.Item key='/'  className="subme1">
                            <HomeOutlined />
                            <Link to=''>
                                Trang chủ
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            className="subme"
                            key="sub1"
                            title={<span className="spanme"> <StarOutlined />Loại bánh</span>}
                        >
                            <Menu.Item className="itemme" key={routes.cake}>
                                <Link to={routes.cake}>
                                    Cheesecake
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="itemme" key={routes.mochi}>
                                <Link to={routes.mochi}>
                                    Mochi
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="itemme" key={routes.macaron}>
                                <Link to={routes.macaron}>
                                   Macaron
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            className="subme"
                            key="sub2"
                            title={<span className="spanme"> <StarOutlined />Thống kê</span>}
                        >
                            <Menu.Item className="itemme" key={routes.getTermRevenue}>
                                <Link to={routes.getTermRevenue}>
                                    Doanh thu theo tháng
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="itemme" key={routes.getTopProduct}>
                                <Link to={routes.getTopProduct}>
                                    TOP 10 sản phẩm hot
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="itemme" key={routes.getProduct}>
                                <Link to={routes.getProduct}>
                                    Danh sách sản phẩm
                                </Link>
                            </Menu.Item>
                            <Menu.Item className="itemme" key={routes.getDev}>
                                <Link to={routes.getDev}>
                                    Dev
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {renderRoutes(route.routes)}
                    </Content>
                </Layout>
            </Layout>
                </>
        );
    }
}
export default Head;