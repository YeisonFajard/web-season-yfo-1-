import './App.css'
import Saludo from './assets/components/Saludo'
import { Productos } from './assets/components/Productos'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import img01 from './assets/img01.jpg'
import img02 from './assets/img02.jpg'
import img03 from './assets/img03.jpg'
import img04 from './assets/img04.jpg'

function App() {
  const articulos = [
    {
      nombre: "Laptop HP Spectre x360",
      description: "Laptop convertible con pantalla táctil de 13.3 pulgadas",
      price: 1500,
      disponible: true,
      img : img01
      
      
    },
    {
      nombre: "Smartphone Samsung Galaxy S21",
      description: "Teléfono inteligente con pantalla AMOLED de 6.2 pulgadas",
      price: 999,
      disponible: true,
      img : img02
    },
    {
      nombre: "Auriculares Bose QuietComfort 35 II",
      description: "Auriculares inalámbricos con cancelación de ruido",
      price: 299,
      disponible: true,
      img : img03
    },
    {
      nombre: "Tablet Apple iPad Pro",
      description: "Tablet con pantalla Liquid Retina de 11 pulgadas",
      price: 799,
      disponible: false,
      img : img04
    }
     ];
 
    return (
      <>
     
      <Router> 
        <div className="container">
          <div className='row'>
            <div className='col-4'><Link to={"/"}>Saludo</Link></div>
            <div className='col-4'><Link to={"/Saludo/"}>articulos</Link></div>
            <div className='col-4'>Contact</div>
          </div>

         <div className='container'>
          <Routes>
            <Route path="/" element={<Saludo></Saludo>}>   </Route>
            <Route path="/Saludo/" element={<Productos  articulos={ articulos}> </Productos>}></Route>

          </Routes>
          </div> 
        </div>
      </Router>      
      </>
  )
}

export default App
