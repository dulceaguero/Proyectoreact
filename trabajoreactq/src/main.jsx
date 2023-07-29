import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Componentes/Header/Header.jsx'
import Aboutme from './Componentes/Aboutme/Aboutme.jsx'
import Contact from './Componentes/Contact/Contact.jsx'
import Footer from './Componentes/Footer/footer.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Aboutme />
    <Contact />
    <Footer />
  
   
  </React.StrictMode>,
)
