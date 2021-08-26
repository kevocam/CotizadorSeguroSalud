import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../components/Base'
import Steps from '../components/Steps/Index'
import SimpleCard from '../components/SimpleCard'
import Card from  '../components/Card'
import Button from '../components/Button' 

import '../styles/PageChoisePlan.scss'

function ChoisePlan() {
    return (
        <div className="choisePlan">
            <section className="choisePlan__base">
                <Base />                                                
            </section>
            <section className="choisePlan__content">
                 <div className="choisePlan__content--steps">
                    <Steps step="2" steps="7" />
                </div>
                <div className="choisePlan__content--main">
                    <div className="choisePlan__content--main_head">
                        <h2>Elige <span>tu protección </span></h2>
                        <p>Selecciona tu plan de salud ideal.</p>                        
                    </div>
                    <div className="choisePlan__content--main_hero">
                        <SimpleCard plan="Básico" mount="160" footer="mensual" check="true" />
                        <SimpleCard plan="Avanzado" mount="200" footer="mensual"/>
                        <SimpleCard plan="Premium" mount="250" footer="mensual"/>
                        <SimpleCard plan="Full" mount="500" footer="mensual"/>
                    </div>
                    <div className="choisePlan__content--main_card">
                        <Card />
                    </div>
                    <div className="choisePlan__content--main_footer">
                        <h3>Revisa nuestros <span>servicios y exclusiones</span></h3>
                        <ul>
                            <li>Servicios brindados <span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="6 9 12 15 18 9" />
                                </svg></span>
                            </li>
                            <li>Exclusiones<span><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <polyline points="6 9 12 15 18 9" />
                                </svg></span>
                            </li>   
                            <li></li>                         
                        </ul>
                    </div>
                    <div className="choisePlan__content--main_button">
                        <a href="#">Enviar cotización por correo</a>
                        <Link to="/Thanks">
                            <Button text="Comprar plan" />                        
                        </Link>
                    </div>


                </div>
            </section>
            elige parens
        </div>
    )
}

export default ChoisePlan
