import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Практична робота 1</Link>
                    </li>
                    <li>
                        <Link to="/second">Практична робота 2</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
