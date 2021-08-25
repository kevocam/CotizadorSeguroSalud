import React  from 'react'
import './Login.scss'
import Input from '../Input/Input'
import illustration from '../../img/Illustration-1.png'
import icon1 from '../../img/gl_shield-20x20.png'
import mobile from '../../img/gl_mobile-20x20.png'


function Login() {
    
    return (
        <div className="login">
            <div className="login__info">
                <div className="login__info--title">
                    <h1>Seguro de <span>Salud</span></h1>
                </div>
                <div className="login__info--detail">
                    <ul>
                        <li>  <img src={icon1} alt="shield" />  Cómpralo de manera fácil y rápida</li>
                        <li> <span><img src={mobile} alt="mobile" /></span> Cotiza y compra tu seguro 100% digital</li>
                        <li> <span> <img src={icon1} alt="shield" /> </span> Hasta S/. 12 millones de cobertura anual</li>
                        <li> <span> <img src={mobile} alt="shield" /> </span> Más de 300 clínicas en todo el Perú</li>
                    </ul>
                </div>
                <div className="login__info--footer">
                    c 2021 - Company
                </div>
            </div>
            <div className="login__banner">
                <div className="login__banner--footer">
                    <img src={illustration} alt="" />
                </div>
            </div>
            <div className="login__form">
                <div className="login__form--title">
                    <h2>Obtén tu  <span> seguro ahora </span></h2>
                    <p>Ingresa los datos para comenzar</p>
                </div>                
                <form action="" className="login__form--inputs">
                    <div className="login__form--inputs_dni">
                        <select name="typeDOc" id="">
                            <option value="dni">DNI</option>
                        </select>  
                        <div className="login__form--inputs_dni-input">
                            <Input type="text" label="Nro de Documento"  />                            
                         </div> 
                    </div>
                    <div className="login__form--inputs_date">
                        <Input type="date" label="Fecha de nacimiento"/>
                        {/* <span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2F80ED" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <line x1="10" y1="16" x2="14" y2="16" />
                            </svg>
                        </span> */}
                    </div>
                    <div className="login__form--inputs_phone">
                        <Input type="number" label="Celular"  />                    
                   </div>                     
                    <div className="login__form--inputs_protection">
                        <input type="checkbox"/>
                        <span>
                            Acepto la Politica de Protección de Datos Personales y los Terminos y Condiciones 
                        </span>
                    </div>
                    <div className="login__form--inputs_send">
                        <input type="checkbox" />
                        <span>
                            Acepto la Politica de Envio de Comunicaciones Comerciales
                        </span>
                    </div>                    
                    
                    <button className="login__form--inputs_button" type="button">Comencemos</button>                        
                </form>
            </div>            
        </div>
    )
}

export default Login

