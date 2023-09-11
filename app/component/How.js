import Image from 'next/image'
import styles from './how.module.css'


export default function HowItWorks() {
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                {/* ***********************************Heading ************************************* */}
                <div className={styles.stepContainer}>

                    <div className={styles.step2}>
                        <p className={styles.stepHeading}>Product Authenticity Brand Protect</p>
                        <p className={styles.step1}>
                            Product Authenticity Enable consumers to verify the authenticity of products by scanning QR codes, instilling confidence in their purchases.
                        </p>
                    </div>
                    <div className={styles.inside1}>
                        <Image className={styles.step2Img} priority src='/Authenticity.jpeg' alt="site" width={400} height={400} />
                    </div>

                    <div className={styles.step3}>
                        <p className={styles.stepNumber}>Brand Protection Provide companies with a robust tool to protect their brand reputation by preventing counterfeit products from entering the market.</p>
                        <div className={styles.inside}>
                            <p className={styles.stepHeading1}>Brand Protection</p>
                            <Image className={styles.step3Img} priority src='/green_tick_shield_varients.png' alt="site" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
            {/* **************************** TryIt Button ********************************** */}

        </div>
    )

}