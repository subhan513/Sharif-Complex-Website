import Head from "next/head";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  AcademicCapIcon,
  CalculatorIcon,
  BeakerIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import content from "./blogposts.json";
import solution from "./solutions.json";
import "swiper/css";

const faqs = [
  {
    question: "What makes Spica International?",
    answer: "Our school is a project owned by the Mr. Muhammad Shahid Ansari education company called Spica International School Gujranwala Campus. We offer an international curriculum and deliver it through authentic learning and assessment. ",
  },
  {
    question: "What grades are being offered as of now?",
    answer: "We are offering classes from Playgroup to Grade VII at the moment, preparing students to lead the world.",
  },
  {
    question: "What are the school’s long term plans?",
    answer: "It is our ambition to provide quality education to the student’s and open further schools across Pakistan.",
  },
  {
    question: "What is the school admission criterion?",
    answer: "Visit the school at your appointed time to understand the school culture, philosophy and teaching dynamics. An entrance test and interview to assess the child’s learning capacity and development needs. Submission of duly filled Spica International School admission form, along with the copies of required documents. Submission of school admission fee, security fee and an advance tuition fee.",
  },
];

const faqsb = [
  
  {
    question: "When does an academic session start? ",
    answer: "A new term for an academic year commences in February and ends in March.",
  },
  {
    question: "What is the fee structure?",
    answer: "Please visit the school office to enquire about the fee and admission for your child.",
  },
  
  {
    question: "How many teachers are there in one class of the Preschool Programme?",
      answer: "There is usually one lead teacher and one or more assistant teachers in a preschool classroom. The exact ratio of teachers to children can also vary based on state or local regulations and the age range of the children in the classroom.",
    },
    {
      question: "How will I know what’s happening in my child’s classroom and in the school?",
      answer: "We value timely communication with parents and how this effective partnership benefits our students. Spica International School uses 21st Century communication tool called ClassDojo (interactive mobile & computer application) to keep parents updated. The software, Face book page, instagram and website gives parents access to learning activities, photographs, their children’s performance and school based information. Teachers post daily activities  to parents via email and ClassDojo. The application also has a messaging portal that parents can use to keep regular contact with the school. Apart from this, formal written reports are provided to parents twice each academic year and also on daily basis. ",
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
        <title>Spica International School Gujranwala - Spica</title>
        <meta
          name="title"
          content="Spica International School Gujranwala - Spica"
        />
        <meta
          name="description"
          content="Discover Spica International School Gujranwala - a leading institution committed to providing quality education, global exposure, and holistic development."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="A leading institution committed to providing quality education, global exposure, and holistic development." />

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
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Spica International School Gujranwala - Spica"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Discover Spica International School Gujranwala - a leading institution committed to providing quality education, global exposure, and holistic development."
        />
        <meta property="og:locale" content="en-us" />
        <meta
          itemProp="image"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />

        <link rel="canonical" href="https://spica.com.pk/" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <header className="homeHeader bg-slate-800">
        <div className="homehdrtxt z-40">
          <div>
            
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-white to-slate-50">
              Excellence In Education
            </h1>
            <h2 style={{textShadow: "1px 2px 2px rgba(0,0,0,.4)"}}> 
              Our mission is to inspire students not only intellectually but
              also Spiritually
            </h2>

            <div className=" flex justify-center items-center mt-10">
              <Link
                href="online-admission"
                //href="/solutions"
                className="text-white border-2 hover:bg-black-500   rounded-full px-5 py-2 bg-gradient-to-tr from-[#b31507] via-[#fe5445] to-[#b31507] border-[#f00707]   hover:text-white text-lg transition duration-	300 font-medium"
              >
                APPLY FOR ADMISSION
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-gradient-to-b from-slate-800 via-transparent z-20  absolute"></div>
        {/* <Image
              src="/images/spica-home-banner.jpg"
              alt="Spica International School"
              title="SPICA"
              fill="true"
              className="bg-cover"
            ></Image> */}
        <iframe src="/tour/index.html" className="w-full h-full "></iframe>
        <div className="w-full h-full bg-gradient-to-b from-slate-800 via-transparent z-20  absolute"></div>      
        <div className="w-full h-full bg-gradient-to-t from-red-800 via-transparent z-20  absolute"></div>
      </header>

      <section className="py-0 pt-16 ">
        <div className="sec-heading">
          <h2>WHY SPICA INTERNATIONAL ?</h2>
          <p>
            Building a Strong Foundation for Lifelong Learning: Early Learning
            Domains
          </p>
        </div>
        <div className="container mx-auto px-4 mt-10 ">
          <ul
            role="list"
            className="grid grid-cols-2 gap-6 gap-y-10 sm:grid-cols-3 md:grid-cols-6 "
          >
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <AcademicCapIcon
                  className="w-8 h-8 text-[#c44545]"
                  strokeWidth={1}
                />
              </div>

              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8 font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Approaches to Learning
              </h2>
              {/*<p>Each child learns in different ways.</p>*/}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#c44545]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              </div>
              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Language and Literacy
              </h2>
              {/*<p>The early years are critical for literacy development.</p> */}
            </li>
            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <UserGroupIcon
                  className="w-8 h-8 text-[#c44545]"
                  strokeWidth={1.5}
                />
              </div>
              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Social Studies
              </h2>
              {/* <p>Our social studies domain helps children understand themselves.</p> */}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <CalculatorIcon
                  className="w-8 h-8 text-[#c44545]"
                  strokeWidth={1.5}
                />
              </div>
              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Mathematics
              </h2>
              {/* <p>Early experiences with math help children develop reasoning skills</p> */}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <BeakerIcon
                  className="w-8 h-8 text-[#c44545]"
                  strokeWidth={1.5}
                />
              </div>
              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Science & Engineering
              </h2>
              {/*<p>Children are natural scientists.</p> */}
            </li>

            <li className=" h-32 hover:-translate-y-2 duration-300 transition  text-center  rounded-lg shadow relative bg-gradient-to-br from-[#a2292b] to-[#f26666] p-5 flex justify-center items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-br from-white via-slate-50 to-slate-300 rounded-full border-2 border-[#c44545] shadow-sm absolute -mt-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#c44545]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </div>
              <h2
                className="text-white text-base sm:text-xl pt-4 md:pt-8  font-medium"
                style={{ textShadow: "0 2px 2px rgba(0,0,0,.4)" }}
              >
                Physical Development
              </h2>
              {/*<p>Active children become active adults.</p> */}
            </li>
          </ul>
        </div>
      </section>

      <section className="py-10 ">
        <div className="sec-heading">
          <h2>OUR PROGRAMS</h2>
          <p>
            Discovering the Wonders of Learning with Spica International's
            Four-Star Programs
          </p>
        </div>

        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  text-center mx-auto">
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

                <h2>Pre School</h2>
                <p>
                Early Learning Adventures: Our Pre-School Program for Playgroup, Nursery, and Kindergarten
                </p>

                <Image
                  src="/images/pre-nursery-child.jpg"
                  alt="Pre Nursery Chlidren Photo"
                  className="rounded-lg w-full rounded-t-none mt-3"
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
                  className="w-16 mx-auto "
                  width={64}
                  height={75}
                />
                <h2>Primary School</h2>
                <p>
                Building a Strong Foundation: Our Primary Schooling Program for Grades I to Grade V for your child
                </p>
                <Image
                  src="/images/nursery-child.jpg"
                  alt="Nursery Childs Photo"
                  className="rounded-lg mt-3 rounded-t-none w-full"
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
                  className="w-16 mx-auto w-full"
                  width={64}
                  height={75}
                />
                <h2>Middle School</h2>
                <p>
                Our Comprehensive Schooling Program for Grades VI to VIII, Designed to Empower and Inspire Young Minds
                </p>
                <Image
                  src="/images/kindergarten-child.jpg"
                  alt="Solar Batteries"
                  className="rounded-lg mt-3 rounded-t-none w-full"
                  width={400}
                  height={200}
                />
              </div>
            </Link>

            {/* <Link
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
                  className="rounded-lg mt-3 rounded-t-none "
                  width={400}
                  height={200}
                />
              </div>
            </Link> */}
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
            <li
              className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"
              style={{
                backgroundImage: "url('./images/gallery/10.webp')",
              }}
            >
              <div
                className=" rounded-md h-full relative bg-gradient-to-t from-red-700 via-transparent
              "
              >
                <div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                  <h2 className="mt-5 text-white text-lg sm:text-xl font-bold uppercase">
                    ADMISSIONS
                  </h2>
                  <p className="text-gray-100 text-sm">
                    Learn about admission requirements, how to apply, and the
                    next steps once you’ve applied at SPICA.
                  </p>
                </div>
              </div>
            </li>
           
             <li
              className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"
              style={{
                backgroundImage: "url('./images/gallery/3.webp')",
              }}
            >
             
                  <div
                 className=" rounded-md h-full relative bg-gradient-to-t from-red-700 via-transparent"
                  >
                 <div className="flex-1 flex flex-col p-8 bottom-0 absolute">
               
                  <h2 className="mt-5 text-white text-lg sm:text-xl font-bold uppercase">
                    VIRTUAL 360° TOUR
                  </h2>
                 
                  <p className="text-gray-100 text-sm">
                    Step into our school without leaving your seat! Join our
                    virtual tour and discover our campus from the comfort of
                    your own device.
                  </p>
                  </div>
                  </div>
              
            </li>
             
            <li
              className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"
              style={{
                backgroundImage: "url('./images/gallery/8.webp')",
              }}
            >
              <div
                className=" rounded-md h-full relative bg-gradient-to-t from-red-700 via-transparent
              "
              >
                <div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                  <h2 className="mt-5 text-white text-lg sm:text-xl font-bold uppercase">
                    Scholarships
                  </h2>
                  <p className="text-gray-100 text-sm">
                    SPICA offers a range of different scholarship programmes for
                    national & international students to help cover tuition
                    fees.
                  </p>
                </div>
              </div>
            </li>

            <li
              className="col-span-1 h-80 hover:-translate-y-2 duration-300 transition  flex flex-col text-center bg-white bg-cover bg-no-repeat rounded-lg shadow divide-y divide-gray-200"
              style={{
                backgroundImage: "url('./images/gallery/16.jpg')",
              }}
            >
              <div
                className=" rounded-md h-full relative bg-gradient-to-t from-red-700 via-transparent
              "
              >
                <div className="flex-1 flex flex-col p-8 bottom-0 absolute">
                  <h2 className="mt-5 text-white text-lg sm:text-xl font-bold uppercase">
                    Innovative Learning
                  </h2>
                  <p className="text-gray-100 text-sm">
                    In association with ROBOTMEA, SPICA offers a dynamic
                    robotics programme to its primary level students.
                  </p>
                </div>
              </div>
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
                className="border rounded-full px-5 text-lg text-white py-2 hover:bg-red-400 hover:border-red-400   hover:text-black transition duration-300 font-medium"
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



{/* <!-- Founder Message Homepage 1 --> */}
<div class="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32 text-center md:text-left">
    <div
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <Image
              src="/images/chairman-spica-haji-muhammad-bashir-ansari-gujranwala.jpg"
              alt="Chairman Spica Haji Muhammad Bashir Ansari Gujranwala"
                width={445} height={591}
              
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            ></Image>
         
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
            Haji Muhammad Bashir Ansari (Late)
            </h2>
            <p class="mb-4 font-semibold">Founder @ Spica International</p>
            <p class="mb-6  ">
            Dear Students and Parents,
            </p>
            <p class="mb-6  ">
            Welcome to the family of Spica International School Gujranwala Campus! Thank you for trusting our school and admitting your child here. We place high value on our partnership with parents, families and community and we invite you to be an active part of our organization.
            </p>
            <p class="mb-6  ">
            We consider it an honour to work with your children every day and cherish your trust in us. We believe that each and every student has a gift to share with the world, and we are here to unlock their highest potential. We have high expectations of our students, and we have high expectations of ourselves to help them learn and grow into well-rounded citizens and critical thinkers. Spica International School aims to develop leadership skills, social and emotional skills and academic skills to prepare students for success not only in school but also in their future careers, relationships and life-long learning.
            </p>
            <p className="mb-6  ">
            We strongly believe in the importance of teachers, parents and administrators collaborating and communicating openly and frequently. We are in a process of continually improving the quality of tools of communication, including giving our parents access to an interactive website, facebook page,whatsapp groups and face to face interaction. You are encouraged to regularly check our early mentioned mediums and read about our exciting academic and co-curricular activities.
            </p>
            {/* <p className="mb-6  ">Best Regards,</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
{/* <!-- Founder Message Homepage 1 --> */}



{/* <!-- Principal Message Homepage 1 --> */}
<div class="container my-24 mx-auto md:px-6">
  {/* <!-- Section: Design Block --> */}
  <section class="mb-32 text-center md:text-left">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <div class="flex flex-wrap items-center">
        <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <Image
              src="/images/maliha-principal-spica-international-school-gujranwala.jpg"
              alt="Principal Spica International School"
                width={445} height={591}
              
              className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg border-solid border-4 border-white hover:border-dotted"
            ></Image>
      
         
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-2 text-3xl font-bold text-primary dark:text-primary-400">
            Ma'am Maliha Fatima
            </h2>
            <p class="mb-4 font-semibold">Principal @ Spica International</p>
            <p class="mb-6  ">
            As a proud Principal of this academically accomplished school with well-respected directors of providing exceptional educational outcomes and opportunities to our talented young students since March, 2023, I warmly welcome you to Spica International School Gujranwala Campus.
            </p>
            <p class="mb-6  ">
            Our aim is to create a supportive and inclusive environment where students from all socioeconomic strata are encouraged to explore their potential and achieve their personal best in all aspects of school life. Students are challenged and engaged through authentic learning opportunities that inspire them to develop creativity, confidence and resilience to become independent and ethical life-long learners.
            </p>
            <p class="mb-6  ">
            We offer a broad curriculum and a range of opportunities for all our girls to achieve excellence in academic, creative, social, cultural, sporting and community endeavours. We value collaborative learning, positive relationships and building capacity amongst our girls to effectively allow them to engage in the world of the future, where problem solving, evaluating, working in teams, communicating, creating and innovating are not only valued concepts, but expected skills, attributes and capabilities.
            </p>
            <p className="mb-6  ">
            We support the individual wellbeing of our students and provide a school environment that allows every child to thrive as they work towards achieving their personal best performance. We set high expectations for our students and work hard to safeguard positive emotions across our school community. We are partners in learning with our students and seek to deepen their knowledge, provide enriching and innovative learning experiences, while also gently urging our students out of their comfort zone to attempt new challenges. We value relationships and connections with the community. We encourage our students to develop respectful relationships with their peers, teachers and the broader community.
            </p>
            <p className="mb-6  ">
            We instill in our students a keen social conscience and the capacity to make ethical decisions. We work hard to develop and sustain productive partnerships and connections with our parents, local schools and businesses and leading tertiary institutions. We are proud to be a high performing school and aim to be the selective school of first choice for all families within our community.
            </p>
            <p className="mb-6  ">
            Our students graduate with the skills, mind sets and qualities that will best equip them for success in the world of the future. Our students are intelligent, resilient, creative, imaginative, disciplined, dedicated to life-long learning, respectful and ethical. They are the future leaders and role models of society.
            </p>
            <p className="mb-6  ">
            Welcome to the Family of Spica International School! We place high value on our partnership with parents, families and community and we invite you to be an active part of our organization.
            </p>
            {/* <p className="mb-6  ">Best Regards,</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
{/* <!-- Principal Message Homepage 1 --> */}



{/* Founder & Principal Messages
<div class="container my-24 mx-auto md:px-6 ">
  <section class="mb-32 text-center justify-center">
    <h2 class="mb-12 text-3xl font-bold">Founder's & Principal Messages</h2>

    <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12">
      <div class="mb-6 lg:mb-0">
        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="/images/chairman-spica-haji-muhammad-bashir-ansari-gujranwala.jpg" class="w-full rounded-t-lg" />
            <a href="/about">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">Haji Muhammad Bashir Ansari (Late)</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
              Founder @ Spica International
            </h6>
            
            <p>
            Welcome to the family of Spica International School Gujranwala Campus! Thank you for trusting our school and admitting your child here. We place high value on our partnership with parents, families and community and we invite you to be an active part of our organization.
            </p>
          </div>
        </div>
      </div>

     

      <div className="">
        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="/images/maliha-principal-spica-international-school-gujranwala.jpg" class="w-full rounded-t-lg" />
            <a href="/about">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg class="absolute left-0 bottom-0 text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="mb-2 text-lg font-bold">Ma'am Maliha Fatima</h5>
            <h6 class="mb-4 font-medium text-primary dark:text-primary-400">
            Principal @ Spica International
            </h6>
            
            <p>
            As a proud Principal of this academically accomplished school with well-respected directors of providing exceptional educational outcomes and opportunities to our talented young students since March, 2023, I warmly welcome you to Spica International School Gujranwala Campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div> */}


{/* 
<div class="container my-24 mx-auto md:px-6">

  <section class="mb-32 text-center">
    <h2 class="mb-12 text-3xl font-bold">Testimonials</h2>

    <div id="carouselExampleCaptions" class="relative" data-te-carousel-init data-te-carousel-slide>
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
          <img class="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).jpg" alt="avatar" />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Maria Kate</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Photographer
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                pulvinar. Sed semper ligula sed lorem tincidunt dignissim.
                Nam sed cursus lectus. Proin non rutrum magna. Proin
                gravida, justo et imperdiet tristique turpis nisi viverra.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item style="backface-visibility: hidden">
          <img class="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).jpg" alt="avatar" />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">John Doe</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Web Developer
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Maecenas auctor, quam eget tincidunt pretium, felis diam
                semper turpis, sed scelerisque diam libero facilisis libero.
                Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus
                metus quis, elementum nunc.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item style="backface-visibility: hidden">
          <img class="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg" alt="avatar" />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Anna Deynah</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                UX Designer
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                porta dui, sit amet rutrum enim massa in ante. Curabitur in
                justo at lorem laoreet ultricies. Nunc ligula felis,
                sagittis eget nisi vitae ex arcu sit amet erat.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
                  <path fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
                </svg>
              </p>
              <ul class="mb-0 flex justify-center">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
                    <path fill="currentColor"
                      d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" data-te-target="#carouselExampleCaptions" data-te-slide="prev">
        <span class="inline-block h-8 w-8">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            class="text-neutral-600 dark:text-neutral-300">
            <path fill="currentColor"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>
      <button
        class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" data-te-target="#carouselExampleCaptions" data-te-slide="next">
        <span class="inline-block h-8 w-8">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
            class="text-neutral-600 dark:text-neutral-300">
            <path fill="currentColor"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  </section>

</div> */}



        <section className="py-10 ">
          <div className="sec-heading">
            <h2>News & Updates</h2>
            <p>
              Stay up-to-date with our School community and all the exciting
              news and updates!
            </p>
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
                          <p className="text-sm font-medium text-red-500 capitalize">
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
                className="border-2 border-red-700 text-slate-700 text-lg  rounded-full px-5 py-2 hover:bg-red-700 hover:border-red-700  hover:text-white transition duration-300 font-medium"
              >
                View all News & Updates
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-5 pb-10 ">
          <div className="sec-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to commonly asked inquiries</p>
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
                              <span className="ml-6 h-7 flex items-center text-red-500">
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
                          <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-300 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-100 opacity-0"
                          >
                            <Disclosure.Panel
                              as="dd"
                              className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                            >
                              <p className="text-base text-gray-800">
                                {faq.answer}
                              </p>
                            </Disclosure.Panel>
                          </Transition>
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
                              <span className="ml-6 h-7 flex items-center text-red-500">
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
                          <Transition
                            enter="transition duration-300 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-300 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-100 opacity-0"
                          >
                            <Disclosure.Panel
                              as="dd"
                              className="transition-all p-5 duration-700 text-sm sm:text-base text-gray-600"
                            >
                              <p className="text-base text-gray-800">
                                {faq.answer}
                              </p>
                            </Disclosure.Panel>
                          </Transition>
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
                className="border-2 border-red-500 text-slate-700 text-lg  rounded-full px-5 py-2 hover:bg-red-700 hover:border-red-700  hover:text-white transition duration-300 font-medium"
              >
                View all FAQs
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 pt-0 relative">
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
                <span className="relative block md:inline">
                  {" "}
                  It's your child!{" "}
                </span>
              </span>
            </h2>

            <p>
              To your presschooler, nothing is impossible! They are opening up
              their world and developing special friendship. Together, they are
              learning new words and forming new ideas every day.
            </p>

            <div className="social">
              <a
                 href="https://wa.me/+923281215000"
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

              <a
                href="tel:+923281215000"
                title="Call"
                className="tooltip  hover:-translate-y-2 duration-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red-500"
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
