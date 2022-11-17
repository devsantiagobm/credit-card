import { useState, useEffect, useContext } from 'react'
import AppContext from '../context/contextProvider';


export default function Form() {

    const { number, setNumber,
        name, setName,
        month, setMonth,
        year, setYear,
        cvc, setCvc,
        sent, setSent } = useContext(AppContext)


    function handleSubmit(e) {
        e.preventDefault();

        const objectData = Object.fromEntries(new FormData(e.currentTarget))
        const wrongData = Object.entries(objectData)
            .filter(([key, value]) => {
                if (key === "number")
                    return value === "" || value.length < 20

                else
                    return value === ""

            })
            .map(([key]) => { return key })

        agregarClasesDeError(wrongData)

        if(wrongData.length < 1){
            setSent(true);
        }
        
    }

    function agregarClasesDeError(errorInputs) {
        const inputs = document.querySelectorAll('.form__input')

        for (const input of inputs) {
            errorInputs.includes(input.name)
                ? input.classList.add("form__input--error")
                : input.classList.remove("form__input--error")
        }
    }

    function handleChange(e) {
        const inputActual = e.currentTarget.name;
        const value = e.currentTarget.value;

        const inputs = {
            name: () => {
                setName(value)
            },
            number: () => {
                const ultimaLetra = value.slice(-1)
                const validacionCuartaLetra = value.replaceAll(" ", "").length % 4 === 0 && value.length !== 1 && e.nativeEvent.inputType !== "deleteContentBackward"

                if (validacionCuartaLetra) {
                    const numeroFormateado = value.slice(0, value.length) + " " + value.slice(value.length)
                    setNumber(numeroFormateado)
                    return;
                }

                if (!isNaN(Number(ultimaLetra)) && value.length < 20) {
                    setNumber(value)
                }

            },
            month: () => {
                const valoresPermitidos = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                valoresPermitidos.includes(value) && setMonth(value)
            },
            year: () => {
                value === "" && setYear(value)
                value === "0" && setYear("0")
                Number(value) > 0 && Number(value) < 100 && setYear(value)
            },
            cvc: () => {
                value === "" && setCvc(value)
                value === "0" && setCvc("0")
                Number(value) > 0 && Number(value) < 1000 && setCvc(value)
            }
        }

        inputs[inputActual]()
    }

    return (
        <div className='form'>
            <form action="#" className="form__box" onSubmit={handleSubmit}>

                <label htmlFor="name" className='form__label'>cardholder name</label>
                <input type="text" name='name' id='name' className="form__input" placeholder='e.g. Jane Appleseed' value={name} onChange={handleChange} />
                <label htmlFor="number" className='form__label'>card number</label>
                <input type="text" name='number' id='number' className="form__input" placeholder='e.g 1234 5678 9123 0000' value={number} onChange={handleChange} />

                <div className='form__fieldset'>
                    <div className="form__flex">
                        <label htmlFor="month" className="form__label">exp. date (mm/yy)</label>

                        <div className="form__date">
                            <input type="number" className="form__input form__input--date" placeholder='mm' onChange={handleChange} name="month" value={month} id="month" />
                            <input type="number" className="form__input form__input--date" placeholder='yy' onChange={handleChange} name="year" value={year} />
                        </div>
                    </div>

                    <div className="form__flex">
                        <label htmlFor="cvc" className="form__label">cvc</label>
                        <input type="number" className="form__input" name='cvc' id='cvc' placeholder='e.g. 123' onChange={handleChange} value={cvc} />
                    </div>
                </div>

                <button className='form__submit'><div className='form__submit-text'>Confirm</div></button>
            </form>
        </div>
    )
}