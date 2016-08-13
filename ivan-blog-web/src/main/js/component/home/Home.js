    /**
 * Created by yu on 2016/5/19.
 */

import React from 'react';
import { Row, Col } from 'antd';
import Sider from './Sider';
import HeadMeun from './HeadMeun';

const Home = React.createClass({

   //初始化页面方法仅第一次渲染
   getInitialState: function() {
        return this.initPage(this.props);
    },

    //页面参数初始化方法
   initPage: function(props) {
      return{
        url : 'https://www.baidu.com',
        height : document.body.scrollHeight - 68+ 'px',
        userName : '',
        password : '',
      }
   },

   componentDidMount:function(){
     
   },

   switchUrl:function(url){
      this.setState({ url: url });
   },

   render:function(){
       return(
            <div>
              <Row>
                <HeadMeun />
              </Row>
              <Row>
                
                  <div style={{float:'right', color:'black',width:'85%',height: this.state.height }}>
                    <iframe src={ this.state.url }  width='100%' height='100%' frameborder='0' scrolling='auto'/>
                  </div>
               
                  <div style={{ height:'100%',width:'15%' }}>
                    <Sider ref="sider" switchUrl={ this.switchUrl }/> 
                  </div>
                
              </Row>
              <Row>
                12334
              </Row>
            </div>
       );
   }
});

module.exports = Home;