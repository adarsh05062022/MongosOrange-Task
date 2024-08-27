import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Product from './Product';
import jackets from '../assets/dummyData.js'; 

function Cart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(jackets);
  }, []);

  return (
    <div className='container m-auto text-center'>
      <h1 className='p-5' style={{ color: '#8989be' }}>PRODUCTS</h1>
      <div className='row'>
        {product.length === 0 ? (
          <Loading />
        ) : (
          product.map((item, index) => (
            <div className='col-md-4 mb-4' key={index}>
              <Product item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
