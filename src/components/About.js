import React from 'react'

const About = ({ data }) => {
    
    return (
        <div>
    <div id="about">
    <div className="container">
        <div className="row">
        <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
        <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <h2>¿Quiénes Somos?</h2>
            <p>{data ? data.paragraph : 'loading...'}</p>
            <button className="btn btn-custom btn-lg">Nuestro Curriculim</button>
            <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                    {/* {data ? data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'} */}
                </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                {/* {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'} */}

                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div> 
    </div>
    )
}

export default About
