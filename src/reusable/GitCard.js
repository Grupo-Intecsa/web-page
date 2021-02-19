import React from 'react'
import { Fragment } from 'react'


const GitCard = ({ props }) => {

    const { img, title, content } = props

    return(
    <Fragment>
        <section className="container--card">
            <article className="card">
                <img alt="imagen produccion" src={img} className="img-responsive" radioGroup={4} />
                <h2 className="mt3 text--card--title" style={{ color: "black"}}>{title}</h2>
                <hr />
                <p className="card--body" style={{ color: "black"}}>
                    {content}
                </p>
            </article>
        </section>
    </Fragment>
    )
}

export default GitCard