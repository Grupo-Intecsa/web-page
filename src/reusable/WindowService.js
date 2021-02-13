import React, { Fragment } from 'react'
import GitCarrousel from './GitCarrousel'


const WindowService = ({ data }) =>{

    return(
        <Fragment>
            {data.map((item, index) =>

            <div key={`${index}`}>
                <div className="col">
                    <div className="accordion--detail--container">
                        <div className="mb--3 text--left">
                            {item.text}
                        </div>
                        <div className="mb--3 text--left">
                            {item?.list && (
                                item.list.map((item, index) => <li key={`${item}${index}`} >{item}</li>)
                                )}
                        </div>
                        <div className="mb--3">
                            <GitCarrousel img={item.imgArray} />
                        </div>
                    </div>
                </div>
            </div>)}
        </Fragment>
    )
}

export default WindowService