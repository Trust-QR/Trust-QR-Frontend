// pages/product/[productId].js
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import styles from './style.module.css'; 



const ProductDetails = () => {
  const params = useParams()
  const url=process.env['DOMAIN_URL']

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId
    const fetchProductDetails = async () => {
        // window.sessionStorage.getItem('Identifier')
        const identifier =
            params.double_encoded_identifier;

        // window.sessionStorage.getItem('ProductID')
        const productId=params.product_id

      try {
        const response = await fetch(`${url}/api/product/qr-detail/${identifier}/${productId}`, {
            method: 'GET',
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
    <div className={styles.container}>
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
          
            <img src={imageUrl} alt={`Product Image ${index + 1}`} />
         
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
