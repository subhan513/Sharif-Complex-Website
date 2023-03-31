import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
 

export default function NetMetering() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>Page | Solnyne Solutions</title>
        <meta
          name="title"
          content="Page | Solnyne Solutions"
        />
        <meta
          name="description"
          content=""
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Page | Solnyne Solutions"
        />
        <meta
          name="twitter:description"
          content=""
        />
        <meta
          name="twitter:image:src"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Page | Solnyne Solutions"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <link rel="canonical" href="https://solnyne.com/net-metering" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Net Metering - Solnyne Solutions"
        pageImg="hdr-2.jpg"
      />

      <section className="main-sec">
        <div
          className="space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <p>
            <span className="font-bold">Solnyne Solutions</span> is a leading
            energy company focusing on transition to clean energy by increasing
            the adoption of solar technology. We provide complete rooftop solar
            system for industrial, commercial and residential customers right
            from site audit to complete installation & commissioning.
          </p>
          <p>
            Our goal is to increase the adoption of solar energy by making
            process simpler, faster supported by finance and technical guidance.
            We have highly skilled team having hands on experience in designing
            and commissioning different kinds of solar plants. We have worked
            with large real estate players, schools & colleges, bungalows and
            religious outfits.
          </p>
          <p>
            The future is clean energy and solar is an extremely versatile
            technology promising a green future. So, if you are looking to adopt
            this great technology, you can trust us as of the leading solar
            system suppliers in Gujranwala. We have made many go green and save
            on their electricity bills by switching to solar energy. Along with
            our solar rooftop offerings we believe that we are also one of the
            top solar consultants in Gujranwala.
          </p>
        </div>
      </section>
  
                  
      <section className="relative">
  
      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      
      </section>
    </>
  );
}
