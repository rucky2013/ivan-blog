/**
 * 
 */
package com.ivan.server.core.util;

import java.io.Serializable;

/**
 * @author ivan.yu
 *
 */
public class PageForm implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int pageNum;
	private int pageSize;
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	
}
