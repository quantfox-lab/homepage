
import { Container } from '@/components/Container'
import bigData from '@/images/secondary_big_data.png'

export function SecondaryFeaturesNew() {
  return (
    <section id="secondary-features"
      aria-label="Features for investing all your money"
       className="py-20 sm:py-32 bg-white"
    >

      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative mx-auto max-w-xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <img src={bigData.src} className=""/>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              High-performance Optimised Engine
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Reliable and high-performance trading infrastructure is a vital part of risk-managed and professional approaches to live automated trading.
              The optimised live-trading engine allows you to seek alpha and market opportunities within microsecond latencies.
              We also offer terra-bytes-level historical data across markets to backtest the performance of your strategies.
            </p>

          </div>
        </div>

      </Container>

    </section>
  )
}
