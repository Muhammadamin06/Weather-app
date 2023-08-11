import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import City from './components/City'
import Card from './components/Card'
import Day from './components/Day'
import Details from './components/Details'
import { Context } from './context/context'

function App() {
  const {data} = useContext(Context)
  if (!data) {
    return <div className="loading">
      <div className="lds-hourglass"></div>
    </div>
  }
  return (
    <div>
        <NavBar />
        <div className="container container__main">
          <City current={data.current} />
        <Card current={data.current} className="card" check={true} />
        </div>
        <div className="container week">
          {
            data.daily.slice(0,7).map((day)=> <Day key={day.dt} day={day} />)
          }
        </div>
        <Details />
    </div>
  )
}

export default App