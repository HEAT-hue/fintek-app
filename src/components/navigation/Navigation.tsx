// jshint esversion:6
import './navigation.scss';
import { Outlet } from "react-router-dom";

function Navigation() {
    return (
        <>
            <header className='navigationbar'>
                <h1>Navigation coming soon!</h1>
            </header>
            <Outlet />
        </>
    );
}

export { Navigation };