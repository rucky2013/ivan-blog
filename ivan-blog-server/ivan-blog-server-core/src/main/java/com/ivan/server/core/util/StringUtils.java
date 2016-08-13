package com.ivan.server.core.util;

import java.io.UnsupportedEncodingException;

/**
 * StringUtils
 * 
 */
public class StringUtils extends org.apache.commons.lang.StringUtils {

	private static final String ENCODING_ISO_8859_1 = "ISO-8859-1";

	private static final String ENCODING_GBK = "GBK";

	/**
	 * 将GBK编码的字符串转换为ISO-8859-1格式
	 * 
	 * @param in 原字符串
	 * @return 转换後的字符串
	 * @date 2014-10-14
	 */
	public static String toISO8859_1(String in) {
		return toISO8859_1(in, ENCODING_GBK);
	}

	/**
	 * 将指定编码的字符串转换为ISO-8859-1格式
	 * 
	 * @param in 原字符串
	 * @param fromEncoding The name of a supported
	 *        {@linkplain java.nio.charset.Charset charset}
	 * @return 转换後的字符串
	 * @date 2014-10-14
	 */
	public static String toISO8859_1(String in, String fromEncoding) {
		if (org.apache.commons.lang.StringUtils.isBlank(in)) {
			return in;
		}

		try {
			byte b[] = in.getBytes(fromEncoding);
			return new String(b, ENCODING_ISO_8859_1);
		} catch (UnsupportedEncodingException unsupportedencodingexception) {
			return in;
		}
	}

	/**
	 * GBK内码字符串还原为Unicode字符串，如： "614263C4E3BAC3446566" 还原为: "aBc你好Def"
	 * 
	 * @param in GBK内码字符串
	 * @return 转换後的字符串
	 * @date 2015年10月10日 下午4:17:48
	 */
	public static String gbk2Unicode(String in) {
		if (org.apache.commons.lang.StringUtils.isBlank(in)) {
			return in;
		}

		byte[] bytes = new byte[in.length() / 2];
		for (int i = 0, j = 0; i < in.length(); i += 2, j++) {
			bytes[j] = Integer.decode("0X" + in.substring(i, i + 2)).byteValue();
		}

		try {
			return new String(bytes, ENCODING_GBK);
		} catch (UnsupportedEncodingException e) {
			return in;
		}
	}
}
