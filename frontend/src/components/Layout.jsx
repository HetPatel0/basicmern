import {Link, Outlet} from "react-router-dom";

const Layout = ()=>{
    return (
        <div className="card text-center bg-secondary ">
        <div className="card-header ">
            <ul className="nav nav-tabs card-header-tabs bg-secondary p-2 ">
                <li className="nav-item  rounded bg-gradient me-3">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item rounded me-3">

                    <Link className="nav-link" to="admin">Admin</Link>
                </li>

                <li className="nav-item rounded me-3">

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