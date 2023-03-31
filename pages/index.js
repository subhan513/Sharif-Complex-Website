import Head from "next/head";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay } from "swiper";
import content from "./blogposts.json";
import solution from "./solutions.json";
import "swiper/css";
 

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
   
];

const faqsb = [
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
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=5, shrink-to-fit=no"
          name="viewport"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="Getsol Inc." />
        <title>
          Solar Energy Solutions Gujranwala - Solnyne
        </title>
        <meta
          name="title"
          content="Solar Energy Solutions Gujranwala - Solnyne"
        />
        <meta
          name="description"
          content="We Provide On-Grid, Off-Grid, Hybrid &amp; Agricultural Solar Installation Solutions on a very reasonable budget. Get a Quote now: (055) 3828617."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />

        <meta
          name="twitter:title"
          content="Solar Energy Solutions Gujranwala - Solnyne"
        />
        <meta
          name="twitter:description"
          content="We Provide On-Grid, Off-Grid, Hybrid &amp; Agricultural Solar Installation Solutions on a very reasonable budget. Get a Quote now: (055) 3828617."
        />
        <meta
          name="twitter:image:src"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Solar Energy Solutions Gujranwala - Solnyne"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="We Provide On-Grid, Off-Grid, Hybrid &amp; Agricultural Solar Installation Solutions on a very reasonable budget. Get a Quote now: (055) 3828617."
        />
        <meta property="og:locale" content="en-us" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />

        <link rel="canonical" href="https://solnyne.com" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <header className="homeHeader bg-slate-800">
        <div className="homehdrtxt z-40">
          <div>
            
            <h1>
                Excellence In Education
            </h1>
            <h2>Our mission is to inspire students not only intellectually but also Spiritually</h2>

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="/solutions"
                className="border-2 hover:bg-amber-300   rounded-full px-5 py-2 bg-[#b31507] border-[#f00707]   hover:text-black text-lg transition duration-	300 font-medium"
              >
                Get Admission
              </Link>
            </div>
          </div>
        </div>

        
          
            <video
              autoPlay
              className="mySwiper absolute inset-0 h-full w-full object-cover"
              controlsList="nodownload"
              loop={true}
              muted=""
              playsInline=""               
              src="/images/slides/spica-video.mp4"
            ></video>
         
          
        
        <div className="w-full h-full bg-gradient-to-b from-slate-800 via-transparent z-20  absolute"></div>
      </header>


      <section className="py-0 pt-16 ">
        <div className="sec-heading">
          <h2>WHY SPICA INTERNATIONAL</h2>
          <p>
          Powering a sustainable future with limitless solar energy
          </p>
        </div>
        <div className="container mx-auto px-4 mt-10 ">
          <ul role="list" className="grid grid-cols-2 gap-6 gap-y-10 sm:grid-cols-3 md:grid-cols-6 "
          >
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-[#4589c4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
</svg> </div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8 font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}> A cost-effective investment choice </h2>
                 
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#459ec4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
</svg>
 </div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Lower your carbon footprint</h2>
                 
            </li>
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#4589c4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
</svg>
</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Escape from the greenhouse effect</h2>
                 
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#4589c4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Enhanced grid security</h2>
                 
            </li>
             
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#4589c4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Everlasting solar power</h2>
                 
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#293fa2] to-[#4589c4] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#4589c4] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#4589c4]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Reduce your electricity expenses</h2>
                 
            </li> 
          </ul>
        </div>
      </section>

 

      <section className="py-10 pt-16 ">
        <div className="sec-heading">
          <h2>Our Services</h2>
          <p>
          We handle everything from site assessment and system design to installation and ongoing maintenance.
          </p>
        </div>
        <div className="container mx-auto px-4 ">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "
          >
            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/solnyne-installation.png')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-amber-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                  Installation
                </h2>
                <p className="text-gray-100 text-sm">
                  Trust us to install your solar panels efficiently and
                  effectively, ensuring maximum energy output for your home or
                  business.
                </p>
              </div></div>
            </li>

            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/solnyne-maintenance.jpg')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-amber-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
               
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                Maintenance
                </h2>
                <p className="text-gray-100 text-sm">
                Keep your solar panels performing at their best with our comprehensive maintenance service, designed to prolong their lifespan and optimize energy efficiency.
                </p>
              </div></div>
            </li>

            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/solnyne-consultation.png')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-amber-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                Project Consultation
                </h2>
                <p className="text-gray-100 text-sm">
                Get expert guidance on your solar project from start to finish with our personalized consultation service, tailored to your unique energy goals and budget.
                </p>
              </div></div>
            </li>
            
            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/solnyne-advisory.png')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-amber-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                Advisory
                </h2>
                <p className="text-gray-100 text-sm">
                Make informed decisions about your solar project with our
                  reliable project advisory service, providing you with the
                  latest industry insights and expertise.
                </p>
              </div></div>
            </li>
             
          </ul>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>OUR PRODUCTS</h2>
          <p>
            Discover our wide range of high-quality solar products, designed to
            meet all your energy needs and deliver long-lasting performance.
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link
              href="/products"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fcbc0d] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solution"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />

                <h2>Solar Panels</h2>
                <p>
                  Power your home or business with ease using our reliable and
                  high-performance solar panels
                </p>

                <Image
                  src="/images/solnyne-products-solar-panels.png"
                  alt="Solar Panels"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/products"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fcbc0d] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solution"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Solar Inverters</h2>
                <p>
                  Maximize your solar energy output with our advanced solar
                  inverters
                </p>
                <Image
                  src="/images/solnyne-products-solar-inverters.png"
                  alt="Solar Inverters"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/products"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fcbc0d] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solution"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Solar Batteries</h2>
                <p>
                  Experience uninterrupted power supply with our high-capacity
                  solar batteries
                </p>
                <Image
                  src="/images/solnyne-products-solar-batteries.png"
                  alt="Solar Batteries"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="/products"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fcbc0d] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/solnyne-icon.png"
                  alt="Solnyne Solution"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Solar Accessories</h2>
                <p>
                  Complete your solar setup with our range of premium solar
                  accessories
                </p>
                <Image
                  src="/images/solnyne-products-solar-accessories.png"
                  alt="Solar Accessories"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="bg-no-repeat bg-center bg-cover bg-fixed "
        style={{
          backgroundImage: "url('./images/solnyne_bg-0.jpeg')",
        }}
      >
        <div className="bg-cyan-800 w-full h-full bg-opacity-70 py-10 ">
          <div className="sec-heading">
            <h2 style={{ color: "white" }}>Our Solutions</h2>
            <p style={{ color: "white" }}>
              We offer a
              complete range of solar energy solutions for
              your home or business needs.
            </p>
          </div>

          <div className="container mx-auto px-4 ">
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

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="/solutions"
                className="border rounded-full px-5 text-lg text-white py-2 hover:bg-amber-400 hover:border-amber-400   hover:text-black transition duration-300 font-medium"
              >
                View all Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: "url('./images/beams-templates.png')",
        }}
      >
        <section className="py-10 ">
          <div className="sec-heading">
            <h2>Blog & Activities</h2>
            <p>Shining light on solar panels - Read our blog and stay up-to-date</p>
          </div>
          <div className="container mx-auto px-4 ">
            <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
              {content.posts.slice(0, 4).map((post, index) => {
                if (post.category != "attractions") {
                  return (
                    <div
                      key={post.slug + "_" + index}
                      className="flex flex-col rounded-lg shadow-lg overflow-hidden group"
                    >
                       <div className="flex-shrink-0">
                        <Image
                          className="h-48 w-full object-cover"
                          width={400}
                          height={300}
                          src={post.featured_img}
                          alt="Najam Awan Image"
                        />
                      </div>
                      <div className="flex-1 bg-white border-b p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-amber-500 capitalize">
                            {post.category}
                          </p>
                          <a href={"blog/" + post.slug} className="block mt-2">
                            <p className="text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                              {post.title}
                            </p>
                          </a>
                          <p className="mt-3 text-sm sm:text-base text-gray-500">
                            {post.shortdescription}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="ml-0">
                            <p className="text-sm font-medium text-gray-900">
                              {post.author}
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden="true">&middot;</span>
                              <span>{post.readingTime} read</span>
                            </div>
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  );
                }
              })}
            </div>

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="/blog"
                className="border border-amber-500 text-slate-700 text-lg  rounded-full px-5 py-2 hover:bg-amber-400 hover:border-amber-400  hover:text-black transition duration-300 font-medium"
              >
                View all Blog & Activities
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-5 pb-10 ">
          <div className="sec-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to commonly asked inquiries regarding solar solutions</p>
          </div>
          <div className="container mx-auto px-4 ">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-8">
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
              <div className="bg-transparent w-full mx-auto">
                <dl>
                  {faqsb.map((faq) => (
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

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="/faqs"
                className="border border-amber-500 text-slate-700 text-lg  rounded-full px-5 py-2 hover:bg-amber-400 hover:border-amber-400  hover:text-black transition duration-300 font-medium"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </section>

        <section   className="py-10 pt-0 relative">
          <div className="container mx-auto px-5 sec-cta">
            <div className="logo-badge">
              <Image
                src="/images/solnyne-logo.png"
                className="w-40 md:w-52 h-auto"
                alt="Solnyne Solutions"
                width={208}
                height={140}
              ></Image>
            </div>
            <h2>
            Let's discuss 
              <span className="marksvg">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative block md:inline"> the details of your solar project! </span>
              </span>
            </h2>

            <p>

            Our team of experts is ready to answer any questions you may have and help you find the best solution for your needs. Contact us today to schedule a consultation.
 
            </p>
 

            <div className="social">
              <a
                href="https://wa.me/+923000601194"
                title="WhatsApp"
                className="tooltip hover:-translate-y-2 duration-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  className="w-8 h-auto fill-green-500"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7272 24.3561C10.5753 24.3561 8.55361 23.8061 6.79472 22.8408L0 25L2.215 18.4661C1.09778 16.6308 0.454167 14.4786 0.454167 12.1781C0.454167 5.45222 5.94889 0 12.7275 0C19.5053 0 25 5.45222 25 12.1781C25 18.9039 19.5056 24.3561 12.7272 24.3561ZM12.7272 1.93944C7.03722 1.93944 2.40889 6.5325 2.40889 12.1781C2.40889 14.4183 3.13917 16.4931 4.37417 18.1811L3.08528 21.9833L7.05028 20.7231C8.67972 21.7928 10.6314 22.4167 12.7272 22.4167C18.4164 22.4167 23.0456 17.8239 23.0456 12.1783C23.0456 6.53278 18.4164 1.93944 12.7272 1.93944ZM18.9244 14.9828C18.8489 14.8586 18.6483 14.7836 18.3481 14.6344C18.0469 14.4853 16.5675 13.7628 16.2922 13.6636C16.0161 13.5642 15.8153 13.5139 15.615 13.8128C15.4147 14.1117 14.8381 14.7836 14.6622 14.9828C14.4867 15.1822 14.3114 15.2072 14.0106 15.0578C13.71 14.9086 12.7406 14.5933 11.5911 13.5764C10.6969 12.7853 10.0931 11.8086 9.91778 11.5094C9.74222 11.2108 9.89917 11.0494 10.0497 10.9008C10.185 10.7669 10.3506 10.5522 10.5011 10.3781C10.6517 10.2036 10.7017 10.0794 10.8017 9.88C10.9022 9.68083 10.8519 9.50667 10.7767 9.35694C10.7014 9.20778 10.0994 7.73889 9.84889 7.14111C9.59833 6.54389 9.34806 6.64333 9.17222 6.64333C8.99667 6.64333 8.79611 6.61833 8.59556 6.61833C8.395 6.61833 8.06889 6.69306 7.79306 6.99167C7.5175 7.29056 6.74056 8.01278 6.74056 9.48139C6.74056 10.9503 7.81806 12.3694 7.96889 12.5683C8.11917 12.7672 10.0494 15.8794 13.1075 17.0747C16.1667 18.2697 16.1667 17.8711 16.7183 17.8214C17.2692 17.7717 18.4975 17.0994 18.7489 16.4025C18.9992 15.705 18.9992 15.1072 18.9244 14.9828Z"
                  ></path>
                </svg>
              </a>

              <a href="tel:+923041111908" title="Call" className="tooltip  hover:-translate-y-2 duration-300 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-amber-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div> 
        </section>

                {/* <div className="grid grid-cols-2 mx-auto items-center md:grid-cols-4 container xl:grid-cols-4 2xl:grid-cols-5  gap-4 mt-5 featured-showrooms pb-10 hidden">
                  
                <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                 
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>
                  <div className="dealer-item">
                    <div className="img-cnt">
                      <img src="./images/solnyne-longi.png" className="w-48 h-auto" />
                    </div>                 
                  </div>



                </div> */}




      </div>
    </div>
  );
}
