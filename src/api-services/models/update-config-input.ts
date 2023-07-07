/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { YesNoEnum } from './yes-no-enum';
/**
 * 
 * @export
 * @interface UpdateConfigInput
 */
export interface UpdateConfigInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof UpdateConfigInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof UpdateConfigInput
     */
    isDelete?: boolean;
    /**
     * 名称
     * @type {string}
     * @memberof UpdateConfigInput
     */
    name: string;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateConfigInput
     */
    code?: string | null;
    /**
     * 属性值
     * @type {string}
     * @memberof UpdateConfigInput
     */
    value?: string | null;
    /**
     * 
     * @type {YesNoEnum}
     * @memberof UpdateConfigInput
     */
    sysFlag?: YesNoEnum;
    /**
     * 分组编码
     * @type {string}
     * @memberof UpdateConfigInput
     */
    groupCode?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateConfigInput
     */
    orderNo?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateConfigInput
     */
    remark?: string | null;
}