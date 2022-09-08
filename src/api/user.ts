/*
 * @Description:
 * @Author: FuHang
 * @Date: 2022-09-08 01:52:03
 * @LastEditTime: 2022-09-08 17:57:15
 * @LastEditors:
 * @FilePath: \vue-naive-admin\src\api\user.ts
 */
import request from "@/utils/http";

/**
 * @param {string} id
 * @description: 获取用户详细信息
 */
export const getSysUserInfo = (id: string) =>
  request.get(`/sysuser/info/${id}`);

/**
 * @param {object} params
 * @description: 获取用户分页列表数据
 */
export const getPaginationList = (params: object) =>
  request.get(`/sysuser/pagelist`, params);
