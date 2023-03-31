import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import MainHeader from "../../components/mainheader";
import { NextSeo } from "next-seo";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import content from "../products";

export default function productsPage() {
  const [showa, setShowa] = useState(true);
  const [showb, setShowb] = useState(false);
  const [showc, setShowc] = useState(false);
  const [showd, setShowd] = useState(false);
   

  function setToggle(show) {
    setShowa(false);
    setShowb(false);
    setShowc(false);
    setShowd(false);
    
    
    let elea = document.getElementById("showa");
    let eleb = document.getElementById("showb");
    let elec = document.getElementById("showc");
    let eled = document.getElementById("showd");
    

    elea.classList.remove("bx-item-pro_sel");
    eleb.classList.remove("bx-item-pro_sel");
    elec.classList.remove("bx-item-pro_sel");
    eled.classList.remove("bx-item-pro_sel");
    

    if (show == "showa") {
      setShowa(true);
      elea.classList.add("bx-item-pro_sel");
    }
    if (show == "showb") {
      setShowb(true);
      eleb.classList.add("bx-item-pro_sel");
    }
    if (show == "showc") {
      setShowc(true);
      elec.classList.add("bx-item-pro_sel");
    }
    if (show == "showd") {
      setShowd(true);
      eled.classList.add("bx-item-pro_sel");
    }
    
   
  }

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
        <title>Our Products | Solnyne Solutions</title>
        <meta name="title" content="Our Products | Solnyne Solutions" />
        <meta name="description" content=" " />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />

        <meta name="twitter:title" content="Our Products | Solnyne Solutions" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image:src" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />
        <meta property="og:title" content="Our Products | Solnyne Solutions" />
        <meta property="og:type" content="article" />

        <meta property="og:description" content="" />
        <meta property="og:locale" content="en" />
        <meta itemProp="image" content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75" />

        <link rel="canonical" href="https://solnyne.com/products" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader pageHeading="Solar Panels, Inverters, Batteries & Accessories" pageImg="hdr-3.jpg" />

      <section className="main-sec">
        <div className="container mx-auto px-4 ">
          <div className="md:flex grid grid-cols-2 gap-4 gap-y-6  text-center">
            <div
              className="bx-item-pro bx-item-pro_sel h-auto"
              id="showa"
              onClick={() => setToggle("showa")}
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solutions"
                  className="w-16 mx-auto -mt-12"
                  width={64}
                  height={64}
                />
                <h2>Solar Panels</h2>
				 
              </div>
            </div>

            <div
              className="bx-item-pro h-auto"
              id="showb"
              onClick={() => setToggle("showb")}
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solutions"
                  className="w-16 mx-auto -mt-12"
                  width={64}
                  height={64}
                />
                <h2>Solar Inverters</h2>
				 
              </div>
            </div>

            <div
              className="bx-item-pro h-auto"
              id="showc"
              onClick={() => setToggle("showc")}
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solutions"
                  className="w-16 mx-auto -mt-12"
                  width={64}
                  height={64}
                />
                <h2 className="">Solar Batteries</h2>
				 
              </div>
            </div>

            <div
              className="bx-item-pro h-auto"
              id="showd"
              onClick={() => setToggle("showd")}
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solutions"
                  className="w-16 mx-auto -mt-12"
                  width={64}
                  height={64}
                />
                <h2>Solar Accessories</h2>
			 
              </div>
            </div>

             
          </div>

          {showa && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4     gap-4 mt-5 featured-showrooms">
              {content.products.map((item,index) => {
                if (item.category.includes("panels")) {
                  return (
                    <Link href={"products/" + item.slug} className="dealer-item-b" key={item.slug+"_"+index}>
                      <div className="img-cnt">
                        <img
                          src={item.featured_img}
						  alt="Baytours limo"
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="px-4 py-2 space-y-2 pb-3">
                        <h2 title={item.title}>{item.title}</h2>
                        {/* <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.seating}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.minhour}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.gratuity}
                        </p> */}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          )}

          {showb && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4     gap-4 mt-5 featured-showrooms">
              {content.products.map((item,index) => {
                if (item.category.includes("inverters")) {
                  return (
                    <Link href={"products/" + item.slug} className="dealer-item-b" key={item.slug+"_"+index}>
                      <div className="img-cnt">
                        <img
                          src={item.featured_img}
						  alt="Baytours limo"
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="px-4 py-2 space-y-2 pb-3">
                        <h2 title={item.title}>{item.title}</h2>
                        {/* <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.seating}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.minhour}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.gratuity}
                        </p> */}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          )}

          {showc && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4     gap-4 mt-5 featured-showrooms">
              {content.products.map((item,index) => {
                if (item.category.includes("batteries")) {
                  return (
                    <Link href={"products/" + item.slug} className="dealer-item-b" key={item.slug+"_"+index}>
                      <div className="img-cnt">
                        <img
                          src={item.featured_img}
						  alt="Baytours limo"
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="px-4 py-2 space-y-2 pb-3">
                        <h2 title={item.title}>{item.title}</h2>
                        {/* <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.seating}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.minhour}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.gratuity}
                        </p> */}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          )}

          {showd && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4     gap-4 mt-5 featured-showrooms">
              {content.products.map((item,index) => {
                if (item.category.includes("mis")) {
                  return (
                    <Link href={"products/" + item.slug} className="dealer-item-b" key={item.slug+"_"+index}>
                      <div className="img-cnt">
                        <img
                          src={item.featured_img}
                          className="w-full h-auto"
                        />
                      </div>

                      <div className="px-4 py-2 space-y-2 pb-3">
                        <h2 title={item.title}>{item.title}</h2>
                        {/* <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.seating}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.minhour}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 inline -mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.gratuity}
                        </p> */}
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          )}

          
        </div>
      </section>
    </>
  );
}
