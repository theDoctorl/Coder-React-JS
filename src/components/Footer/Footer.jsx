import React from "react";
import twitter from "../Images/Twitter.png";
import instagram from "../Images/Instagram.png";
import facebook from "../Images/Facebook.png";

const Footer = () => {
    return (
        <div className="row fondo_marron p-5">
            <div className="col">
                <div className="container">
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p> © 2022 RetroFutbol. Todos los derechos reservados.</p>
                        </div>
                        <div className="col-md-6 text-end">
                            <img src={facebook} width="28" alt="facebook" /> 
                            <img src={instagram} width="28" alt="instagram" /> 
                            <img src={twitter} width="28" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;