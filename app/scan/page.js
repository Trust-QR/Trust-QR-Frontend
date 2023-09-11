'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './scan.module.css';
import { get_api_url } from '../utils';

export default function Upload() {
    const url = get_api_url();

    const [formKey, setFormKey] = useState(0);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    async function submitHandler(event) {

        event.preventDefault();

        const qrInput = document.getElementById('prod_qr');
        const data = new FormData();
        data.append('file', qrInput.files[0]);
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Authorization': `Bearer ${token}`
            },
            body: data,
        };
        setError(null);
        setResults(null);
        try {

            const response = await fetch(`${url}api/product/upload`, options);

            console.log('Resonponse is ', response)
            const result = await response.json();
            // console.log('+++++++++++++++++++-Result--------------')
            // console.log(result)
            // ScrollChange = 1;
            if (result['url'] == false || result['url'] == 'No selected file') {
                alert('Please Select Correct file');
            }
            router.push(result['url']);
            // setResults(result);

        } catch (error) {
            console.log(error)
            setError('Something went wrong. Please try again later');
        }
        setFormKey(formKey + 1);

    }


    return (
        <>
            <div className={styles.html_form}>
                <div className={styles.heading}>
                    <h1>Upload QR</h1></div>
                <form action="#" method="post" onSubmit={submitHandler} className={styles.innerform} key={formKey}>
                    <div className={styles.per_info}>
                        <div className={styles.cloth}>
                            <label htmlFor="Upload photo" className={styles.file}>Upload
                                <input type="file" id="prod_qr" name="prod_qr" className={styles.clothId} required accept='image/*' />
                            </label>
                        </div>

                        <input type="submit" value="Submit" className={styles.my_btn} />
                    </div>
                </form>
            </div >
        </>
    );
};

