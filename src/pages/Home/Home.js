import Navbar from "../../components/Navbar/Navbar";
import React from "react";
import {Outlet} from "react-router-dom";
function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}
export default Home;
