/*
 * @Author: MonsterDOG
 * @Date: 2023-09-05 16:38:41
 * @LastEditors: MonsterDOG
 * @LastEditTime: 2023-09-05 16:45:11
 * @FilePath: \koa2-weibo-code\src\services\_format.js
 * @Description: 数据格式化
 */

const { DEFAULT_PICTURE } = require('../conf/constant')

/**
 * @description: 用户默认头像
 * @param {Object} obj 用户对象
 * @return {*}
 */
function _formatUserPicture(obj) {
  if (obj.picture == null) {
    obj.picture = DEFAULT_PICTURE
  }
  return obj
}

/**
 * @description: 格式化用户信息
 * @param {Array|Object} list 用户列表或者单个用户对象
 * @return {*}
 */
function formatUser(list) {
  if (list == null) {
    return list
  }

  if (list instanceof Array) {
    // 数组 用户列表
    return list.map(_formatUserPicture)
  }

  // 单个对象
  return _formatUserPicture(list)
}

module.exports = {
  formatUser
}