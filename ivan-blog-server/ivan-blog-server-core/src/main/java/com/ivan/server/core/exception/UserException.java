/**
 * 
 */
package com.ivan.server.core.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * @author ivan.yu
 *
 */
public class UserException extends RuntimeException{
	
	private static Log _log = LogFactory.getLog(UserException.class);
	
    private static final long serialVersionUID = 1L;
    
    public UserException() {
    	_log.debug("User Exception...");
//        super();
    }
    public UserException(String arg0, Throwable arg1, boolean arg2,
            boolean arg3) {
    	_log.debug("User Exception...1");
//        super(arg0, arg1, arg2, arg3);
    }
    public UserException(String arg0, Throwable arg1) {
    	_log.debug("User Exception...2");
//        super(arg0, arg1);
    }
    public UserException(String arg0) {
    	_log.debug("User Exception...3");
//        super(arg0);
    }
    public UserException(Throwable arg0) {
    	_log.debug("User Exception...4");
//        super(arg0);
    }
}
