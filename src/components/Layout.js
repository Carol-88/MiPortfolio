import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, pageTitle, description }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
