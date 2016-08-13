
import React from 'react';

const Footer = React.createClass({
	render:function(){
		return(
			<footer id="footer">
				<ul className="icons">
					<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
					<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
					<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
				</ul>
				<ul className="copyright">
					<li>&copy; Untitled</li><li>More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></li>
				</ul>
			</footer>
		)
	}
});

module.exports = Footer;