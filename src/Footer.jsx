import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <section className=' shadow mb-4'>
        <div className='container fw-bold text-dark mb-4'>
          <h2>The Allbirds Approach</h2>

        </div>
        <div className='d-flex gap-3 container'>
        <div className='col-lg-4'>
          <h3>Wear-All-Day Comfort</h3>
          <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
        </div>
        <div className='col-lg-4'>
          <h3>Sustainability In Every Step</h3>
          <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>

        </div>
        <div className='col-lg-4'>
          <h3>Materials From The Earth</h3>
          <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
        </div>
        </div>

      </section>
      <footer className=' bg-dark text-white'>
        <div className='container p-3 '>
          <div className='row'>
            <div className='col-lg-4'>
              <h3 className='fw-bold'>HELP</h3>
              <ul className='list-unstyled d-flex flex-column gap-3'>
                <li><Link className='text-decoration-none text-white' href="/">Chat with us!</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">help@allbirds.com</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">Returns/Exchanges</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">FAQ/Contact Us</Link></li>
              </ul>



            </div>
            <div className='col-lg-4'>
              <h3 className='fw-bold py-3'>SHOP</h3>
              <ul className='list-unstyled d-flex flex-column gap-3'>
                <li><Link className='text-decoration-none text-white' href="/">Mens clothing</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">Womens clothing</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">Electronics</Link></li>
                <li><Link className='text-decoration-none text-white' href="/">Jewelery</Link></li>

              </ul>


            </div>
            <div className='col-lg-4'>
              <h3 className='fw-bold py-3'>Contact Us</h3>
              <ul className='list-unstyled d-flex flex-column gap-3'>
                <li><strong className='text-decoration-none text-white '>Jawalakhel Lalitpur,Kathmandu, Nepal Post Box No:- 13965</strong></li>
                <li><Link className='text-decoration-none text-white ' href="">+9775175204</Link></li>
                <li><Link className='text-decoration-none text-white ' href="">+9779851090618</Link></li>

              </ul>
            </div>
          </div>

          <div className='row py-3'>
            <div className='col-lg-4'>
              <strong> © 2025 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</strong>
            </div>

            <div className='col-lg-4'>
              <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg" alt=""></img>

            </div>
            <div className='col-lg-4'>
              <ul className="list-unstyled d-flex gap-3 justify-content-end" >
                <li><a href='/' className='text-white'><i className="bi bi-instagram"></i></a></li>
                <li><a href='/' className='text-white'><i className="bi bi-facebook"></i></a></li>
                <li><a href='/' className='text-white'><i className="bi bi-twitter"></i></a></li>
                <li><a href='/' className='text-white'><i className="bi bi-youtube"></i></a></li>
              </ul>

            </div>

          </div>

        </div>
      </footer>
    </>

  )
}

export default Footer
