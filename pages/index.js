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
          Spica International School Gujranwala - Spica
        </title>
        <meta
          name="title"
          content="Spica International School Gujranwala - Spica"
        />
        <meta
          name="description"
          content="Discover Spica International School Gujranwala - a leading institution committed to providing quality education, global exposure, and holistic development."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />

        <meta
          name="twitter:title"
          content="Spica International School Gujranwala - Spica"
        />
        <meta
          name="twitter:description"
          content="Discover Spica International School Gujranwala - a leading institution committed to providing quality education, global exposure, and holistic development."
        />
        <meta
          name="twitter:image:src"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Spica International School Gujranwala - Spica"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Discover Spica International School Gujranwala - a leading institution committed to providing quality education, global exposure, and holistic development."
        />
        <meta property="og:locale" content="en-us" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />

        <link rel="canonical" href="https://spica.com.pk" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <header className="homeHeader bg-slate-800">
        <div className="homehdrtxt z-40">
          <div>
            
            <h1>
                Excellence In Education
            </h1>
            <h2>Our mission is to inspire students not only intellectually but also Spirtually</h2>

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="#"
                //href="/solutions"
                className="text-white border-2 hover:bg-black-500   rounded-full px-5 py-2 bg-[#b31507] border-[#f00707]   hover:text-white text-lg transition duration-	300 font-medium"
              >
                APPLY FOR ADMISSION
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
          <h2>WHY SPICA INTERNATIONAL ?</h2>
          <p>
          Building a Strong Foundation for Lifelong Learning: Early Learning Domains
          </p>
        </div>
        <div className="container mx-auto px-4 mt-10 ">
          <ul role="list" className="grid grid-cols-2 gap-6 gap-y-10 sm:grid-cols-3 md:grid-cols-6 "
          >
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
               <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>

             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8 font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Approaches to Learning</h2>
             {/*<p>Each child learns in different ways.</p>*/}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
</svg>

 </div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Language and Literacy</h2>
             {/*<p>The early years are critical for literacy development.</p> */}
            </li>
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>

</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Social Studies</h2>
             {/* <p>Our social studies domain helps children understand themselves.</p> */}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
</svg>

</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Mathematics</h2>
            {/* <p>Early experiences with math help children develop reasoning skills</p> */}
            </li>
             
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>

</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Science & Engineering</h2>
              {/*<p>Children are natural scientists.</p> */}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#c44545] p-5 flex justify-center items-center">
               <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#c44545]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

</div>     
             <h2 className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium" style={{textShadow:"0 2px 2px rgba(0,0,0,.4)"}}>Physical Development</h2>
             {/*<p>Active children become active adults.</p> */}
            </li> 
          </ul>
        </div>
      </section>

 

     <section className="py-10 ">
        <div className="sec-heading">
          <h2>OUR PROGRAMS</h2>
          <p>
          Discovering the Wonders of Learning with Spica International's Four-Star Programs
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4  text-center">
            <Link
              href="#"
              //href="/products"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fc0d21] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/pre-nursery.png"
                  alt="Spica International School"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />

                <h2>Pre Nursery</h2>
                <p>
                  For Age 1.5 Years to 2.5 Years - From Toddling to Thriving: 
                  Nurturing Young Minds at Every Step in Life
                </p>

                <Image
                  src="/images/pre-nursery-child.jpg"
                  alt="Pre Nursery Chlidren Photo"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="#"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fc0d21] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/nursery.png"
                  alt="Spica International School"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Nursery</h2>
                <p>
                For Age 2.5 Years to 3 Years - Exploring the World with Curious Minds: 
                Where Learning Comes to Life
                </p>
                <Image
                  src="/images/nursery-child.jpg"
                  alt="Nursery Childs Photo"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="#"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fc0d21] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/kindergarten-1.png"
                  alt="Spica International School"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Kindergarten I</h2>
                <p>
                For Age 3 Years to 4 Years - Growing Bright Minds: 
                Where Imagination and Learning Take Flight
                </p>
                <Image
                  src="/images/kindergarten-child.jpg"
                  alt="Solar Batteries"
                  className="rounded-lg mt-3"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            <Link
              href="#"
              className="bx-item-pro h-auto border-t-[3px] border-t-[#fc0d21] "
            >
              <div className="flex flex-col w-full">
                <Image
                  src="/images/kindergarten-2.png"
                  alt="Spica International School"
                  className="w-16 mx-auto"
                  width={64}
                  height={75}
                />
                <h2>Kindergarten II</h2>
                <p>
                For Age 4 Years to 5 Years - Empowering Young Learners for a 
                Lifetime of Success: Where Education Meets Inspiration
                </p>
                <Image
                  src="/images/kindergarten-child-2.jpg"
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

      <section className="py-10 pt-16 ">
        <div className="sec-heading">
          <h2>Where Children and Parents Feel Confident</h2>
          <p>
          Our one line mission is Active minds, Healthy Bodies & Happy Hearts.
          </p>
        </div>
        <div className="container mx-auto px-4 ">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "
          >
            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/admission.jpg')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-red-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                ADMISSIONS
                </h2>
                <p className="text-gray-100 text-sm">
                Learn about admission requirements, how to apply, and the next steps once you’ve applied at SPICA.
                </p>
              </div></div>
            </li>

            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/virtual.jpg')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-red-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
               
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                VIRTUAL 360° TOUR
                </h2>
                <p className="text-gray-100 text-sm">
                Step into our school without leaving your seat! Join our virtual tour and discover our campus from the comfort of your own device.
                </p>
              </div></div>
            </li>

            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/scholorships.jpg')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-red-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                Scholarships
                </h2>
                <p className="text-gray-100 text-sm">
                SPICA offers a range of different scholarship programmes for national & international students to help cover tuition fees.
                </p>
              </div></div>
            </li>
            
            <li className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"  style={{
          backgroundImage: "url('./images/innovative-learning.jpg')",
        }}>
              <div className=" rounded-md h-full relative bg-gradient-to-t from-red-500 via-transparent
              "><div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                
                <h2 className="mt-5 text-gray-100 text-lg sm:text-xl font-bold">
                Innovative Learning
                </h2>
                <p className="text-gray-100 text-sm">
                In association with ROBOTMEA, SPICA offers a dynamic robotics programme to its primary level students.
                </p>
              </div></div>
            </li>
             
          </ul>
        </div>
      </section>

      {/*<section
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
              complete range of Spica International School for
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
              </section>*/}
      <div
        style={{
          backgroundImage: "url('./images/beams-templates.png')",
        }}
      >
        <section className="py-10 ">
          <div className="sec-heading">
            <h2>News & Updates</h2>
            <p>Stay up-to-date with our School community and all the exciting news and updates!</p>
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
                View all News & Updates
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
                src="/images/spica-logo2.png"
                className="w-40 md:w-52 h-auto"
                alt="Spica International School"
                width={208}
                height={140}
              ></Image>
            </div>
            <h2>
            It's a bird! It's a plane! 
              <span className="marksvg">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative block md:inline"> It's your three-year-old! </span>
              </span>
            </h2>

            <p>

            To your presschooler, nothing is impossible! They are opening up their world and developing
            special friendship. Together, they are learning new words and forming new ideas every day.
 
            </p>
 

            <div className="social">
              <a
                href="https://wa.me/+9231234567"
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

              <a href="tel:+92321234567" title="Call" className="tooltip  hover:-translate-y-2 duration-300 transition">
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
