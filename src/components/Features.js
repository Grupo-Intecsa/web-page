import React from 'react'

const Features = ({ data }) => {
    return(
    <div id="features" className="text-center features--animation">
    <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
        <h2>EMPRESAS</h2>
        </div>
        <div className="row">
        {data
            ? data.map((d,i) => (
                <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {" "}
                <img src={d.logo} alt="foto de icono" height={87} className="logo--background" />
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                </div>
            ))
            : "Loading..."}
        </div>
    </div>
    </div>
    )
}

export default Features