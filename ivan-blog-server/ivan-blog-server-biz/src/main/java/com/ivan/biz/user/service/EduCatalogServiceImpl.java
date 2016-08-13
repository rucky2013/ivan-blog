package com.ivan.biz.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.dubbo.config.annotation.Service;
import com.ivan.api.user.EduCatalogApi;
import com.ivan.biz.user.dao.EduCatalogDao;
import com.ivan.entity.user.EduCatalog;
import com.ivan.model.user.EduCatalogModel;
import com.ivan.server.base.BaseServiceImpl;

@Service
public class EduCatalogServiceImpl extends BaseServiceImpl<EduCatalog> implements EduCatalogApi{

	@Autowired
	private EduCatalogDao eduCatalogDao;

	public List<EduCatalogModel> getCatalogs(String folderId) {
		return eduCatalogDao.getCatalogs(folderId);
	}
	
}
