import React from 'react'
import ServicesMenu from '../reusable/ServicesMenu'

const Services = ({ data }) => {

        
    return(
    <div id="services" className="text-center">
        
        <div className="container">
        <div className="section-title">
        <h2>Nuestros productos y servicios</h2>
        {/* <p>
            Estas son algunas de nuestros ultimos trabajos.
        </p> */}
        </div>
        <div className="row">
        
        <div className="col">
        <h3>Puedes consultar nuestros productos en:</h3>    
            {/* <Button className="button-seeler">Amazon</Button>
            <Button className="button-seeler">Mercado Libre</Button> */}
            <button class="btn btn-git btn-sep icon-send">Catálogo Virutal</button>
        </div>
                
            {data.map((service, index) => {
                return(
                    <div className="portfolio-items" key={`${service}${index}`}> 
                    <div>
                    <div className="portfolio-item">
                <div className="hover-bg">
                {" "}
                <div
                    // onClick={() => setFlip(true)}
                >
                <div className="col-10">
                <ServicesMenu data={service} />
                </div>

                </div>{" "}
                </div>
                </div>
                    </div>
                    </div>
                )
            })}
        </div>
    </div>
    </div>
    )
}

export default Services
