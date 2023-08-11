import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { Context } from '../context/context'
import { getDay, getTemp } from '../helpers'
import Card from './Card'

function Details() {
    const { details, info, setDetails,region } = useContext(Context)
    return (
        <div className={`details ${details ? 'active' : null}`}>
            <div className="details__card">
                <div className="details__left">
                    <p className="details__temp">{getTemp(info?.temp?.max)}</p>
                    <p className="details__day">{getDay(info?.dt)}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${info?.weather[0]?.icon}@2x.png`}
                        alt={info?.weather[0]?.main}
                        className="details__icon"
                    />
                    <p className="details__text">Time: <span>21:23</span></p>
                    <p className="details__text">City: <span>{region}</span></p>
                </div>
                <Card className={'details__right'} check={false} />
                <button className='details__cancel' onClick={() => setDetails(!details)}>
                    <MdOutlineCancel />
                </button>
            </div>
        </div>
    )
}

export default Details