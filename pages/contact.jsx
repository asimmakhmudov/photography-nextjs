import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'
import icon from '../public/favicon.ico'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Photography"></meta>
        <link rel={icon} href="../public/favicon.ico" />
      </Head>
      <Hero heading='Contact' message='Submit the form below for more work and quotes.'/>
      <Contact/>
    </>
  )
}

export default contact