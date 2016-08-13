package com.ivan.server.test;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Test;

import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.fastjson.JSON;
import com.ivan.api.user.EduCatalogApi;
import com.ivan.model.user.EduCatalogModel;
import com.ivan.server.test.base.BaseSpringTest;

public class EduCatalogApiTest  extends BaseSpringTest{
	
	@Reference
	private EduCatalogApi eduCatalogApi;
	
	@Test
	public void testGetCatalogs(){
		List<EduCatalogModel> list = eduCatalogApi.getCatalogs("");
		System.err.println(JSON.toJSONString(list));
	}
}
