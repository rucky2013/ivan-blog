package com.ivan.biz.user.dao;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

import com.ivan.entity.user.User;
import com.ivan.server.base.BaseDao;

@SuppressWarnings("serial")
@Repository("userDao")
public class UserDao extends BaseDao<User, Serializable>{
	
}