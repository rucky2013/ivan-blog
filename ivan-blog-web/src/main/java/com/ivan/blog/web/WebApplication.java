package com.ivan.blog.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.ivan.server.core.util.CMDUtil;

//@ImportResource(value = WebApplication.CONFI_LOCATION)
//@ConditionalOnResource(resources = { WebApplication.CONFI_LOCATION })
@ComponentScan(basePackages = WebApplication.BASE_SCAN_PACKAGE)
@ServletComponentScan
@Configuration
@EnableAutoConfiguration
public class WebApplication extends WebMvcConfigurerAdapter {
		// Dubbo客户端配置文件路径
		protected static final String CONFI_LOCATION = "file:conf/dubbo-client.xml";

		// Spring扫描的包路径
		protected static final String BASE_SCAN_PACKAGE = "com.ivan";

		// 生产环境webpack编译命令
		// private static final String WEBPACK_BUILD_CMD_PRODUCTION = "webpack -p -d --display-error-details";

		// 开发环境webpack编译命令
		private static final String WEBPACK_BUILD_CMD_DEV = "cd ProjectPath && npm run start";

		public static void main(String[] args) {
			SpringApplication.run(WebApplication.class, args);
			
			CMDUtil.exeCmd(WEBPACK_BUILD_CMD_DEV.replace("ProjectPath",System.getProperty("user.dir")));
		}
}
