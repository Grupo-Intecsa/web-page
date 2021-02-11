import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'


import GitCarrousel from './GitCarrousel'


const ServicesMenu = ({ data }) => {

    return(
    <div className="container-fluid dflex--center">
    <div className="accordion--container">
    <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >   
        <div className="accordion--title">{data.title}</div>

    </AccordionSummary>
    <AccordionDetails>
        
        <div className="accordion--detail--container" >

            <div>
                <div className="accordion--detail">
                {data.text}
                {data?.list && (
                    data.list.map(item => <li>{item}</li>)
                        )
                    }
                </div>
                <div className="mb--3">
                <GitCarrousel img={data.imgArray} />
                </div>
            </div>
        </div>

        
    </AccordionDetails>
    </Accordion>
    </div>
    </div>
    )
}

export default ServicesMenu