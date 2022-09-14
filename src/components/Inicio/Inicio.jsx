import React from "react";
import carrusel1 from "../Images/Imagenes-Carrusel/CARRUSEL-1.webp";
import carrusel2 from "../Images/Imagenes-Carrusel/CARRUSEL-2.webp";
import carrusel3 from "../Images/Imagenes-Carrusel/CARRUSEL-3.webp";
import carrusel4 from "../Images/Imagenes-Carrusel/CARRUSEL-4.webp";



const inicio = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carrusel1} className="d-block w-100 imagen-carousel" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel2} className="d-block w-100 imagen-carousel" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel3} className="d-block w-100 imagen-carousel" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={carrusel4} className="d-block w-100 imagen-carousel" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>`
        </div>
    );
};

export default inicio;