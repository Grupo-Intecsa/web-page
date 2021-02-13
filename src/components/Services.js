import React, { useState, useMemo } from 'react'
import WindowService from '../reusable/WindowService'


const Services = ({ data }) => {


    const [ value, setValue ] = useState('git')

    const dataService = useMemo(() => {
        return data.filter(item => item.slug === value )
    },[value, data])
        
    return(
    <div id="services" className="text-center">
        
        <div className="container">
        <div className="section-title">
        <h2>Nuestros productos y servicios</h2>
        </div>
        <div className="row">
        
        <div className="col">
        <h3>Puedes consultar nuestros productos en:</h3>    
            <button className="btn btn-git btn-sep fa-bookmark-o">Catálogo Virutal</button>
        </div>
            <div>
                <select
                    className="form--control--select"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    >
                    {data.map((service, index) => <option key={`${service.slug}+${index}`} value={service.slug}>{service.title}</option>)}
                    </select>
            </div>
            <WindowService data={dataService} />
        </div>
    </div>
    </div>
    )
}

export default Services
