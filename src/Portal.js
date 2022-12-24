import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal() {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <Dashboard />
                    </div>
                    <Footer />
                </div>
            </div>
            <Outlet></Outlet></>
    )
}

export default Portal