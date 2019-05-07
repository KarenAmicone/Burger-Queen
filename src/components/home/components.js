import React from 'react'
import './home.css'

export default function clientName(){
  return (
    <form>
    <label className="label">
      Nombre del cliente
      <br></br>
      <input type="text" className="clientName" />
    </label>
    <br></br>
    <input type="submit" value="Submit" />
  </form>
  )
}

/* export default function breakfast(){

} */