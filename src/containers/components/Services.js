import React, { useState, useMemo } from 'react'
import { Fragment } from 'react'
import GitCarrousel from '../../reusable/GitCarrousel'
// import GitCarf from '../reusable/GitCard'
// import WindowService from '../reusable/WindowService'
// import GitCard from '../../reusable/GitCard'

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

    const currentSlide = useMemo(() => {

        let objectSlide = [

            { "id": 1, "object": Carrousel.Obra, "title": "Instalaciones Eléctricas" },
            { "id": 2, "object": Carrousel.Produccion, "title": "Área de Producción" },
            { "id": 3, "object": Carrousel.Tableros, "title": "Integración de Tableros" },
            { "id": 4, "object": Carrousel.Trasportes, "title": "Renta de Provisionales, Andamiajes y Gruas"},

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
        
        <div className="col dflex--center">
            <h3 className="text-center">{currentSlide.map(item => item.title)}</h3>
            <button className="btn-info" onClick={handlePushClic}>IR</button>
        </div>
        <div className="col">
            <GitCarrousel slide={currentSlide} setIterador={setIterador} />
        </div>
        </div>
    </div>
    </div>
        <a href="https://practical-turing-793a2f.netlify.app/" target="_blanck"><section className="custom--card--button text-center">Conozca nuestro catálogo de productos en línea.</section></a>
    </Fragment>
    )
}

export default Services
