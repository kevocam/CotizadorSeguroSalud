import React/* ,{useState} */ from 'react'
import { useHistory} from 'react-router-dom'
import Input from '../Input/Input.jsx'
import './style.scss'

type formElement = React.FormEvent<HTMLFormElement>;

/* interface IPerson = {
    dni:number;
    date:string;
    phone:number;
}

 */const Index = ():JSX.Element => { 
    const history = useHistory();


/*     const [user, setUser] = useState<IPerson{}>({}); */

    const handleSubmit = (e:formElement) => {  
        e.preventDefault();        
        history.push('/addparents')

    }
/*     const {register, handleSubmit} = useForm();
 */

    return (        
        <div className="formLogin">
            <div className="formLogin--title">
                <h2>Obtén tu  <span> seguro ahora </span></h2>
                <p>Ingresa los datos para comenzar</p>
            </div>                
            <form onSubmit={handleSubmit} className="formLogin--inputs">
                <div className="formLogin--inputs_dni">
                    <select name="typeDOc" id="">
                        <option value="dni">DNI</option>
                    </select>  
                    <div className="formLogin--inputs_dni-input">
                        <Input name="dni" type="number" label="Nro de Documento"  />                            
                    </div> 
                </div>
                <div className="formLogin--inputs_date">
                    <Input type="date" label="Fecha de nacimiento" />                       
                </div>
                <div className="formLogin--inputs_phone">
                    <Input  /* ref={register({required:true})} */ type="number" label="Celular"  />                    
                </div>                     
                <div className="formLogin--inputs_protection">
                    <input type="checkbox"/>
                    <span>
                        Acepto la Politica de Protección de Datos Personales y los Terminos y Condiciones 
                    </span>
                </div>
                <div className="formLogin--inputs_send">
                    <input type="checkbox" />
                    <span>
                        Acepto la Politica de Envio de Comunicaciones Comerciales
                    </span>
                </div>                    
                
                <button  className="formLogin--inputs_button" type="submit">Comencemos</button>                        
            </form>
        </div>  
            
        
    )
}

export default Index
