/**
 * 
 */
package com.ivan.biz.user.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


/**
 * @author ivan.yu
 *
 */

@Aspect
@Component
public class TestAop {
	private static final Logger log = LoggerFactory.getLogger(TestAop.class);
	
	@Pointcut("execution(* com.ivan.api.user.*Api.*(..))")
	public void testPointCut(){
		log.info("test point cut...");
	}
	
	@Before("testPointCut()")
	public void before(JoinPoint joinPoint){
		log.info("test point before");
	}
	
	@After("testPointCut()")
	public void after(JoinPoint joinPoint) {
		
	}
	
	@AfterThrowing(pointcut = "testPointCut()", throwing = "error")
	public void afterThrowing(JoinPoint jp, Throwable error) {
		log.info("error:" + error);
	}
}
