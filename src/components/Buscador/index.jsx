import React from 'react'
import { useState, } from 'react'
import { Form } from 'react-bootstrap'

const index = ({newLocation}) => {
    const [city, setCity] = useState("")

const onSubmit = (e) => {
    e.preventDefault()
    console.log({city})
    if(city === "" || !city) return;
  
    newLocation(city)

   setCity("")

    
}    


  return (
    <div className="d-fluid">
        <Form className="formulario" onSubmit= {onSubmit}>
          <Form.Control type="text" placeholder="Ingrese una Ciudad" onChange={(e) => setCity(e.target.value)}/>
            <button className="btn btn-outline-primary input-group-text mx-1" type="submit">Buscar</button>
        </Form>
    </div>
  )
}

export default index
