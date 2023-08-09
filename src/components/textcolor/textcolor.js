import React from "react"
import './textcolor.css'

const Textcolor = ({ color }) => {
   const styles = {
      color,
      textTransform: 'uppercase',
   };
  return (
    <>
      <p className="textColor" style={styles}>
         Na compra de 2 capas de celulares você ganhã uma pelicula gratuita!
      </p>
    </>
  )
}
export default Textcolor