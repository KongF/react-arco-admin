import Home from '@/pages/Home/index'
import { Navigate } from 'react-router-dom'
import Layout from '@/Layout/index'
import System from '@/pages/System'
import User from '@/pages/User'
import Role from '@/pages/Role'
import Auth from '@/pages/Auth'

const routes = [
  // 访问/时重定向到/home
  {
	path: '/',
	element: <Layout />,
	children: [
		{index: true, element: <Navigate to="/home" replace />},
		{path: 'home', element: <Home /> },
		{
			path: 'system',
			element: <System />,
			children: [
				{ index: true, element: <Navigate to="/system/user" replace /> },
				{ path: 'user', element: <User /> },
				{ path: 'role', element: <Role /> },
				{ path: 'auth', element: <Auth /> }
			]
		}
	]
  },
  {
	path: 'home',
	element: <Home />
  }
]
export default routes
