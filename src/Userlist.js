import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Tables from './Tables'
import Topbar from './Topbar'

function Userlist() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Topbar />

                    <Tables />

                </div>
            </div>
        </div>
    )
}

export default Userlist