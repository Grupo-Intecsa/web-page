import React, { useState, useMemo, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import GitCarrousel from '../../reusable/GitCarrousel'



// TODO revisar el tema de pasar estado de hijo al padre, boton tipo flecha y disminicion de interador para poder navegar entre productos

import slide from '../../data/data.json'
const { Carrousel } = slide


const Services = () => {

    const [ iterador, setIterador ] = useState(1)

    const handlePushClic = () => {
        if(iterador === 4 ){
            setIterador(0)
        }
        setIterador(iterador => iterador + 1)
    }

    const handledMinusClic = () => {
        if(iterador === 1 ){
            setIterador(4)
        }
        setIterador(iterador => iterador - 1 )
    }

    const currentSlide = useMemo(() => {

        let objectSlide = [

            { "id": 1, "object": Carrousel.Obra, "title": "Instalaciones Eléctricas" },
            { "id": 2, "object": Carrousel.Produccion, "title": "Área de Producción" },
            { "id": 3, "object": Carrousel.Tableros, "title": "Integración de Tableros" },
            { "id": 4, "object": Carrousel.Trasportes, "title": "Provisionales, Gruas, Plantas de energía"},

        ]
    
        return objectSlide.filter((item)=> item.id === iterador )

    }, [iterador])
        
    return(
    <Fragment>
    <div id="services">
        
        <div className="container-fluid">
        <div className="section-title text-center">
        <h2>Nuestros productos y servicios</h2>
        </div>
        <div className="row">
        
        <div className="dflex--center control--carouse--select">
            
            <div className="custom--carousel-title">
                <button className="btn--carousel--select" onClick={handledMinusClic}>
                        <FontAwesomeIcon icon={faArrowLeft}>
                        </FontAwesomeIcon>
                </button>                    
                <div>{currentSlide.map(item => item.title )}</div>
                <button className="btn--carousel--select" onClick={handlePushClic}>
                        <FontAwesomeIcon icon={faArrowRight}>
                        </FontAwesomeIcon>
                </button>
            </div>
            
        </div>
        <div className="col">
            <GitCarrousel slide={currentSlide} setIterador={setIterador} iterador={iterador} />
        </div>
        </div>
    </div>
    </div>
        <a href="https://practical-turing-793a2f.netlify.app/" target="_blanck"><section className="custom--card--button text-center">Conozca nuestro catálogo de productos en línea.</section></a>
    </Fragment>
    )
}

export default Services
