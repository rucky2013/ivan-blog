package com.ivan.server.core.util;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SystemConfigUtil {
	private static final Log log = LogFactory.getLog(SystemConfigUtil.class);
	private static final String PROP_BASE_DIR = "basedir";
	public static final String URL_PROTOCOL_FILE = "file:";
//	private static final String USERDIR_RELATIVE_PATH = File.separator + "src"
//			+ File.separator + "main" + File.separator + "resources"
//			+ File.separator;
	
	private static final String USERDIR_RELATIVE_PATH = File.separator;
	
	public static String getBaseDir(boolean refresh) {
		String basedir = System.getProperty("basedir");
		if (basedir == null) {
			basedir = System.getProperty("user.dir");
			if (basedir == null) {
				throw new RuntimeException("Please set 'basedir' property.");
			}
			basedir = basedir + USERDIR_RELATIVE_PATH;
		}
		if ((!basedir.endsWith("/")) && (!basedir.endsWith("\\"))) {
			basedir = basedir.concat(File.separator);
		}
		basedir = convertURLPath(basedir);
		if (refresh) {
			setSystemProperty(basedir);
		}
		if (log.isTraceEnabled()) {
			log.trace("Current basedir path is [" + basedir + "].");
		}
		return basedir;
	}

	private static void setSystemProperty(String basedir) {
		System.setProperty("basedir", basedir);
	}

	private static String convertURLPath(String basedir) {
		URL url = null;
		try {
			url = new URL(basedir);
		} catch (MalformedURLException e) {
			try {
				url = new URL("file:" + basedir);
			} catch (MalformedURLException e1) {
				log.error("Invalid basedir path: [" + basedir
						+ "]. It must be an exist path in the file system.");
			}
		}
		if (url == null) {
			return null;
		}
		String pathStr = url.toString();
		return pathStr;
	}
}
