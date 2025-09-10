import { useState } from "react";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-md fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#" id="brand-logo">
                    <img src="/frontend_home_assistant/logo.png" alt="logo" class="nav-logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#home">Home</a>
                        </li>
                        <li class="nav-item">              
                            <a href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#education">Education</a>
                        </li>
                        <li class="nav-item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="#recommendations">Recommendations</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                    <div class="navbar-nav">
                        <div class="user-menu d-none" id="userMenu">
                            <div class="dropdown">
                                <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                    <i class="fas fa-user me-1"></i>
                                    <span id="userName"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#profile"><i class="fas fa-user me-2"></i>Profile</a></li>
                                    <li><a class="dropdown-item" href="#settings"><i class="fas fa-cog me-2"></i>Settings</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#" id="logoutBtn"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
