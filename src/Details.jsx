import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Data'

function Details() {
  let { id } = useParams()
  let ss = data.find(a => a.id == id)

  return (
    <>
      <div className='py-4'>
        <div className='container'>
          <h2 className='fw-bold'>Details of {ss.category}</h2>
          <div className='shadow p-4 mb-3 bg-body rounded'>
            <h3 className='fw-bold text-center p-2 rounded'>{ss.title}</h3>
            <img className='w-100' src={ss.image} alt=""></img>
            <div className='d-flex justify-content-between p-2 '>
              <p className='fw-bold bg-success-subtle p-2 rounded'>Rate: {ss.rating.rate}</p>
              <p className='fw-bold bg-success-subtle p-2 rounded'>Count: {ss.rating.count}</p>
            </div>
            <hr />
            <h5 className='text-center py-3'>{ss.description}</h5>


          </div>
          <div className='d-flex justify-content-center py-2'>
            <button className='btn btn-success'>SHOP NOW</button>

          </div>

        </div>

      </div>
    </>
  )
}

export default Details
