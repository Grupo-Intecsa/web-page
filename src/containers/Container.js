import React from 'react'
import {
    Features,
    Services,
    AboutContainer
} from './index'

import { Switch, Route } from 'react-router-dom'

import LandingData from '../data/data.json'
import { Fragment } from 'react'

const Container = ({ location, match }) => {

    console.log(location, match)

    return (
        <Fragment>
        <div>
            <Features data={LandingData.Features} />
            <Services data={LandingData.Productos} />
        </div>
        <div>
        
        </div>
        </Fragment>
    )
}

export default Container
