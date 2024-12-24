// 导入axios实例
import request from '@/utils/request'
// 导入获取refreshToken的方法
import { getRefreshToken } from '@/utils/auth'
const apiMap = {
    // 登录
    login: {
        get: getCheckCode,
        login: userLogin,
        refresh: refreshToken
    },
    // 用户管理
    manage: {
        // add: addUser,
        // update: updateUser,
        // del: delUser,
        query: listUser,
        // queryById: getUserById,
        // reset: updatePwd // 重置密码
    },
    // 用户中心
    center: {
        // get: getUserInfo,
        // update: updateUserInfo
    }
}
export default apiMap

// 获取图形验证码
function getCheckCode(uuid) {
    return request({
        url: '/user/checkCode?uuid=' + uuid,
        method: 'get'
    })
}
// 刷新过期token
function refreshToken() {

}
// 添加用户登录请求
function userLogin(form) {

}
// 获取用户列表
function listUser(params) {

}
