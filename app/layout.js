'use client'
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { Inter } from "next/font/google";
import { useState } from "react";
import React from 'react';
import { createContext } from 'react';

export const loginContext = createContext('test');

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [isLogin, setStatus] = useState(false);

  function setIdentifier(identifier) {
    sessionStorage.setItem("Identifier", identifier);
    setStatus(true);
  };

  return (

    <html lang="en">
      <title>Trust QR</title>
      <body className={inter.className}>
        <loginContext.Provider value={setIdentifier}>
          <Navbar  isLogin={isLogin} />
          {children}
          <Footer />
        </loginContext.Provider>
      </body>
    </html>
  );
}
