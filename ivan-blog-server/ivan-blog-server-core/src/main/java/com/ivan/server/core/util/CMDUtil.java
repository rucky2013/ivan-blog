package com.ivan.server.core.util;

import java.io.InputStreamReader;
import java.io.LineNumberReader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 执行操作系统命令的工具类
 */
public class CMDUtil {
	
	private static Logger log = LoggerFactory.getLogger(CMDUtil.class);
	
	//代表操作系统的系统变量
	private final static String SYSTEM_OS_NAME = "os.name";
	
	//Linux操作系统
	private final static String OS_LINUX = "linux";
	
	//Windows操作系统
	private final static String OS_WINDOWS = "windows";
	
	//获取当前操作系统类型
	private static String os = System.getProperty(SYSTEM_OS_NAME).toLowerCase();
	
	public static  Process handle = null;
	
	
	/** 
	* 判断是否为Linux
	*
	* @author ivan.yu
	* @date 2016年7月20日 上午8:09:02
	* @return
	*/
	private static boolean isLinux() {
		return os.indexOf(OS_LINUX) >= 0;
	}
	
	
	/** 
	* 判断是否为windows
	*
	* @author ivan.yu
	* @date 2016年7月20日 上午8:09:25
	* @return
	*/
	private static boolean isWindows() {
		return os.indexOf(OS_WINDOWS) >= 0;
	}
	
	/**
	 * 特定方法，仅用来中断windows下的node进程
	 * 
	 * @author ivan.yu
	 * @date 2016-4-11 下午7:07:32
	 */
	public static void killWindowsNodeProcess(){
		if(isWindows()) {
			 String cmdStr = "taskkill /im node.exe /f";
			 exeCmd(cmdStr);
		 } 
	}
	
	
	/**
	 * 执行系统命令
	 * 
	 * @param cmdStr
	 * @author ivan.yu
	 * @date 2016-3-30 上午10:26:10
	 */
	public static void exeCmd(String cmdStr) {
		 Runtime rt = Runtime.getRuntime();
		 Process p = null;
		 LineNumberReader br = null;
		 try {
			 if(isLinux()) {
				 String[] cmd = {"/bin/sh", "-c", cmdStr};
				 p = Runtime.getRuntime().exec(cmd); 
			 } else if(isWindows()) {
				 String cmd = "cmd /c ".concat(cmdStr);
				 p = rt.exec(cmd);
			 } else {
				 log.error("系统不支持该操作系统[{}], 系统将会退出", os);
				 System.exit(1);
			 }
             br = new LineNumberReader(new InputStreamReader(p.getInputStream())); 
             handle = p;
             StringBuffer sb = new StringBuffer();  
             String line = null; 
             while ((line = br.readLine()) != null) {
            	 log.info(line);
                 sb.append(line).append("\n");
             }
             
		 } catch(Exception e) {
			 log.error("执行系统命令失败,系统将会退出", e);

		 } finally {
			 if(br != null){
				 try{
					 br.close();
				 }catch(Exception e){
					 //do nothing
					 log.error(e.getMessage(), e);
				 }
			 }
		 }
		
	}

}
