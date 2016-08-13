
import React from 'react';
import reqwest from 'reqwest';
import { Icon, Input  } from 'antd';
var ReactMarkdown = require('react-markdown');

var input = `# Live demo Changes are automatically rendered as you type.`;

const BlogList = React.createClass({

    componentWillMount:function () {
        this.getBlog();

    },

    getBlog:function () {
        //TODO 获取10条文章列表

    },

    viewMore:function (id) {
        this.props.viewMore(id);
    },

	render:function(){
		return(
			<div>
			<div id="main" style={ this.props.style }>
				<Input placeholder="基本使用"/>
				<Icon type="heart" />
				<section id="one">
						<header className="major">
							<h3>史上最详细Windows版本搭建安装React Native环境配置</h3>
						</header>
						<ul className="actions">
							<li>
                                <a href="#" className="button" onClick={ this.viewMore.bind(this,1) }>查看更多</a>
								<Icon type="heart-o" />
								<Icon type="heart" />
                            </li>
						</ul>
				</section>
				<section id="one">
					<header className="major">
						<h3>史上最详细Windows版本搭建安装React Native环境配置</h3>
					</header>
					<ul className="actions">
						<li>
							<a href="#" className="button" onClick={ this.viewMore.bind(this,1) }>查看更多</a>
						</li>
					</ul>
				</section>
			</div>
			</div>
		);
	}
});

module.exports = BlogList;