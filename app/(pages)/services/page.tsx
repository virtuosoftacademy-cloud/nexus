

'use client'

import Hero from './_components/Hero'
import { ServicesCards } from './_components/Services'

function Services() {
  return (
    <section className='px-8 sm:px-8 xl:px-18 pb-10'>
      <Hero />
      <ServicesCards />
    </section>
  )
}

export default Services