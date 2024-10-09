import {Link, Outlet} from "react-router-dom";

const Layout = ()=>{
    return (
        <div className="card text-center ">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">

                    <Link className="nav-link" to="admin">Admin</Link>
                </li>

                <li className="nav-item">

                    <Link className="nav-link" to="users">View Users</Link>
                </li>

            </ul>
        </div>
            <div className="h-100">
                <Outlet/>

            </div>
        </div>
    )

}
export default Layout;