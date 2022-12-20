import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Share/Footer';
import Header from './Share/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;