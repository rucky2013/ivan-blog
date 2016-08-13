/**
 * 
 */
package com.ivan.server.test.base;

import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author ivan.yu
 *
 */

@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(locations={"file:conf/spring/applicationContext-*.xml","file:conf/dubbo/dubbo-*.xml"})  
// 添加注释@Transactional 回滚对数据库操作    
@Transactional
public class BaseSpringTest {
	
}
