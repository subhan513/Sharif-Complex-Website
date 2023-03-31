import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from "@heroicons/react/outline";

  
const faqs = [

  {
    question: "What are solar panels?",
    answer: "Solar panels are devices that convert sunlight into electricity. They are made up of a collection of solar cells that capture the energy from the sun and convert it into usable electricity. The cells are typically made of a material called silicon, which is able to absorb sunlight and release electrons. When many cells are connected together, they form a solar panel, which can generate enough electricity to power a home or business. Solar panels are a renewable and sustainable source of energy, as they do not rely on fossil fuels and do not produce harmful emissions.",
  },
  {
    question: "What are the benefits of installing solar panels?",
    answer: "There are several benefits to installing solar panels, including: Reduced energy bills: Solar panels can significantly reduce your electricity bills by generating your own electricity from the sun. Environmental benefits: Solar panels are a clean and renewable source of energy, which means that they do not produce greenhouse gas emissions that contribute to climate change. Increased property value: Installing solar panels can increase the value of your property, making it more attractive to potential buyers. Energy independence: By generating your own electricity, you become less reliant on the grid and are able to control your own energy supply. Government incentives: Many governments offer incentives such as tax credits or rebates to encourage the installation of solar panels. Long lifespan: Solar panels have a lifespan of up to 25 years, which means that they provide a long-term investment in sustainable energy. Overall, installing solar panels is a great way to save money on energy bills, reduce your environmental impact, and increase the value of your property.",
  },
  {
    question: "How much will it cost to install solar panels on my home or business?",
    answer: "The cost of installing solar panels on your home or business will depend on several factors, including the size of the system, the type of panels you choose, and the location of your property. It's important to note that while the initial cost may seem high, solar panels can provide significant savings on your energy bills over time, and the long lifespan of solar panels means that they are a good long-term investment. Additionally, many governments offer incentives such as tax credits or rebates that can help reduce the upfront costs of installing solar panels.",
  },

  {
    question: "How long does it take to install a solar panel system?",
    answer: "The time it takes to install a solar panel system can vary, but typically takes a few days to a few weeks. The process involves site assessment, design and permits, installation, inspection, and connection to the grid.",
  },
   
  {
    question: "What is the lifespan of solar panels? ",
    answer: "The lifespan of solar panels can vary depending on the quality of the materials, the manufacturer, and the conditions of the installation site. However, most solar panels have a lifespan of around 25-30 years. Some manufacturers offer warranties for up to 25 years, guaranteeing that the panels will produce a certain amount of electricity during that time. With proper maintenance and care, solar panels can continue to generate electricity for many years beyond their expected lifespan. This means that solar panels provide a long-term investment in renewable energy and can help reduce energy costs for many years to come.",
  },
  {
    question: "How much money can I save on my energy bills with solar panels?",
    answer: "The amount of money you can save on your energy bills with solar panels will depend on several factors, including the size of the system, the amount of sunlight your property receives, and your energy consumption habits. It's important to note that the savings from solar panels are typically realized over a period of several years, as the initial cost of installing the system can be high. However, with the declining cost of solar panels and available government incentives, the payback period for solar panel installations is becoming shorter, making it a more financially viable option for many homeowners and businesses.",
  },
  {
    question: "Will my solar panel system work during a power outage?",
    answer: "If you have a grid-tied solar panel system without battery backup, your system will not work during a power outage. This is because grid-tied systems are designed to automatically shut down during a power outage to protect utility workers who may be working on the electrical grid. However, if you have a grid-tied solar panel system with battery backup or a stand-alone solar panel system, your system can continue to provide power during a power outage. Battery backup systems allow you to store excess power generated by your solar panels for use when the sun is not shining or during a power outage. Stand-alone systems are not connected to the electrical grid, so they can continue to provide power during a power outage. It's important to note that even if you have a battery backup or stand-alone system, the amount of power you can generate during a power outage may be limited depending on the size of your system and the amount of sunlight available. Additionally, it's important to have your system installed by a licensed professional and to follow all safety guidelines to ensure that your system operates safely during a power outage.",
  },

  {
	question: "What warranties come with the solar panel system?",
    answer: "The warranties that come with a solar panel system can vary depending on the manufacturer and installer, but generally, there are three types of warranties: Equipment warranty: This warranty covers the solar panels and other equipment used in the installation, such as the inverter, for a certain period of time, usually between 10 to 25 years. If any of the equipment fails or malfunctions during the warranty period, the manufacturer will replace or repair the equipment at no cost to the owner. Performance warranty: This warranty guarantees the performance of the solar panels, ensuring that they will continue to produce a certain amount of electricity over time, usually for a period of 25 years. If the panels fail to meet the stated performance levels during the warranty period, the manufacturer will compensate the owner for the loss of electricity production. Workmanship warranty: This warranty covers the installation work done by the installer, typically for a period of 1 to 10 years. If any issues arise due to faulty installation, such as leaks or damage to the roof, the installer will repair or replace the affected areas at no cost to the owner. It's important to read and understand the warranties that come with your solar panel system and to ensure that the warranties are provided by reputable and reliable manufacturers and installers. Having a comprehensive warranty can provide peace of mind and protect your investment in renewable energy.",
  },
   
];
 
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Faqs() {
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
        <title>FAQs | Solnyne Solutions</title>
        <meta
          name="title"
          content="FAQs | Solnyne Solutions"
        />
        <meta
          name="description"
          content="Have questions about solar solutions? Check out our FAQs page for answers! Solnyne is a leading provider of solar solutions in Pakistan."
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
          content="FAQs | Solnyne Solutions"
        />
        <meta
          name="twitter:description"
          content="Have questions about solar solutions? Check out our FAQs page for answers! Solnyne is a leading provider of solar solutions in Pakistan."
        />
        <meta
          name="twitter:image:src"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="About Us | Solnyne Solutions"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Have questions about solar solutions? Check out our FAQs page for answers! Solnyne is a leading provider of solar solutions in Pakistan.s"
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <link rel="canonical" href="https://solnyne.com/faqs" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Frequently Asked Questions"
        pageImg="hdr-1.jpg"
      />

      <section className="main-sec pb-16 relative">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5 pb-24  mb-4 border border-slate-200 border-b-0 rounded-b-none "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <div className="bg-transparent w-full mx-auto">
                <dl>
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-3">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button
                              
                              className="w-full sm:px-6 sm:py-3 px-3 py-2  border border-slate-300
      bg-gradient-to-br from-white via-slate-100 to-zinc-200 text-gray-700 rounded-lg text-base sm:text-lg font-medium shadow 
      text-left  flex justify-between items-start "
                            >
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 h-7 flex items-center text-amber-500">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel
                            as="dd"
                            className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                          >
                            <p className="text-base text-gray-800">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
          
        </div>

        <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div> 
      </section>
       
     
    </>
  );
}
