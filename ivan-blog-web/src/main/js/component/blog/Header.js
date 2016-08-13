
import React from 'react';

import headImg from '../../assets/images/avatar.jpg';
import headImg2 from '../../assets/images/thumbs/01.jpg';


const Header = React.createClass({

	getInitialState() {
		return {
			headImgStatus : 0,
		};
	},

	//鼠标经过事件
	headImgOnMouseOver:function(){
		console.log("鼠标经过")
        this.setState({ headImgStatus : 1 });
	},

	//鼠标离开事件
	headImgOnMouseOut:function(){
		console.log("鼠标离开")
        this.setState({ headImgStatus : 0 });
	},

    render:function(){
        return(
        	<header id="header">
				<a href="#" className="image avatar"
				   onMouseOver ={ this.headImgOnMouseOver }
				   onMouseOut = { this.headImgOnMouseOut }>
					<div style={{ display : this.state.headImgStatus === 0 ? 'block' : 'none'}}>
						<img src={headImg} alt="" />
					</div>
					<div style={{ display : this.state.headImgStatus === 1 ? 'block' : 'none'}}>
                        <img src={headImg2} alt="" />
					</div>
				</a>
				<h1>
					<strong>Ivan</strong>， 一个苦逼程序猿.<br />
					you can you up<br />
					no can no bb<br/>
				</h1>
			</header>
        );
    }
});

module.exports = Header;