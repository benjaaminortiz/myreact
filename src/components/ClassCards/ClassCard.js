import React from 'react'
import s from '../../CSS/ClassCards.module.css'

const ClassCard = ({ name, continent, flagcode, alphacode }) => {
    return (
        <div className={s.card}>
            <div className={s.text}>
                <h3 >{name}</h3>
                <span >{continent}</span>
                <h5>{alphacode}</h5>
            </div>
            <div className={s.wrapper}><img className={s.img} src={`https://restcountries.eu/data/${flagcode}.svg`} alt={alphacode} /></div>

        </div>
    )
}

export default ClassCard
