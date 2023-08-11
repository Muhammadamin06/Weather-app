import React, { useContext } from 'react'
import { getTemp,getDay, getDate } from '../helpers'
import { Context } from '../context/context'

function Day({day}) {
    const {extra} = useContext(Context)
  return (
    <div className='day' onClick={()=>extra(day)}>
        <h3 className="day__name">{getDay(day.dt)}</h3>
        <p className="day__date">{getDate(day.dt)}</p>
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].main} className="day__icon" />
        <p className="day__max">{getTemp(day.temp.max)}</p>
        <p className="day__min">{getTemp(day.temp.min)}</p>
        <p className="day__state">{day.weather[0].description}</p>
    </div>
  )
}

export default Day