package com.ivan.server.core.spring;

import java.io.File;
import java.io.FileFilter;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class ApplicationContextFactory
{
  private static final Log log = LogFactory.getLog(ApplicationContextFactory.class);
  private static ApplicationContext context = null;

  public static ApplicationContext getApplicationContext()
  {
    return context;
  }

  public static void publishEvent(ApplicationEvent event)
  {
    context.publishEvent(event);
  }

  public static void initializeFS(String[] files)
  {
    if (files != null)
      context = new FileSystemXmlApplicationContext(files);
  }

  public static void initialize(String contextClassPath)
  {
    context = new ClassPathXmlApplicationContext(contextClassPath);
  }

  public static void initialize(String[] contextClassPath)
  {
    if (contextClassPath != null)
      context = new ClassPathXmlApplicationContext(contextClassPath);
  }

  public static <T> T getBean(Class<T> type)
  {
    if (context == null) {
      log.warn("Spring context has not bean initilaized!");
      return null;
    }
    return context.getBean(type);
  }

  public static <T> T getBean(String beanId, Class<T> requiredType)
  {
    if (context == null) {
      log.warn("Spring context has not bean initilaized!");
      return null;
    }
    return context.getBean(beanId, requiredType);
  }

  public static Object getBean(String beanId)
  {
    if (context == null) {
      log.warn("Spring context has not bean initilaized!");
      return null;
    }
    return context.getBean(beanId);
  }

  public static String[] getApplicationContext(String springContextPath)
  {
    File baseDirFile = new File(springContextPath);
    if (!baseDirFile.exists()) {
      log.warn("The path [" + springContextPath + "] of the spring context files is not existed, spring will not be initialized !");
      return null;
    }
    if (baseDirFile.isDirectory()) {
      File[] contextFiles = baseDirFile.listFiles(new FileFilter()
      {
        public boolean accept(File pathname)
        {
          if (pathname.getName().substring(pathname.getName().lastIndexOf(".")).equalsIgnoreCase(".xml")) {
            return true;
          }
          return false;
        }
      });
      if (contextFiles != null) {
        int length = contextFiles.length;
        String[] filePath = new String[length];
        for (int i = 0; i < length; i++) {
          filePath[(length - i - 1)] = contextFiles[i].getAbsolutePath();
        }
        return filePath;
      }
      log.warn("There is no spring context file in the given directory, spring will not be initialized !");
      return null;
    }
    return new String[] { springContextPath };
  }

  public static void setApplicationContext(ApplicationContext applicationContext)
  {
    if (applicationContext == null) {
      log.error("无效的ApplicationContext引用，SetApplicationContext失败！");
      return;
    }

    context = applicationContext;
  }
}