// pages/product/[productId].js
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import styles from './style.module.css'; // Import the CSS module

const ProductDetails = () => {
  const url =process.env['DOMAIN_URL']
  const params = useParams()

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId
    const fetchProductDetails = async () => {
        // window.sessionStorage.getItem('Identifier')
        const identifier =
            '9a89ec8fc502dd86d83ca4478779691ed0345747f166c44c7387c27c04c009db';

        // window.sessionStorage.getItem('ProductID')
        const productId=params.id

      try {
        console.log('Tyring ')
        const response = await fetch(`${url}/api/product/detail`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Identifier: `${identifier}`, // Add your identifier here
              ProductID: `${productId}`, // Add your identifier here
            },
          });
      
        if (response.ok) {
          const data = await response.json();
          console.log('Res Detail s s ',data )
          setProduct(data);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    
      fetchProductDetails();
    
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}> {/* Apply the CSS class */}
      <h1>Product Details</h1>
      <p>Product ID: {product[0]}</p>
      <p>Product Name: {product[1]}</p>
      <p>Description: {product[2]}</p>
      <p>Category: {product[3]}</p>
      <p>Country of Origin: {product[4]}</p>
      <p>Expiry Date: {product[5]}</p>
      <p>Manufacturing Date: {product[6]}</p>
      <p>Price: ₹{product[7]}</p>
      <h2>Images</h2>
      <div className={styles.imgCon}>
        {product[8].map((imageUrl, index) => (
          // <li key={index}>
            <img src={imageUrl} alt={`Product Image ${index + 1}`} />
          // </li>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
