import { useEffect } from 'react'
import useAuthcontext from '../context/AuthContext'


const Home = () => {
  const { user } = useAuthcontext();


  return (
    <div>{user?.name}</div>
  )
}

export default Home