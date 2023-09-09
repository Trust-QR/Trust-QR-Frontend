import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";


export const metadata = {
  title: "Trust QR",
  description: "This is Home page here you can navigate to explore plateform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
