import React from 'react';

function Product({ item }) {
  const { image, price, title, rating } = item;
  const newTitle = title.length > 20 ? title.slice(0, 20) + '...' : title;

  return (
    <div 
      className="card mx-auto my-3" 
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '15px',
      }}
    >
      <img 
        src={image} 
        alt={newTitle} 
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'contain',
          borderBottom: '1px solid #ddd',
        }} 
      />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '10px 0' }}>
          {newTitle}
        </h5>
        <p 
          className="card-price" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#333', 
            marginBottom: '10px' 
          }}
        >
          ${price}
        </p>
        <div 
          className="rating-info" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            fontSize: '0.9rem', 
            color: '#666' 
          }}
        >
          <span 
            style={{ 
              backgroundColor: '#f8f9fa', 
              borderRadius: '5px', 
              padding: '5px 10px', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
              marginBottom: '5px'
            }}
          >
            Rating: {rating.rate} / 5
          </span>
          <span 
            style={{ 
              backgroundColor: '#f8f9fa', 
              borderRadius: '5px', 
              padding: '5px 10px', 
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            Reviews: {rating.count}
          </span>
        </div>
        <button 
          className="btn btn-info mt-3"
          style={{
            borderRadius: '20px',
            padding: '10px 20px',
            fontSize: '0.9rem',
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Product;
