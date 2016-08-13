package com.ivan.server.core.spring;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ivan.server.core.util.SystemConfigUtil;

public class ServerConfiguration {
	private static final Log log = LogFactory.getLog(ServerConfiguration.class);
	public static final String START_CONFIG_PATH = "\\conf\\config\\startup.properties";
	public static final String BASE_PATH = "${basedir}conf/";
	private static Properties properties = new Properties();

	static {
		String path = SystemConfigUtil.getBaseDir(false) + START_CONFIG_PATH;
		if (path.startsWith("file:")) {
			path = path.replace("file:", "");
		}
		FileInputStream in = null;
		try {
			in = new FileInputStream(path);
			properties.load(in);
		} catch (Exception e) {
			log.debug("FileInputStream is null");
			e.printStackTrace();
			if (in != null)
				try {
					in.close();
				} catch (IOException localIOException) {
					log.debug("FileInputStream 无法 close");
				}
		} finally {
			if (in != null)
				try {
					in.close();
				} catch (IOException localIOException1) {
				}
		}
	}

	public static List<String> getSpringContext(List<String> contexts, String path, String headerStr) {
		String contextStr = properties.getProperty( path + ".context", "");
		String[] contextSuffix = contextStr.split(",");
		if ((contextSuffix != null) && (contextSuffix.length > 0) && (contextSuffix[0] != "")) {
			for (int i = 0; i < contextSuffix.length; i++) {
				String context = BASE_PATH + path + "/" + headerStr + "-" + contextSuffix[i] + ".xml";
				if (!contexts.contains(context)) {
					contexts.add(context);
				}
			}
		}
		return contexts;
	}
}
