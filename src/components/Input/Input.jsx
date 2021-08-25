import React, {useState} from 'react'
import './style.scss'


  
const Input = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');

    const [datePicker, setDatePicker] = useState("hideDatePicker")
    
/* 
    if(props.type === "date"){
      setDatePicker("datePickerHide")      
    } */

    function handleTextChange(text) {
      setValue(text);

      if (text !== '') {
        setIsActive(true);
        setDatePicker("showDatePicker")
        
      } else {
        setIsActive(false);
        
      }
    }
    return (
        <div className="float-label">
            <input 
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            type={props.type} 
            className={ props.type === "date" ? datePicker : "" }
          
            />
            <label className={ isActive ? "Active" : ""} >
                {props.label}
            </label>
        </div>
    )
}
export default Input
