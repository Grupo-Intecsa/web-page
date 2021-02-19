import React, { Component } from 'react';
import { Fragment } from 'react';
import Carousel from 'react-elastic-carousel';

class GitCarrousel extends Component {
    state = {
        brakePoints: [
            { width: 1, itemsToShow: 1, pagination: false },
            { width: 550, itemsToShow: 1, pagination: false },
            { width: 850, itemsToShow: 2,  itemsToScroll: 1 },
            // { width: 1450, itemsToShow: 5 },
            // { width: 1750, itemsToShow: 6 },
        ],
        data: this.data
    }
    render () {
        const { brakePoints } = this.state;
        const { slide, iterador, setIterador } = this.props
        console.log(iterador, setIterador)
    return (
        <Fragment>
        <Carousel 
            enableAutoPlay={true} 
            breakPoints={brakePoints} 
            onPrevEnd={() => setIterador(iterador => iterador + 1)}
        
        >
        {slide.map(({ object }) => object.map(item => (
            <div>
            <img src={item.img} alt={item.title} className="img-responsive" />
            <span className="custom--carousel--item">{item.title}</span>
        </div>
        ))
            
        )}
        </Carousel>
        </Fragment>
    )
    }
}

export default GitCarrousel