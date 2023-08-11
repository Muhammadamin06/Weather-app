import React, { useContext, useEffect, useState } from 'react'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import logo from '../images/logo.svg'
import { regions } from '../helpers'
import { Context } from '../context/context'

function NavBar() {
    const {setRegion} = useContext(Context)
    const [theme,setTheme] = useState('light')

    useEffect(()=>{
        document.documentElement.dataset.theme = theme
    },[theme])

    const changeTheme = (e)=>{
        e.preventDefault()
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className='navbar'>
        <div className="container navbar__container">
            <a href="#!" className="navbar__logo">
                <img src={logo} alt="logo" />
                <span>REACT WEATHER</span>
            </a>
            <div className="navbar__block">
                <button className="navbar__theme" onClick={changeTheme}>
                    {theme === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill />}
                </button>
                <select className='navbar__select' onClick={(e)=>setRegion(e.target.value)}>
                    {
                        regions.map((region)=>(
                            <option key={region.id} value={region.name}>{region.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    </div>
  )
}

export default NavBar