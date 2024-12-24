import React ,{ useEffect } from 'react';
import userApi from '@/api/user';

const Home = () => {
    useEffect(() => {
        const fetchCode = async () => {
            const code = await userApi.login.get(121123)
            console.log(code)
        }
        fetchCode()
    }, [])

  return (
    <div>
      <h2>Home</h2>
    </div>
    )
}
export default Home
