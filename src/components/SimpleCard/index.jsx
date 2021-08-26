import React from 'react'
import './style.scss'
import check from '../../img/gl_correct.png'

function index(props) {
    return (
        <div className="simpleCard" style={ props.check && {borderColor:'green'} } >   
            <div className="simpleCard__check">
                {
                    props.check && <img src={check} alt="check"/>                                
                }
            </div>
            <div className="simpleCard__title">
                {props.plan}
            </div>
            <div className="simpleCard__number">
                S/ <span>{props.mount}</span> 
            </div>
            <div className="simpleCard__footer">
                {props.footer}
            </div>
            
        </div>
    )
}

export default index
