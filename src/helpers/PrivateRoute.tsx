import { Navigate, Outlet} from "react-router-dom";

export default function PrivateRouter() {
    const token = sessionStorage.getItem('token');
  
    return <div className="">{token ? <Outlet /> : <Navigate to="/auth/register" />}</div>;
  }