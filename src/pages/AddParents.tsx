import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Base from '../components/Base'
import Steps from '../components/Steps/Index'
import Input from '../components/Input/Input'
import Button from '../components/Button'
import '../styles/PageAddParents.scss'


const AddParents = () => {
/* 
    interface User {
        dni:number;
        name:string;
        appPaterno:string;
        appMaterno:string;
        date:string;
    } */
    const [name,setName] = useState("");
    const [dni,setDni] = useState(0);
    const [appPaterno,setAppPaterno] = useState("");
    const [appMaterno,setAppMaterno] = useState("");
    const [date,setDate] = useState("");
    const [genero,setGenero] = useState("");
    const [afiliate,setAfiliate] = useState("");


    useEffect(() => {
        fetch('https://freestyle.getsandbox.com/dummy/obtenerdatospersona',{
            method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data.tercero)
            setName(data.data.tercero.nombres)
            setDni(data.data.tercero.numDocumento)        
            setAppPaterno(data.data.tercero.apellidoPaterno)
            setAppMaterno(data.data.tercero.apellidoMaterno)
            setDate(data.data.tercero.fecNacimiento)
            setGenero(data.data.tercero.sexo)

        })

    },[])
    return (
        <div className="addParents">
            <section className="addParents__base">
                <Base />                                                
            </section>
            <section className="addParents__content">
                <div className="addParents__content--steps">
                    <Steps step="1" steps="7" />
                </div>
                <div className="addParents__content--main">
                    <div className="addParents__content--main_head">
                        <h2>Hola, <span>{name}</span></h2>
                        <p>Valida que tus datos sean correctos.</p>
                        <h3>Datos personales{} del titular</h3>
                    </div>
                    <div className="addParents__content--main_main">
                            <Input valor={dni} type="text" label="Nro de Documento" />
                            <Input valor={name} type="text" label="Nombres"  />                            
                            <Input valor={appPaterno} label="Apellido Paterno"  />                            
                            <Input valor={appMaterno} type="text" label="Apellido Materno"  /> 
                            <Input valor={date} type="text" label="Fecha de Nacimiento"  /> 

                            <h3>Género</h3>   
                            <p>
                                <input type="radio" name="genero"  checked={genero === "M"} /><label>Masculino</label>
                            </p>
                            <p>
                                <input type="radio" name="genero" checked={genero === "F"}/><label>Femenino</label>
                            </p>
                            <h3>¿A quién vamos asegurar?</h3>
                            <p>
                                <input type="radio" name="afiliate" /><label>Solo a mi</label>
                            </p>
                            <p>
                                <input type="radio" name="afiliate" /><label>A mí y mi familia</label>
                            </p>
                            <div className="addParents__content--main_main-button" >
                                <Link to="/ChoisePlan" >
                                    <Button text="Continuar" />                            
                                </Link>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddParents


