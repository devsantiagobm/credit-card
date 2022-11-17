import { useContext } from 'react'
import AppContext from "../context/contextProvider"
import CardMain from "../images/card-main.png"
import CardBack from "../images/card-back.png"


export default function Cards() {
    const { number,
        name,
        year,
        month } = useContext(AppContext)


    function showYear() {
        if(!Boolean(year)){
            return "00";
        }

        return year.length === 1 ? "0" + year : year
    }

    function showMonth() {
        if(!Boolean(month)){
            return "00";
        }

        return month.length === 1 ? "0" + month : month
    }



    return (
        <div className='card'>
            <div className="card__box">
                <div className="card__main">
                    <img className="card__image" src={CardMain} alt="Image of a the front card" />
                    <div className="card__content">
                        <div className="card__circles">
                            <div className="card__circle"></div>
                            <div className="card__circle card__circle--small"></div>
                        </div>
                        <div className="card__data">
                            <div className="card__number">{number ? number : "0000 0000 0000 0000"}</div>
                            <div className="card__flex">
                                <div className="card__name">{name ? name : "JANE APPLESEED"}</div>
                                <div className="card__date">
                                    {showMonth()}
                                    /
                                    {showYear()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <picture className="card__picture">
                    <img className="card__image" src={CardBack} alt="Image of a the back card" />
                </picture>
            </div>
        </div>

    )
}