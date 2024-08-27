import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutAndContact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div 
          className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" 
          style={{
            backgroundColor: '#F8F9FA',
            padding: '40px',
            textAlign: 'center',
            borderRight: '1px solid #ddd' 
          }}
        >
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>ABOUT US</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.4', margin: '0 auto', maxWidth: '80%' }}>
              We are dedicated to providing high-quality jackets that combine style and comfort. Explore our range and find the perfect jacket for you.
            </p>
          </div>
        </div>

        <div 
          className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center" 
          style={{
            backgroundColor: '#E9ECEF', 
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>CONTACT US</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.4', marginBottom: '20px' }}>
              Reach out to us via email or phone. We’re here to help!
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
              <strong>Email:</strong> support@jacketcompany.com
            </p>
            <p style={{ fontSize: '1rem' }}>
              <strong>Phone:</strong> +1 (234) 567-890
            </p>
            <button 
              className="btn btn-info"
              style={{
                borderRadius: '20px', 
                padding: '10px 20px', 
                fontSize: '1rem',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none'
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAndContact;
