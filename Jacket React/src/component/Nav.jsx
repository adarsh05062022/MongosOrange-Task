import React from 'react';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: 'bold', fontSize: '24px' }}>
            JacketCo
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item p-2">
                <a className="nav-link active" aria-current="page" href="#hero">Home</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link" href="#about">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
