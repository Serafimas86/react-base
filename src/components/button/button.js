import React from "react";
import './button.css'

const Button = ({ label }) => {
  const click =() => {
    alert (`a label desse botão é ${label}`)
  }
  return(
    <button className="btn" onClick={click}>{label}</button>
  )
}

 export default Button