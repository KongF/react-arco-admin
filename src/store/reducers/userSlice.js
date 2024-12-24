import { createSlice } from '@reduxjs/toolkit'
import { getRefreshToken, getToken, removeRefreshToken, removeToken, setRefreshToken, setToken } from '@/utils/auth'
import userApi from '@/api/user'

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
    }
  }
})
// 导出经过redux包装的action对象
export const { setUserinfo } = userSlice.actions
// 导出切片对象
export default userSlice
