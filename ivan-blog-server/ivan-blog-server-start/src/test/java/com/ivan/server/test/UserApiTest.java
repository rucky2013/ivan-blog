/**
 * 
 */
package com.ivan.server.test;

import org.junit.Test;

import com.alibaba.dubbo.config.annotation.Reference;
import com.ivan.api.user.UserApi;
import com.ivan.entity.user.User;
import com.ivan.server.test.base.BaseSpringTest;

/**
 * @author ivan.yu
 *
 */
public class UserApiTest extends BaseSpringTest{

	@Reference
	private UserApi userApi;
	
	@Test
	public void testGetUserById() {
//		System.err.println(8%(2<<3));
//		User user = new User();
//		user.setId("2");
//		user.setName("于峰");
//		userApi.insert(user);
//		int i = 2/0;
		userApi.getUserById("1");
	}
	
	@Test
	public void testAddUser(){
		User user = new User();
		user.setId("1");
		user.setName("于峰");
		userApi.insert(user);
	}
}
