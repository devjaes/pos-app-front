import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    isPublic: boolean 
    isAuthorized: boolean
}

const ProtectedRoute = ({ isPublic, isAuthorized }: ProtectedRouteProps) => {
  return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute;