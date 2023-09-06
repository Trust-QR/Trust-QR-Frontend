'use client';

import { useState } from 'react';
import styles from './style.module.css'; // Import the CSS

const AddProduct = () => {
  const url=process.env['DOMAIN_URL'];
  const [formData, setFormData] = useState({
    product_id: '',
    product_name: '',
    product_description: '',
    product_category: '',
    country_of_origin: '',
    date_of_expiry: '',
    date_of_manufacturing: '',
    price: '',
    urls: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data here (e.g., check if all mandatory fields are filled)
    if (
      formData.product_id &&
      formData.product_name &&
      formData.product_description &&
      formData.product_category &&
      formData.country_of_origin &&
      formData.date_of_expiry &&
      formData.date_of_manufacturing &&
      formData.price &&
      formData.urls.length > 0
    ) {
      // Submit the form data to your API or perform other actions here
      // window.sessionStorage.getItem('Identifier')
      const identifier =
        '9a89ec8fc502dd86d83ca4478779691ed0345747f166c44c7387c27c04c009db';

      const addRes = await fetch(`${url}/api/product/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Identifier': `${identifier}`,
        },
        body: JSON.stringify({
         formData
        }),
       
      });
      
      const res= await addRes.json()
     
      if (res['success']=="false"){
        let msg=res['error'];
        alert(`Product is Not Saved !!! Error ${msg}`);
      }
      else{
        alert('Product Saved Successfully !!! ');
        setFormData({
          product_id: '',
          product_name: '',
          product_description: '',
          product_category: '',
          country_of_origin: '',
          date_of_expiry: '',
          date_of_manufacturing: '',
          price: '',
          urls: [],
        });
      }

    } else {
      alert('Please fill in all mandatory fields.');
    }
  };

  return (
    <div className={styles.container}> {/* Apply the container class */}
      <h1>Add Product</h1>
      <form className={styles.form} onSubmit={handleSubmit}> {/* Apply the form class */}
        <div className={styles.formGroup}>
          <label htmlFor="product_id">Product ID:</label>
          <input
            type="text"
            id="product_id"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="product_description">Product Description:</label>
          <textarea
            id="product_description"
            name="product_description"
            value={formData.product_description}
            onChange={handleChange}
            required
            className={styles.textareaField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="product_category">Product Category:</label>
          <input
            type="text"
            id="product_category"
            name="product_category"
            value={formData.product_category}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="country_of_origin">Country of Origin:</label>
          <input
            type="text"
            id="country_of_origin"
            name="country_of_origin"
            value={formData.country_of_origin}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date_of_expiry">Date of Expiry:</label>
          <input
            type="date"
            id="date_of_expiry"
            name="date_of_expiry"
            value={formData.date_of_expiry}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date_of_manufacturing">Date of Manufacturing:</label>
          <input
            type="date"
            id="date_of_manufacturing"
            name="date_of_manufacturing"
            value={formData.date_of_manufacturing}
            onChange={handleChange}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className={styles.inputField} 
            placeholder='Enter Price Only upto 2 Decimal Places'
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="urls">Image URLs (comma-separated):</label>
          <input
            type="text"
            id="urls"
            name="urls"
            value={formData.urls.join(', ')}
            onChange={(e) => {
              const urls = e.target.value.split(', ');
              setFormData((prevData) => ({
                ...prevData,
                urls,
              }));
            }}
            required
            className={styles.inputField} 
          />
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>Add Product</button> {/* Apply the submit-button class */}
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
