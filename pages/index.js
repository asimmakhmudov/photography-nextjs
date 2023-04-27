import Head from 'next/head'
import icon from '../public/favicon.ico'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Instagram from '@/components/Instagram'

export default function Home() {
  return (
    <>
      <Head>
        <title>Photography next app</title>
        <meta name='description' content='Photography'></meta>
        <link rel={icon} href='../public/favicon.ico' />
      </Head>
      <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData}/>
      <Instagram/>
    </>
  )
}
