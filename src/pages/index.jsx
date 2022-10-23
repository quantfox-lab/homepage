import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import {SecondaryFeaturesNew} from "@/components/SecondaryFeaturesNew";

export default function Home() {
  return (
    <>
      <Head>
        <title>JetFox - A One-stop Quantitative Research Solution.</title>
        <meta
          name="description"
          content="A handy, cutting-edge, unified API and environment for research, backtest and live trading on the leading algorithmic trading platform."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeaturesNew />
        <CallToAction />
        {/*<Reviews />*/}
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
