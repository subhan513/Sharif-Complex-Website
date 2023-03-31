import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import Head from "next/head";
import solution from "../solutions.json";
import generateRSS from "../../lib/generateRssFeed";
 
 
export default function Solutions() {

 
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
        <title>Our Solutions | Solnyne Solutions</title>
        <meta name="title" content="Our Solutions | Solnyne Solutions" />
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta itemProp="image" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Solutions | Solnyne Solutions" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />
        <meta property="og:title" content="Our Solutions | Solnyne Solutions" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />
        <meta property="og:description" content="Our Solutions | Solnyne Solutions" />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />
        <link rel="canonical" href="https://solnyne.com/solutions"/>
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Our Solutions | Solnyne Solutions"
        pageImg="hdr-4.jpg"
      />

      <section className="main-sec  relative md:pb-24 pb-16">


      <div className="container mx-auto px-4 mt-5 ">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-4 text-center">
             
            {solution.posts.map((post, index) => {
                
                return (
              
              <div key={post.slug + "_" + index} className="bx-item-bb h-80 bg-cover bg-center bg-no-repeat  relative" style={{
          backgroundImage: "url("+post.featured_img+")",
        }}>
                 <div className="flex flex-col bottom-0 pb-3 pt-1 absolute border-t w-full backdrop-blur-sm bg-white/30">
                  
                  <Link href={"solutions/" + post.slug} className="group">
                  <h2 className="group-hover:text-blue-600">
                  {post.title}
                    </h2>
                    <p className="text-xs"> {post.shortdescription}</p>
                  </Link>
                </div> 
              </div>
                );
               
              })}
              
              
            </div>           
          </div>
  
        <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      </section>
    </>
  );
}
export async function getStaticProps() {  
   
  await generateRSS();
  return {
    props: {
     
    },
  }
 
}