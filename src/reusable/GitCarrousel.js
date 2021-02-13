import React from 'react';
import Carousel from 'react-elastic-carousel';

export default function Carrouse({ img }){
        
    return(
        <Carousel className="dflex--center">
            {img.map((item, index) => <img key={`${index}`} src={item} alt="mucho texto" className="img-thumbnail" />)}
        </Carousel>
    )
}
