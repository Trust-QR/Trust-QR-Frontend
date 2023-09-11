'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import styles from "./navbar.module.css";
import { useRouter } from 'next/navigation';




export default function Navbar({ isLogin }) {
  console.log(`Navbar isLogin : ${isLogin}`);
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);
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


  function removeUser() {
    sessionStorage.clear();
    setStatus(false);
    router.push("/login");
  }

  return (
    <>
      <div className={`${styles.navbar} ${fix ? styles.sticky : ""}`}>
        <div className={`${styles.logo} ${isOpen ? styles.burgerLogo : ""}`}>
          <Link href={"/"}>
            <Image
              className={styles.img}
              src="/logo.png"
              alt="logo"
              width={200}
              height={140}
              priority={true}
            ></Image>
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
              <>
                <div id={styles.login}>
                  <Link
                    href="/dashboard"
                    className={styles.auth}
                  >
                    Dashboard
                  </Link>
                </div>
                <div id={styles.login}>
                  <Link
                    href="/login"
                    className={styles.auth}
                    onClick={removeUser}
                  >
                    Logout
                  </Link>
                </div>
              </>
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
            )}
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
