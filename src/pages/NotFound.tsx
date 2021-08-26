import React from 'react'
import Base from '../components/Base'
import '../styles/PageNotFound.scss'
const NotFound = () => {
    return (
        <div className="NotFound">
                <div className="NotFound__base">
                    <Base />
                </div>
                <div className="NotFound__text">
                    No se encontro la página :(
                </div>
        </div>
    )
}
 
export default NotFound
