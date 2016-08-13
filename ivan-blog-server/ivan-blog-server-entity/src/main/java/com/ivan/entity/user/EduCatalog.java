package com.ivan.entity.user;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class EduCatalog implements Serializable{
    //ceshi	
    private String folderId;

    private String catalogId;

    private String name;

    private String description;

    private String parentId;

    private Short level;

    private String creator;

    private Date creareDate;

    private String extend;

    private String evpServer;

    public String getFolderId() {
        return folderId;
    }

    public void setFolderId(String folderId) {
        this.folderId = folderId == null ? null : folderId.trim();
    }

    public String getCatalogId() {
        return catalogId;
    }

    public void setCatalogId(String catalogId) {
        this.catalogId = catalogId == null ? null : catalogId.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId == null ? null : parentId.trim();
    }

    public Short getLevel() {
        return level;
    }

    public void setLevel(Short level) {
        this.level = level;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public Date getCreareDate() {
        return creareDate;
    }

    public void setCreareDate(Date creareDate) {
        this.creareDate = creareDate;
    }

    public String getExtend() {
        return extend;
    }

    public void setExtend(String extend) {
        this.extend = extend == null ? null : extend.trim();
    }

    public String getEvpServer() {
        return evpServer;
    }

    public void setEvpServer(String evpServer) {
        this.evpServer = evpServer == null ? null : evpServer.trim();
    }
}
