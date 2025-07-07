import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'
import About from './About'
import Contactus from './Contactus'
import Help from './Help'
import Person from './Person'
import 'bootstrap-icons/font/bootstrap-icons.css';



function Header() {
  return (
    <>
      <header className=' p-2 bg-success text-dark'>
        <div className='container d-flex  justify-content-between align-items-center '>
          <div className='list-unstyled d-flex'>
            <Link to="/"><img className='img-fluid' src="https://cdn.shopify.com/s/files/1/1104/4168/files/Allbirds.Logo.Black.RGB.Large_200x60@2x.png?v=1613734536.webp" alt="" style={{ maxHeight: '50px' }}></img></Link>
          </div>

          <ul className="navbar-nav gap-5  flex-row ">
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to="/about">Rerun</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to="/contactus">Stores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to="/person"><i className="bi bi-person"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold fs-4" aria-current="page" to="/help"><i className="bi bi-question-circle"></i></Link>
              
            </li>

          </ul>


        </div>
      </header>

       



      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/category/:cid/' element={<Category />} />
        <Route path='/details/:id/' element={<Details />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/person" element={<Person/>} />
      </Routes>

    </>
  )
}

export default Header
