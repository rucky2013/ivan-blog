/**
 * 
 */
package com.ivan.api.user;

import java.io.Serializable;

import com.ivan.api.base.BaseService;
import com.ivan.entity.user.User;

/**
 * @author ivan.yu
 *
 */
public interface UserApi extends BaseService<User, Serializable>{
	public User getUserById(String id);
}
