import { createSlice } from '@reduxjs/toolkit'
import { getRefreshToken, getToken, removeRefreshToken, removeToken, setRefreshToken, setToken } from '@/utils/auth'
import userApi from '@/api/user'
import { generateRoutes } from './permissionSlice'

/**
 * 创建一个用户状态切片
 */
const userSlice = createSlice({
  // 用来作为区分action的名称
  name: 'user',
  // 状态初始值
  initialState: () => {
    // 如果localStorage中有从其中取，否则为null
    const token = getToken() || null
    return {
      token,
      userinfo: { username: 'Alan' }
    }
  },
  // 状态操作方法
  reducers: {
    setUserinfo(state, action) {
      const { payload } = action
        state.userinfo = payload
    },
    login(state, action) {
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
      // 将数据持久化
      setToken(state.token)
      setRefreshToken(state.refreshToken)
    },
    logout(state, action) {
      state.token = null
      state.refreshToken = null
      state.userinfo = null
      // 移除存储中的信息
      removeToken()
      removeRefreshToken()
    }
  }
})
// 导出经过redux包装的action对象
export const { login, setUserinfo,logout } = userSlice.actions
// 导出获取登录用户信息的异步方法
export const getUserInfoAsync = () => async (dispatch) => {
  const { data } = await userApi.center.get()
  dispatch(setUserinfo({ ...data, avatar: data.avatar ? process.env.React_APP_IMG_API + '/' + data.avatar : null }))
  return data
}
// 登录异步方法
export const loginAsync = (payload) => async (dispatch) => {
  const { data } = await userApi.login.login(payload)
  dispatch(login(data))
  const userinfo = await dispatch(getUserInfoAsync())
  dispatch(generateRoutes(userinfo.menus))
}
// 导出切片对象
export default userSlice
