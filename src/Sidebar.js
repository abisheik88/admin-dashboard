import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceLaughWink, faTable, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">

                    <FontAwesomeIcon icon={faFaceLaughWink} />
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr class="sidebar-divider my-0" />

            <li class="nav-item active">
                <Link class="nav-link" to="/">

                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span> Dashboard</span></Link>
            </li>








            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Users
            </div>





            <li class="nav-item">
                <Link class="nav-link" to="/userlist">

                    <FontAwesomeIcon icon={faTable} />
                    <span> Tables</span></Link>
            </li>
            <hr class="sidebar-divider" />

            <div class="sidebar-heading">
                Add ons
            </div>

            <li class="nav-item">
                <Link class="nav-link" to="/login">

                    <FontAwesomeIcon icon={faTable} />
                    <span> Login</span></Link>
            </li>

            <hr class="sidebar-divider d-none d-md-block" />


            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..." />
                <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default Sidebar