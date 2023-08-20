import React from "react"
import './index.css'

const Index= ({ color }) => {
   const styles = {
      color,
      textTransform: 'uppercase',
   };
  return (
    <>
      <p className="index" style={styles}>
         Na compra de 2 capas de celulares você ganhã uma pelicula gratuita!
      </p>
    </>
  )
}
export default Index