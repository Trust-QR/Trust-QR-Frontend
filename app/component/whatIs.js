import Image from 'next/image'
import styles from './whatIs.module.css'
import Button from './button'

export default function WhatIs() {
    return (
        <div className={styles.con}>

            <div className={styles.content}>
                <div className={styles.heading}>
                    <p>Next Gen Platform</p>
                    {/* <p>Designed To Revolutionize </p> */}
                </div>
                {/* *********************************************Paragraph ********************************** */}
                <div className={styles.para}>
                    <p>
                        In a world filled with counterfeit goods and trust issues, Trust QR offers a robust solution that harnesses the power of blockchain
                        technology and QR codes. Companies can securely register their products on our platform, where the product data is immutably stored on
                        the blockchain. In return, a unique QR code is generated for each product, serving as a digital fingerprint
                    </p>
                </div>

                <div className={styles.try}>
                    {/* <Button className={'Try-valueHunt'} text={'Try ValueHunt'} icon={'\uD83E\uDC7D'}/> */}
                    <Button props={{ className: 'Try-valueHunt', text: 'Get Started', link: '/scan' }} />
                </div>
            </div>

            {/* ***************************Image of VH********************************* */}
            <div className={styles.imgContainer}>
                <Image src='/block1.jpeg' alt="Customer Image" width={400} height={400} className={styles.logo_img1} priority />
            </div>
        </div>
    )

}