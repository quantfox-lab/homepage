import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import {Button} from "@/components/Button";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Power Your Quant Research!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Our service is about to kick off. Register your interest and get notified once QuantFox is available. We will opensource our engines shortly.
          </p>
          <div className="mt-8 flex justify-center">
            {/*<AppStoreLink color="white" />*/}
            <Button
                className="bg-white"
                variant="outline"
                target="_blank"
                href="https://forms.gle/y2SKDVwXrYV95qqE6"
            >
              Get Notified
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
