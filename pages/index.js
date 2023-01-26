import Head from 'next/head'
import Certified from '../components/Certified'
import HeadSection from '../components/HeadSection'
import WaterComposition from '../components/WaterComposition'

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
    </div>
  )
}
