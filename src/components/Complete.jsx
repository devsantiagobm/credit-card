import { useState, useEffect, useContext } from 'react'
import AppContext from "../context/contextProvider"
import IconComplete from "../assets/icon-complete.svg"

export default function Complete() {
    const {setSent} = useContext(AppContext)
    return (
        <div className="complete">
            <div className="complete__box">
                <picture className="complete__picture">
                    <img src={IconComplete} alt="" className="complete__img" />
                </picture>
                <p className="complete__title">Thank you!</p>
                <span className="complete__subtitle">We've added your card details</span>
                <button className="complete__button" onClick={() => setSent(false)}>
                    <span className="complete__button-text">Return</span>
                </button>
            </div>
        </div>
    )
}