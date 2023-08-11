import React, { useContext } from 'react'
import humidity from '../images/humidity.svg'
import pressure from '../images/pressure.svg'
import temp from '../images/temp.svg'
import wind from '../images/wind.svg'
import Info from './Info'
import { Context } from '../context/context'
function Card({ className, current, check }) {
  const { info } = useContext(Context)
  return (
    <div className={className}>
      <Info
        text={'temperatura'}
        icon={temp}
        state={`${check ?
          Math.round(current.temp) :
          Math.round(info?.temp?.max)}° - feels like ${check ? current.feels_like : info?.feels_like.day}°`} />
      <Info
        text={'pressure'}
        icon={pressure}
        state={`${check ? current.pressure :info?.pressure } Pascal`} />
      <Info
        text={'humidity'}
        icon={humidity}
        state={`${check ? current.humidity :info?.humidity} %`} />
      <Info
        text={'wind'}
        icon={wind}
        state={`${check ? current.wind_speed : info?.wind_speed} m/s`} />
    </div>
  )
}

export default Card