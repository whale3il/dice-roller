import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg px-3" style={{backgroundColor:'#f5f5f5'}}>
  <div class="container-fluid">
    <a class="navbar-brand fw-bold fs-2" href="#" style={{color:'#dc2f30'}}>MINI-ME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item ps-lg-5 fw-semibold">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item ps-lg-5 fw-semibold">
          <a class="nav-link active" aria-current="page" href="#">Cart</a>
        </li>
        <li class="nav-item ps-lg-5 fw-semibold">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item ps-lg-5 fw-semibold">
          <a class="nav-link" href="#">Shop</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        
        <button class="btn text-white px-4 py-3 fw-medium rounded-5 " type="submit" style={{backgroundColor:'#dc2f30', border:'3px solid white'}}>Discover</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar