import React from 'react'

const Testimonial = ({ data }) =>{
    return(
        <div id="testimonials">
            <div className="container">
            <div className="section-title text-center">
                <h2>Nuestros clientes</h2>
            </div>
            <div className="row">
                {data
                ? data.map((d, i) => (
                    <div key={`${d.name}-${i}`} className="col-md-4">
                        <div className="testimonial">
                        <div className="imgAbout img-thumbnail">
                            {" "}
                            <img src={d.img} alt="" />{" "}
                        </div>
                        <div className="testimonial-content">
                            {/* <p>"{d.text}"</p> */}
                            {/* <div className="testimonial-meta"> - {d.name} </div> */}
                        </div>
                        </div>
                    </div>
                    ))
                : "loading"}
            </div>
            </div>
        </div>
        );
}

export default Testimonial