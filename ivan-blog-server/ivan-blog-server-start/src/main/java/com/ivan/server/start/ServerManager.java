/**
 * 
 */
package com.ivan.server.start;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.log4j.xml.DOMConfigurator;

import com.ivan.server.core.spring.ApplicationContextFactory;
import com.ivan.server.core.spring.ServerConfiguration;
import com.ivan.server.core.util.SystemConfigUtil;

/**
 * @author ivan.yu
 *
 */
public class ServerManager {
	
	private static Log _log = LogFactory.getLog(ServerManager.class);

	public static void main(String[] args) throws IOException {
		if (args.length == 1) {
			if (args[0].toLowerCase().indexOf("log4j") > 0) {
				try {
					DOMConfigurator.configure(args[0]);
				} catch (Exception ex) {
					_log.warn(ex.getMessage(), ex);
				}
			}
		}

		_log.info("Start ServerManager ...");

		_log.info("Base Dir is " + SystemConfigUtil.getBaseDir(true));
		
		SystemConfigUtil.getBaseDir(true);
		List<String> contexts = new ArrayList<String>();
		contexts = ServerConfiguration.getSpringContext(contexts,"spring","applicationContext");
		contexts = ServerConfiguration.getSpringContext(contexts,"dubbo","dubbo");
		
		ApplicationContextFactory.initialize((String [])contexts.toArray(new String[0]));

		System.in.read(); // 按任意键退出
	}
}
