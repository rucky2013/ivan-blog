/**
 * Created by ivan.yu on 2016/5/20.
 */

import React from 'react';
import { Menu, Icon } from 'antd';

import Logo from '../../assets/img/logo.jpg'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HeadMeun = React.createClass({
    getInitialState() {
        return {
            current: 'mail',
        };
    },
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                  style={{ float:'right' }}>
                <Menu.Item key="mail">
                    <img src={Logo} />
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />导航二
                </Menu.Item>
                
                <Menu.Item key="alipay">
                    <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
                </Menu.Item>
            </Menu>
        );
    },
});

module.exports = HeadMeun