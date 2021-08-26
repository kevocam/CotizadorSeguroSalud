import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../components/Base'
import Button from '../components/Button'
import '../styles/PageThanks.scss'
const Thanks = () => {
    return (
        <div className="container">
            <div className="container__base">
                <Base />
            </div>
            <div className="container__message">
                <div className="container__message--item">
                    <h2>¡Gracias por <span>confiar en nosotros!</span></h2>
                    <p>Queremos conocer mejor la salud de los asegurados. Un asesor <span>se pondrá en contacto</span> contigo en las siguientes <span>48 horas</span> </p>
                    <div className="container__message--button">
                        <Link to="/">
                            <Button text="IR A SALUDO" />                        
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Thanks
