/**
 * 
 */
package com.ivan.biz.user.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.dubbo.config.annotation.Service;
import com.ivan.api.user.UserApi;
import com.ivan.biz.user.dao.UserDao;
import com.ivan.entity.user.User;
import com.ivan.server.base.BaseServiceImpl;

/**
 * @author ivan.yu
 *
 */

@Service
public class UserServiceImpl extends BaseServiceImpl<User> implements UserApi{

	@Autowired
	private UserDao userDao;
	/** 
	* 
	*
	* @author ivan.yu
	* @date 2016年7月21日 下午1:30:02
	* @param id
	* @return
	*/
	
	public User getUserById(String id) {
		return userDao.selectByPrimaryKey(id);
	}

}
