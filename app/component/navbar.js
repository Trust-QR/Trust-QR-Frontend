'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from 'next/navigation';
/**
 * This file is a client entry.
 */





export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for burger menu toggle
  const [fix, setFix] = useState(false); // navbar fixing on the top
  const [isLogin, setStatus] = useState(false); // For conditional rendering when login
  const router = useRouter();


  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window !== undefined) {
      const offSet = parseInt(window.scrollY, 10);

      if (offSet >= 300) setFix(true);
      else setFix(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fix]);

  useEffect(() => {
    const id = sessionStorage.getItem('Identifier');
    if (id)
      setStatus(true);
  }, []);

  function removeUser() {
    sessionStorage.clear();
    setStatus(false);
    // router.push("/login");
  }

  return (
    <>
      <div className={`${styles.navbar} ${fix ? styles.sticky : ""}`}>
        <div className={`${styles.logo} ${isOpen ? styles.burgerLogo : ""}`}>
          <Link href={"/"}>
            <Image
              className={styles.img}
              src="/hovercode.svg"
              alt="logo"
              width={100}
              height={100}
              priority={true}
            ></Image>
            {/* Trust QR */}
          </Link>
        </div>

        <div className={`${styles.navItems} ${isOpen ? styles.show : ""}`}>
          <Link href="/" className={styles.navLink} onClick={handleMenuToggle}>
            Home
          </Link>
          <Link href="/scan" className={styles.navLink} onClick={handleMenuToggle}>
            Scan QR
          </Link>

          <div className={styles.authContainer} id={styles.authentication}>
            {isLogin ? (
              <div id={styles.login}>
                <Link
                  href="/login"
                  className={styles.auth}
                  onClick={removeUser}
                >
                  Logout
                </Link>
              </div>
            ) : (
              <>
                < div id={styles.signup}>
                  <Link
                    href="/signup"
                    className={styles.auth}
                    onClick={handleMenuToggle}
                  >
                    Sign up
                  </Link>
                </div>
                <div id={styles.login}>
                  <Link
                    href="/login"
                    className={styles.auth}
                    onClick={handleMenuToggle}
                  >
                    Log in
                  </Link>
                </div>
              </>
            )};
          </div>
        </div>

        <div
          className={`${styles.hamburgerBtn} ${isOpen ? styles.show : ""}`}
          onClick={handleMenuToggle}
        >
          <span className={`${styles.bar1} ${styles.bar}`}></span>
          <span className={`${styles.bar2} ${styles.bar}`}></span>
          <span className={`${styles.bar3} ${styles.bar}`}></span>
        </div>
      </div >
      <div
        className={`close ${isOpen ? styles.show : ""}`}
        id="notification"
      ></div>
    </>
  );
}
