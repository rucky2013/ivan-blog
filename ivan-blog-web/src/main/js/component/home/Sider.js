/**
 * Created by ivan.yu on 2016/5/20.
 */

import React from 'react';
import { Menu, Icon, Input, Button,InputGroup } from 'antd';
import classNames from 'classnames';
import SearchInput from '../common/SearchInput';

const SubMenu = Menu.SubMenu;

const Sider = React.createClass({
    getInitialState() {
        const data = [
            {
               key:'sub1',type:'search',name:'搜索' , 
               items:[
                        { 
                            key:'https://www.baidu.com',name:"百度" 
                        },
                        { 
                            key:'https://www.baidu.com',name:"百度" 
                        },
                        { 
                            key:'https://www.baidu.com',name:"百度" 
                        },
                    ]
            }
        ];
        return {
            current: '1',
            openKeys: ['sub1'],
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1),
        });
        this.props.switchUrl(e.key);
    },
    onToggle(info) {
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    },

    render() {
        
        return (
            <div>
                <Input />
                <Menu onClick={this.handleClick}
                  openKeys={this.state.openKeys}
                  onOpen={this.onToggle}
                  onClose={this.onToggle}
                  selectedKeys={[this.state.current]}
                  mode="inline">

                <SubMenu key="sub1" title={<span><Icon type="search" /><span>搜索</span></span>}>
                    <Menu.Item key="https://www.baidu.com" >百度</Menu.Item>
                    <Menu.Item key="https://www.google.com">Goolge</Menu.Item>
                    <Menu.Item key="https://www.sogou.com">搜狗</Menu.Item>
                    <Menu.Item key="https://www.so.com/">360搜索</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>应用</span></span>}>
                    <Menu.Item key="http://android.myapp.com/">应用宝</Menu.Item>
                    <Menu.Item key="http://apk.hiapk.com/">安卓市场</Menu.Item>
                    <Menu.Item key="http://www.wandoujia.com/apps">豌豆荚</Menu.Item>
                    <Menu.Item key="http://shouji.baidu.com/">百度手机助手</Menu.Item>
                    <Menu.Item key="http://www.anzhi.com/">安智市场</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="message" /><span>论坛</span></span>}>
                    <Menu.Item key="http://www.feng.com/">威锋论坛</Menu.Item>
                    <Menu.Item key="http://bbs.gfan.com/">机锋论坛</Menu.Item>
                    <Menu.Item key="http://bbs.tianya.cn">天涯论坛</Menu.Item>
                    <Menu.Item key="http://bbs.zhiyoo.com/">安智论坛</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="team" /><span>小清新</span></span>}>
                    <Menu.Item key="https://www.zhihu.com/">知乎</Menu.Item>
                    <Menu.Item key="https://www.douban.com/">豆瓣</Menu.Item>
                    <Menu.Item key="http://wufazhuce.com/">一个</Menu.Item>
                    <Menu.Item key="http://www.jianshu.com/">简书</Menu.Item>
                     <Menu.Item key="http://www.wandoujia.com/apps/com.wandoujia/preview">豌豆荚一览</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="shopping-cart" /><span>购物</span></span>}>
                    <Menu.Item key="https://www.taobao.com/">淘宝</Menu.Item>
                    <Menu.Item key="http://www.jd.com/">京东</Menu.Item>
                    <Menu.Item key="https://www.amazon.cn">亚马逊</Menu.Item>
                    <Menu.Item key="http://www.suning.com/">苏宁</Menu.Item>
                    <Menu.Item key="http://www.vip.com/">唯品会</Menu.Item>
                    <Menu.Item key="http://www.gome.com.cn/">国美</Menu.Item>
                    <Menu.Item key="http://www.mogujie.com/">蘑菇街</Menu.Item>
                    <Menu.Item key="http://www.meilishuo.com/">美丽说</Menu.Item>
                </SubMenu>
                </Menu>

            </div>
            
        );
    },
});

module.exports = Sider;