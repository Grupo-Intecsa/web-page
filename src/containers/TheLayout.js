import React from 'react'
import {
    Navigation,
    Header, 
    Container,
    Footer,
    
} from './index'

import jsonData from '../data/data.json'

const TheLayout = () => {

    
    return(
        <div>
        <section>
            <Navigation />
        </section>
        <section>
            <Header data={jsonData.Header} />
        </section>
            <Container />
        <section>
            <Footer data={jsonData.Contact} />
        </section>
    </div>
    )
}


export default TheLayout