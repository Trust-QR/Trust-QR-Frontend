
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.product_id
  return {
    title: id+ ' Details',
  }
}
 

export default function RootLayout({ children }) {
    return (
      <section>
        {children}
      </section>
    )
  }
  