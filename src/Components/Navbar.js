import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    Today's
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">
                                Link
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link
                                class="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link class="dropdown-item" to="/business">
                                        Bussiness
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/sports">
                                        sport
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/entertainment">
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/health">
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/science">
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/technology">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="#">
                                        Something else here
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
