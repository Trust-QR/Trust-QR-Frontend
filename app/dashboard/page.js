// pages/dashboard.js
'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { getApiUrl } from '../utils'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  // const proc_url =process.env['DOMAIN_URL'];
  const [products, setProducts] = useState([]);
  const router = useRouter();
  // const [url,setUrl]=useState(process.env['DOMAIN_URL'])

  // console.log('URL BEFORE USE EF',url)

  useEffect(() => {

    if (window) {
      const fetchProducts = async () => {
        try {
          // Replace 'your-identifier' with your actual identifier value

          const identifier =
            window.sessionStorage.getItem('Identifier');


          if (identifier == null) {
            router.push('/login')
            return
          }


          const url = getApiUrl();

          // console.log('URL IS ', `${url}/api/product/all`);

          const response = await fetch(`${url}/api/product/all`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Identifier: `${identifier}`, // Add your identifier here
            },
          });

          if (response.ok) {

            const data = await response.json();

            if (data['success'] == 'false') {
              setProducts('')
            }

            else {
              setProducts(data);

            }
            console.log("Product Data ", products, products.length)
          } else {

            console.error(
              'Failed to fetch products:',
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, []);

  const handleDownloadQR = async (product) => {
    try {
      // window.sessionStorage.getItem('Identifier')
      const identifier = window.sessionStorage.getItem('Identifier');
      const url = getApiUrl();
      const qrResponse = await fetch(`${url}/api/qr/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Identifier': `${identifier}`,
        },
        body: JSON.stringify({
          product_id: product[0],

        }),
      });

      if (qrResponse.ok) {
        // Handle successful QR code generation, e.g., show a success message or trigger a download
        const blob = await qrResponse.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${product[0]}_${product[1]}.png`; // Set the file name based on the product ID
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error(
          'Failed to generate QR code:',
          qrResponse.status,
          qrResponse.statusText
        );
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Product Dashboard</h1></div>
      <Link href="/product/add">Add Product</Link>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Country of Origin</th>
            <th>Expiry Date</th>
            <th>Manufacturing Date</th>
            <th>Price (₹)</th>
            <th>Images</th>
            <th>Download QR</th> {/* Add a new column */}
          </tr>
        </thead>

        <tbody>

          {products.length != 0 && products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><Link href={`/product/detail/${product[0]}`}>{product[0]}</Link></td>
              <td>{product[1]}</td>
              <td>{product[2]}</td>
              <td>{product[3]}</td>
              <td>{product[4]}</td>
              <td>{product[5]}</td>
              <td>{product[6]}</td>
              <td>₹{product[7]}</td>
              <td>
                <ul>
                  {product[8].map((imageUrl, imgIndex) => (
                    <li key={imgIndex}>
                      {console.log("URL IS ", imageUrl.trim())}
                      <img
                        src={imageUrl}
                        alt={`Product Image ${imgIndex + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </td>
              <td>

                <img src="./download.png" alt="Download" onClick={() => handleDownloadQR(product)} className={styles.downloadButton} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {products.length == 0 && <div className={styles.heading}><h2>No Product Found</h2></div>}
    </div>
  );
}
