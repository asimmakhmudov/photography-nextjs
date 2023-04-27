import Hero from "@/components/Hero";
import Head from "next/head";
import React from "react";
import icon from '../public/favicon.ico'
import Portfolio from "@/components/Portfolio";

const work = () => {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta name="description" content="Photography"></meta>
        <link rel={icon} href="../public/favicon.ico" />
      </Head>
      <Hero
        heading="My Work"
        message="This is my recent work traveling the world"
      />
      <Portfolio/>
    </>
  );
};

export default work;
