import React from 'react'

const Navigation = () => {
    return(
        <nav id="menu" className="navbar navbar-default navbar-fixed-top custom--shadow--navbar">
        <div className="container">
            <div className="navbar-header">
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
            >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
                {/* <img src="img/logo/logo_completoGD.svg" alt="logo de sitio" /> */}
                Grupo Intecsa
            </a>{" "}
            </div>

            <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
            >
            <ul className="nav navbar-nav navbar-right">
                <li>
                <a href="#features" className="page-scroll">
                    Empresas
                </a>
                </li>
                <li>
                <a href="#about" className="page-scroll">
                ¿Quiénes Somos?
                </a>
                </li>
                {/* <li>
                <a href="#services" className="page-scroll">
                    Services
                </a>
                </li> */}
                <li>
                <a href="#services" className="page-scroll">
                    Productos y Servicios
                </a>
                </li>
                {/* <li>
                <a href="#testimonials" className="page-scroll">
                    Testimonio
                </a>
                </li> */}
                {/* <li>
                <a href="#team" className="page-scroll">
                    Team
                </a>
                </li> */}
                <li>
                <a href="#contact" className="page-scroll">
                    Contacto
                </a>
                </li>
                {/* TODO agregar un dropdown de idiomas */}
                {/* <li>
                <div className="select--lenguaje input">
                <select>
                    <optgroup>
                        <option>
                            Español
                        </option>
                        <option>
                            Ingles
                        </option>
                    </optgroup>
                </select>
                </div>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>
    );  

}

export default Navigation