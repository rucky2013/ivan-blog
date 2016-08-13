package com.ivan.blog.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.dubbo.rpc.RpcContext;
import com.ivan.api.user.UserApi;
import com.ivan.blog.web.constants.WebConstants;
import com.ivan.entity.user.User;

@Controller
@RequestMapping("/")
public class DemoController {
	
	
	@RequestMapping(value = "/**", method = RequestMethod.GET)
	public ModelAndView redirectToBase() {
		ModelAndView modelAndView = new ModelAndView(WebConstants.BASE_PAGE_URL);  
		return modelAndView;  
	}
	
	@RequestMapping(value = "demo")
	public @ResponseBody String toHome() {
		return "VideoDemo1";
	}
	
}
