package com.ivan.model.user;


import java.io.Serializable;
import java.util.List;

import com.ivan.entity.user.EduCatalog;

@SuppressWarnings("serial")
public class EduCatalogModel extends EduCatalog implements Serializable{
	
	private List<EduCatalog> children;

	public List<EduCatalog> getChildren() {
		return children;
	}

	public void setChildren(List<EduCatalog> children) {
		this.children = children;
	}
	
	
}
