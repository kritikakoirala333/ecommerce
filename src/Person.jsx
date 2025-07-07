import React from 'react'

function Person() {
  return (
    <>
    <div className="container my-5">
  <section className="d-flex justify-content-center">
    <form className="p-4 shadow rounded bg-light" style={{ maxWidth: '500px', width: '100%' }}>
      <img className="form-title fw-bold fs-3 mb-4 img-fluid" src="https://cdn.shopify.com/s/files/1/1104/4168/files/Allbirds.Logo.Black.RGB.Large_200x60@2x.png?v=1613734536.webp"></img>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Phone No."
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Sign Up
      </button>
    </form>
  </section>
</div>

    </>
  )
}

export default Person
