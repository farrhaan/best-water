import Head from 'next/head'
import Certified from '../components/Certified'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeadSection from '../components/HeadSection'
import Products from '../components/Products'
import WaterComposition from '../components/WaterComposition'
import 'animate.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Best Water</title>
        <meta name="description" content="Pure Drinking Water" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <HeadSection />
      <Certified/>
      <WaterComposition/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  )
}
