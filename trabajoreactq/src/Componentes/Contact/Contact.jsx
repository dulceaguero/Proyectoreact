import React from 'react'
import './Contact.css'


function Contact() {

  return (
    <>
      <section id='contact' className='contact'>
        <h1 className='title'>Contacto</h1>
        <form className='form'>

          <label className='label header'>Nombre</label>
          <input className='input' type="text" placeholder="Ingresa tu Nombre" />

          <label className='label header'>Serie Favorita</label>
          <input className='input' type="text" placeholder="Ingresar serie favorita" />

          <p className='label header'>Desde que dispositivo ves tus series favoritas</p>
          <div className='options'>
            <input className='radio' type="radio"  name="dispositivo" value="telefono" />
            <label for="option1">Celular</label>

            <input className='radio' type="radio" name="dispositivo" value="tablet" />
            <label for="option2">Tablet</label>

            <input className='radio' type="radio"  name="dispositivo" value="televisor" />
            <label for="option3">Televisor</label>
      
          <input className='radio' type="radio"  name="dispositivo" value="computadora" />
            <label for="option3">Computadora</label>
          </div><br></br>

          <label className='label header'>¿Queres dejar un mensaje?</label>
          <textarea className='input' placeholder="Ingresalo aca" cols="50" rows="8"></textarea>

          <input className='button' type="submit" value="Submit" />

        </form>
      </section>
    </>
  )
}

export default Contact
