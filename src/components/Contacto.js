import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'


const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
})



const Contacto = ({ data }) => {

    const [ messageDone, setMessageDone ] = useState(false)
    const [ loading, setLoading ] = useState([])

    const { register, handleSubmit, errors } =useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = (payload) =>{
        
        let message = 'Enviando mensaje...'
        
        setLoading(loading => [...loading, message ])

        axios.post('https://api-sgo.herokuapp.com/api/v1/message', payload )
        .then(() => setMessageDone(true))
                
    }

    return(
    <div>
    <div id="contact">
        <div className="container">
        <div className="col-md-8">
            <div className="row">
            <div className="section-title">
                <h2>¿Necesitas más información?</h2>
                <p>
                Porfavor llena los siguientes campos y personal especializado se pondrá en contacto con usted
                </p>
            </div>
            {!messageDone ? <form name="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        ref={register}
                        className="form-control"
                        placeholder="Nombre"
                    />
                    <p className="help-block text-danger">{errors.name?.message}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={register}
                        className="form-control"
                        placeholder="Email"
                    />
                    <p className="help-block text-danger">{errors.email?.message}</p>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        ref={register}
                        className="form-control"
                        placeholder="Numero teléfonico"
                    />
                    <p className="help-block text-danger">{errors.phone?.message}</p>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                </div>
                <div className="form-group">
                <textarea
                    name="message"
                    ref={register}
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                ></textarea>
                <p className="help-block text-danger">{errors.message?.message}</p>
                <p className="help-block text-danger"></p>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                Enviar
                </button>
                <div>{loading && <span className="text--red">{loading?.length > 0 && loading[0]}</span>}</div>
                
            </form> : <div className="message--contact--success">Mensaje enviado: pronto un asesor se pondrá en contacto con usted</div>}
            </div>
        </div>
        <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
            <h3>Información de Contacto</h3>
            <p>
                <span>
                <i className="fa fa-map-marker"></i> Dirección
                </span>
                {data ? data.address : "loading"}
            </p>
            </div>
            <div className="contact-item">
            <p>
                <span>
                <i className="fa fa-phone"></i> Teléfono
                </span>{" "}
                {data ? data.phone : "loading"}
            </p>
            </div>
            <div className="contact-item">
            <p>
                <span>
                <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {data ? data.email : "loading"}
            </p>
            </div>
        </div>
        <div className="col-md-12">
            <div className="row">
            <div className="social">
                <ul>
                <li>
                    <a
                    href={data ? data.facebook : "/"}
                    >
                    <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href={data ? data.youtube : "/"}>
                    <i className="fa fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href={data ? data.maps : "/"}>
                    <i className="fa fa-map-marker"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>

    </div>
    <div id="footer">
        <div className="container text-center">
        <p>
            &copy; 2021 Carlos Chávez React Template / GRUPO INTECSA es una marca Registrada
        </p>
        </div>
    </div>
    </div>
    )
}

export default Contacto