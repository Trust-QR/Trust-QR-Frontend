
  export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const id = params.id
    return {
      title: params.id + ' Details',
    }
  }
   
  
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  