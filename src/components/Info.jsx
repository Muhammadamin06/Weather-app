import React from 'react'

function Info({text,icon,state}) {
  return (
    <div className="info">
        <div className="info__icon">
          <img src={icon} alt={text} />
        </div>
        <p className="info__text">{text}</p>
        <p className="info__state">{state}</p>
    </div>
  )
}

export default Info