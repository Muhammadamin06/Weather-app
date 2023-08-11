import { createContext, useEffect, useState } from "react";

const Context = createContext()

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function ContextProvider({children}) {
  const [region,setRegion] = useState('Tashkent')
  const [data,setData] = useState(null)
  const [details,setDetails] = useState(false)
  const [info,setInfo] = useState(null)

  useEffect(()=>{
    (async function() {
      try {
        const res1 = await fetch(`${API_URL}/geo/1.0/direct?q=${region}&appid=${API_KEY}`)
        let geo = await res1.json()
        const res2 = await fetch(`${API_URL}/data/2.8/onecall?lat=${geo[0].lat}&lon=${geo[0].lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
        let data = await res2.json()
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    })()
  },[region])

  function extra(data) { 
    setDetails(!details)
    setInfo(data)
   }
  return (
    <Context.Provider value={{setRegion,details,extra,data,info,setDetails,region}}>{children}</Context.Provider>
  )
}

export {ContextProvider,Context}