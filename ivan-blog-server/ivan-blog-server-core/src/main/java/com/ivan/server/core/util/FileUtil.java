package com.ivan.server.core.util;

import java.io.File;
import java.net.URL;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 文件操作的工具类，一些通用的文件操作方法可以写在这里
 * 
 * @author WanWei
 * @date 2014-6-24 下午5:17:42
 */
public class FileUtil {

	private static final Logger log = LoggerFactory.getLogger(FileUtil.class);

	public static String XML_FILE_SUFFIX = ".xml";
	
	public static String BPMN_FILE_SUFFIX="bpmn";
	
	private final static String USER_DIR = "user.dir";
	
	//用来定义配置文件的路径，使用jvm参数传入
	public static final String BASE_DIR = "push_basedir";
	//用来定义相对于配置文件相对于base_dir的根目录
	private static final String CONF_HOME = "config_home";

	private static final String USERDIR_RELATIVE_PATH = "src"
			+ File.separator + "main" + File.separator + "resources"
			+ File.separator;
	private static final String USERDIR_RELATIVE_TEST_PATH = "src"
			+ File.separator + "test" + File.separator + "resources"
			+ File.separator;


	/**
	 * 获取文件的绝对路径
	 * 
	 * @param relativePath
	 * @return String
	 * @author WanWei
	 * @date 2014-6-24 下午5:23:15
	 */
	public static String getRepositoryPath(String relativePath) {
		String basedir = System.getProperty(BASE_DIR);
		String configHome = System.getProperty(CONF_HOME);
		if(basedir == null){
			//优先根据当前classpath路径来获取 一般在开发期使用
			URL url = FileUtil.class.getClassLoader().getResource(relativePath);
			if(url != null){
				basedir = url.getPath().replace(relativePath, "");
			}else{
				basedir = filePathFormat(System.getProperty(USER_DIR));
				if (configHome != null) {
					basedir = filePathFormat(basedir.concat(configHome));
				}
				basedir = filePathFormat(basedir.concat(USERDIR_RELATIVE_PATH));
			}
		} else if (!basedir.endsWith("/") && !basedir.endsWith("\\") && !basedir.endsWith(File.separator)) {
			basedir = basedir.concat(File.separator);
			if (configHome != null) {
				basedir = filePathFormat(basedir.concat(configHome));
			}
		}
		basedir = filePathFormat(basedir.concat(relativePath));
		return basedir;
	}

	/**
	 * 根据filter选择文件
	 *
	 * @param currentDir
	 *         当前目录
	 * @param filePath
	 * @param filter
	 *
	 * @author WanWei
	 * @date 2014-6-25 上午11:41:07
	 */
	public static void filterFile(File currentDir, List<String> filePath,
								   List<String> filter, String filePrefix, String fileSuffix) {
		File[] subFiles = currentDir.listFiles();
		if (subFiles == null) {
			log.warn("当前目录[{}]下没有文件。", currentDir.getName());
			return;
		}
		for (File file : subFiles) {
			String fname = file.getName();
			if ((filter == null) ||filter.isEmpty()) {
				if (file.isDirectory()) {
					filterFile(file, filePath, filter, filePrefix, fileSuffix);
				} else if (fname.endsWith(fileSuffix)
						&& fname.startsWith(filePrefix)) {
					filePath.add(file.getAbsolutePath());
				}
			} else if (file.isDirectory() && filter.contains(fname)) {
				filterFile(file, filePath, filter, filePrefix, fileSuffix);
			} else if (fname.endsWith(fileSuffix)
					&& fname.startsWith(filePrefix)
					&& filter.contains(file.getParentFile().getName())) {
				filePath.add(file.getAbsolutePath());
			}
		}
	}
	/**
	 * 获取src/test/java路径下的repo路径
	 * 
	 * @param relativePath
	 * @return
	 * @author Mu Xian Ming
	 * @date 2015年1月6日 下午7:30:34
	 */
	public static String getTestRepoPath(String relativePath) {
		String userDir = filePathFormat(System.getProperty(USER_DIR));
		String basedir = filePathFormat(userDir.concat(USERDIR_RELATIVE_TEST_PATH));
		basedir = filePathFormat(basedir.concat(relativePath));
		return basedir;
	}
	
	/**
	 * 文件路径格式化
	 * @param path
	 * @return String
	 * @author WanWei
	 * @date 2014-6-24 下午5:18:45
	 */
	private static String filePathFormat(String path) {
		if (!path.endsWith(File.separator)) {
			path = path.concat(File.separator);
		}
		return path;
	}
}
