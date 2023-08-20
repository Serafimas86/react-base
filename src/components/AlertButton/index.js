import React from "react";
import './index.css'

const Index = ({ label }) => {
  const click =() => {
    alert (`a label desse botão é ${label}`)
  }
  return(
    <button className="btn" onClick={click}>{label}</button>
  )
}

 export default Index