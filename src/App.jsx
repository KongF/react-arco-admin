import React,{Suspense,useEffect} from 'react'
// 导入路由及react-redux钩子
import { useNavigate, useRoutes } from 'react-router-dom'
// 导入接口
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoAsync } from "./store/reducers/userSlice";
import { generateRoutes } from "./store/reducers/permissionSlice";
import { getToken } from "./utils/auth";
//导入loading组件
import Loading from "./components/Loading";

export default function App() {
  const dispatch = useDispatch()
  const routes = useSelector((state) => state.permission.routes)
  //跳转方法
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      // 从本地获取token
      const token = getToken()
      // 如果token存在，说明用户已登录
      if (token) {
        // 调用getUserInfoAsync获取用户信息
        await dispatch(getUserInfoAsync())
        // 调用generateRoutes获取路由信息
        await dispatch(generateRoutes())
      } else {
        navigate('/login',{ replace: true})
      }
    }
    fetchData()
  }, [dispatch])
  // 利用hook转换路由表
  const element = useRoutes(routes)
  return (
      <>
        <Suspense fallback={<Loading />}>
          {routes && element}
        </Suspense>
      </>

  )
}
