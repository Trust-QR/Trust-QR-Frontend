import Image from "next/image";
import styles from "./trusted.module.css";

export default function Trusted() {
  return (
    <div className={styles.con}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Trusted By 1500+ Brands</h3>
        </div>
        {/* *********************************************Paragraph ********************************** */}
      </div>

      {/* ***************************Image of VH********************************* */}
      <div className={styles.imgContainer}>
        <Image
          src="/img/RS-LOGO6-6.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img1}
          priority
        />
        <Image
          src="/img/RS-LOGO6-4.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img2}
          priority
        />
        <Image
          src="/img/RS-LOGO6-3.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img3}
          priority
        />
        <Image
          src="/img/RS-LOGO6-2.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img4}
          priority
        />
        <Image
          src="/img/RS-LOGO6-1.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img5}
          priority
        />

        <Image
          src="/img/RS-LOGO6-5.png"
          alt="Customer Image"
          width={100}
          height={51}
          className={styles.logo_img6}
          priority
        />
      </div>
    </div>
  );
}
