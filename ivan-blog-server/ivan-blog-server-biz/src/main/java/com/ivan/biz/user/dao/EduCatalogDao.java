package com.ivan.biz.user.dao;

import java.io.Serializable;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.ivan.entity.user.EduCatalog;
import com.ivan.model.user.EduCatalogModel;
import com.ivan.server.base.BaseDao;


@SuppressWarnings("serial")
@Repository("eduCatalogDao")
public class EduCatalogDao extends BaseDao<EduCatalog, Serializable>{
	
	public List<EduCatalogModel> getCatalogs(String folderId){
		return getSqlSession().selectList("getCatalogs", folderId);
	}
}
