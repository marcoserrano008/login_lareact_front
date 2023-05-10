import useAuthcontext from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const GuestLayout = () => {

    const {user} = useAuthcontext();

    return !user ? <Outlet /> : <Navigate to="/" />

}

export default GuestLayout