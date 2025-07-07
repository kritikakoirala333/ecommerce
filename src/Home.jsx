import React from 'react'
import { Link } from 'react-router-dom'
import { category, data, } from './Data'

function Home() {
  return (
    <>
      <section>

        <div className='bg-success-subtle p-2 rounded'>
          <ul className='d-flex justify-content-center gap-4 '>
            {category.map(a => (
              <li className='fw-bold list-unstyled' key={a}>
                <Link to={`/category/${a}`} className='text-decoration-none text-dark'>{a}</Link>


              </li>
            ))}

          </ul>

        </div>


      </section>
      <section className='position-relative py-3'>
        <img className="img-fluid" src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1728/cms/5fVKgLvCKMOejuNtFKAK16/2f2c9a68c1b55752c3cd3388d687caa4/25Q2_White_Sneaker_Season_Mens_Site_HomepageHero_Desktop_2880x1245.jpg" alt="">
        </img>
        <div className='position-absolute start-50 traslate-middle-x text-center text-dark' style={{ top: '40%' }}>
          <h1 className='fw-bold'>Step Into Summer</h1>
          <p className='fs-4'>Explore our newest collection of eco-friendly sneakers</p>

        </div>




      </section>
      <section className='my-4'>
        <div className='container'>
          <div className='row'>
            {data.map(a => (
              <div className='col-lg-3 py-4 ' key={a.id}>
                <div className='shadow p-3 mb-3 bg-body rounded '>
                  <Link to={`/details/${a.id}`} className='text-decoration-none text-dark'>
                    <img className='w-100' src={a.image} alt=""></img>
                    <p>{a.title}</p>
                    <p>Price: {a.price}</p>

                  </Link>
                  <div className='d-flex p-2 '>
                    <button className='btn  btn-success'>SHOP NOW</button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className='position-relative mb-4'>
        <img className='img-fluid' src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2053/cms/3gaucwAUA2KXTW2QeloccX/02d479630932580eb29bc1329e0ec6fd/24Q3_AugustCore_Statement_Module_Site_Desktop_IMG_2880x720.jpg" alt="">
        </img>
        <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
          <h1 className='mb-3' >We Make Better Things In A Better Way</h1>
          <p className='fs-4'>By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.</p>

        </div>
      </section>
     
    </>
  )
}

export default Home
