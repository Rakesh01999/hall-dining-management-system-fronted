
import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;