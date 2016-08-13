package com.ivan.api.user;

import java.io.Serializable;
import java.util.List;

import com.ivan.api.base.BaseService;
import com.ivan.entity.user.EduCatalog;
import com.ivan.model.user.EduCatalogModel;

public interface EduCatalogApi extends BaseService<EduCatalog, Serializable>{
	
	public List<EduCatalogModel> getCatalogs(String folderId);
}
