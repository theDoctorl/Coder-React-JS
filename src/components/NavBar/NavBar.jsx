import React from "react";
import "./NavBar.css"
import logo from "../Images/balon-LOGO.png"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";



const NavBar = () => {

    return(
          <header className="contenedor-Nav">
                  <nav className="navbar navbar-expand-lg bg-light">
                     <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}>
                                 <img src={logo} alt="" width="30" height="24" />
                            </Link>
                              <Link className="navbar-brand" to={"/"}>RetroFutbol</Link>
                               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                 <span className="navbar-toggler-icon"></span>
                               </button>
                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                          <li className="nav-item">
                                               <Link className="nav-link active" aria-current="page" to={"/categoria/argentina"}>Camisetas Argentina</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/categoria/europa"}>Camisetas Europa</Link>
                                            </li>
                                        </ul>
                                   <CartWidget />
                             </div>
                        </div>
                        </nav>
          </header>
    );
};


export default NavBar;


