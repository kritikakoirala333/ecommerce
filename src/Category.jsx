import React from 'react'
import { Link, useParams,  } from 'react-router-dom'
import { data } from './Data'


function Category() {
  let {cid}=useParams()
  let catData=data.filter(a=>a.category==cid)
  return (
   <>
   <div className='container'>
    <h2>{cid} List of items</h2>
    <div className='row'>
      <div className='row'>
        {catData.map(a=>(
          <div className='col-lg-3 py-4' key={a.id}>
            <div className='shadow p-2 mb-3 bg-body rounded'>
              <Link to={`/details/${a.id}`} className='text-decoration-none text-dark'>
              <img className='w-100' src={a.image} alt=""></img>
              <p>{a.title}</p>
              <p>price: {a.price}</p>
              </Link>
              <button className='btn btn-success'>SHOP NOW</button>
            </div>
          </div> 
        ))}

      </div>

    </div>
    
   </div>
   </>
  )
}

export default Category
