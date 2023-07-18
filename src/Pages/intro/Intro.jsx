import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

import "./style.scss"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/Entry.png"
export default function Intro() {

let [showCreator, setShowCreator]= useState(true)
let [showWelcome, setShowWelcome]= useState(false)
let [showLoader, setShowLoader]= useState(false)
let navigate = useNavigate()

useEffect(()=>{
 

    
    setTimeout(()=>{
      setShowCreator(false)
      setShowWelcome(true)

      setTimeout(()=>{
       setShowLoader(true)
      
       setTimeout(()=>{
       navigate("/home")
       },1200)
      },3200)

    },2000)

    return(
      setShowLoader(false)
    )
   
},[])

  return (
    <div>
        {showCreator && <div className="Creator">
        <img src={logo}  alt="Tushar Bhatt"/>
        </div>}
        {showWelcome && <div className="welcomeScreen">
        
        <div>
        <Typewriter
       options={{
       strings: ['NETFLIX'],
       autoStart: true,
       loop: false,
       cursor:"",delay:300
        }}
        />
        </div>
        { <div className="loader" style={{borderTop:`${showLoader ? "3px solid red" : "3px solid black"}` }}></div>}

        </div>
        }

    </div>
  )
}
