import React from 'react'
import { Fragment } from 'react'
// import GitCarf from '../reusable/GitCard'
// import WindowService from '../reusable/WindowService'
import GitCard from '../reusable/GitCard'


const Services = ({ data }) => {

    console.log(data)
        
    return(
    <Fragment>
    <div id="services">
        
        <div className="container">
        <div className="section-title text-center">
        <h2>Nuestros productos y servicios</h2>
        </div>
        <div className="row">
        
        <div className="col">
        </div>
        <div className="dflex--center card--container">
            {data.map(item => <GitCard props={item}/>)}
        </div>        
        </div>
    </div>
    </div>
        <a href="https://practical-turing-793a2f.netlify.app/" target="_blanck"><section className="custom--card--button text-center">Conozca nuestro catálogo de productos en línea.</section></a>
    </Fragment>
    )
}

export default Services
