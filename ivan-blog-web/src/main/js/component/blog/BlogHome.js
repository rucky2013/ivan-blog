/**
 * Created by ivan.yu on 2016/5/24.
 */

import React from 'react';
import Header from './Header';
import BlogList from './BlogList';
import Footer from './Footer';
import BlogInfo from './BlogInfo';

import reqwest from 'reqwest';

const BlogHome = React.createClass({

	getInitialState:function () {
		return{
			viewShow : false,
		};
	},
	
	componentWillMount: function() {
		reqwest({
            url: '/getUser',
            method: 'POST',
            success: function (resp) {
                console.log(resp);
            }
        });
	},

	//查看更多,参数文章id
	viewMore:function (id) {
		console.log(id);
		this.setState({ viewShow : true });
	},

    render:function(){
        return(
        	<div>
	        	<Header />
	        	<BlogList style={{ display:this.state.viewShow ? 'none' : 'block' }} viewMore={ this.viewMore }/>
				<BlogInfo style={{ display:this.state.viewShow ? 'block' : 'none'}} />
	        	<Footer />
	        </div>
        );
    }
});

module.exports = BlogHome;