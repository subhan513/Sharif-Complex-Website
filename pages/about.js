import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure,Transition } from '@headlessui/react';
import { PlusIcon,MinusIcon } from "@heroicons/react/outline";

 

// const faqs = [
//   {
//     question: "Pre Planning",
//     answer:
//       "Concept, Feasibility study, financing & funding, permits & licensing",
//   },
//   {
//     question: "Designing & Engineering",
//     answer:
//       "Specification, outline & detailed design, energy estimates.",
//   },
//   {
//     question: "Construction",
//     answer:
//       "Procurement, Contracting, Logistics, Site Preparation & environment mitigation, mounting structures & Assembly subsystems.",
//   },
//   {
//     question: "Operation",
//     answer:
//       "Running the power plant in order to deliver Projected energy performance in compliance with applicable rules and regulations. Certification & Commissioning Connection to power grid.",
//   },
//   {
//     question: "Maintenance & After Sales",
//     answer:
//       "Solar maintenance services, solar repair, solar checking, solar fix, solar report, Solar O&m. After-Sales Services help to establish customer loyalty and ensure customer retainment. They mark that customer's relations with your company hasn't ended yet.",
//   },
   
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function About() {
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
        <title>About Us | Spica International School</title>
        <meta
          name="title"
          content="About Us | Spica International School"
        />
        <meta
          name="description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Najam Awan" />
        <meta itemProp="name" content="" />
        <meta
          itemProp="image"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="About Us | Spica International School"
        />
        <meta
          name="twitter:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta
          name="twitter:image:src"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="About Us | Spica International School"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="We provides a high-quality early childhood education in a safe and nurturing environment that fosters creativity, critical thinking, and global awareness."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://spica.com.pk/_next/image?url=%2Fimages%2Fspica-logo2.png&w=256&q=75"
        />
        <link rel="canonical" href="https://spica.com.pk/about" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="ABOUT US - Spica International School"
        pageImg="header-1.jpg"
      />

      <section className="main-sec">
        <div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <p>
            <span className="font-bold">Spica International School</span> is a vibrant and nurturing environment that is specifically designed for children aged 2 to 5 years old. With a strong focus on early childhood education, the school provides a range of stimulating and engaging activities that promote learning and development in a fun and supportive atmosphere. From the colorful and interactive classrooms to the spacious outdoor play area, every aspect of Spica International School has been thoughtfully designed to meet the unique needs of young learners. Highly trained and experienced teachers are dedicated to providing individualized attention to each child and fostering a love of learning that will stay with them throughout their lives. With a commitment to excellence and a warm and welcoming community, Spica International School is the perfect place for young children to begin their educational journey.
          </p>
          <p>
          Spica International School's goal is to provide a high-quality, inclusive, and nurturing learning environment that empowers young children to reach their full potential. Our aim is to foster a love of learning, creativity, critical thinking, and global awareness in our students, while promoting values of respect, kindness, and empathy. We strive to maintain an inclusive and diverse community that celebrates differences and promotes understanding and acceptance. We are committed to continuously improving our curriculum, facilities, and teaching practices to provide the best possible learning experiences for our students. Our goal is to prepare our students for success in their future academic and personal pursuits, and to become responsible and compassionate global citizens who make positive contributions to society.
          </p>
         
        </div>
      </section>

      <div className="grid  sm:grid-cols-2  gap-4 max-w-7xl mx-auto px-5">
        <div className="relative mx-auto max-w-md  sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none  lg:py-10">
          <div className="relative pt-32 pb-10 rounded-2xl shadow-xl overflow-hidden">
          <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              controlsList="nodownload"
              loop={true}
              muted=""
              playsInline=""               
              src="./images/11.mp4"
            ></video>

            <div className="absolute inset-0 bg-indigo-500-500 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90"></div>
            <div className="relative px-8">
              <h2 className="text-3xl text-white font-bold">Our Vision</h2>
              <blockquote className="mt-8">
                <div className="relative text-base sm:text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-justify">
                  At SPICA International School, our vision is to be a leading institution in early childhood education that provides an exceptional learning experience to children from diverse backgrounds. Our goal is to foster a love of learning in every child that inspires them to become curious, creative, and critical thinkers who are ready to face the challenges of the future. We envision a school where every child is valued and respected, and where they are encouraged to develop their unique talents and interests.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-base font-semibold text-slate-300">
                    Spica International School
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-10">
          <div className="relative pt-32 pb-10 rounded-2xl shadow-xl h-full overflow-hidden">
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              controlsList="nodownload"
              loop={true}
              muted=""
              playsInline=""               
              src="./images/11.mp4"
            ></video>
            <div className="absolute inset-0 bg-[#edca8a] mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#dd9819] via-[#fabc0b] opacity-90"></div>
            <div className="relative px-8">
              <h2 className="text-3xl text-white font-bold">Our Mission</h2>
              <blockquote className="mt-8">
                <div className="relative text-base sm:text-lg font-medium text-white md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-justify">
                  The mission of SPICA International School is to provide a high-quality early childhood education that empowers young children to reach their full potential. We aim to provide a safe, nurturing, and inclusive learning environment that fosters a love of learning, creativity, and critical thinking in our students. Our mission is to provide a curriculum that is engaging, developmentally appropriate, and designed to meet the unique needs of each child. We are committed to recruiting and retaining highly qualified and experienced teachers who are dedicated to the success of each child.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <figure className="container pt-10 md:pt-0 mx-auto max-w-7xl ">
        <div className="text-center space-y-4 ">
          <blockquote>
            <div className="text-lg font-medium">
              <h2 className="sm:text-3xl text-xl text-indigo-600 font-bold">
                Our Values
              </h2>
              <div className="value-items mt-5">
                <p className="text-amber-500">Trustworthiness</p>
                <p className="text-cyan-600">Integrity</p>
                <p className="text-black">Efficacious</p>
                <p className="text-blue-500">Relationship</p>
                <p className="text-amber-700">Teamwork</p>
              </div>
            </div>
          </blockquote>
        </div>
      </figure>
      <section className="px-5">
      <div className="relative container mx-auto max-w-7xl py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className=" px-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-gray-500"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
      {/* <section className="px-5 pb-0">
        <div className="sec-heading">
          <h2>Messages</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 mx-auto max-w-7xl  lg:grid-cols-3  gap-2 gap-y-16 xl:gap-y-0 sm:gap-4">
          <div className="w-full mx-auto">
            <div className="relative bg-slate-800 rounded-lg shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300   h-full ">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/usman-bari.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from CEO
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Usman Bari Cheema
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnyne Solution provides safe, reliable, sustainable and
                  low-cost solar power solutions for personal, industrial and
                  commercial energy needs. Solar energy is a revolution in the
                  fight against climate change and Solnyne is at the forefront
                  of this transformation.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="relative bg-slate-700 rounded-lg shadow-lg p-5  hover:shadow-2xl hover:-translate-y-2 duration-300  h-full">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/naqash.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from MD
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Muhammad Naqash Ali
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnyne is committed to promoting renewable energy in Pakistan
                  and working exclusively on renewable energy projects. Solar
                  energy is the most promising alternative due to its low
                  environmental impact and high economic benefits. As Pakistan
                  faces energy and environmental challenges, solar energy will
                  increasingly play a vital role in the future. With solar
                  energy, Pakistan can achieve energy security, meet the demands
                  of a growing economy, and fulfill its climate commitments.
                  Solnyne is dedicated to strengthening its capabilities and
                  evolving as an organization to meet customer expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="relative bg-slate-600 rounded-lg shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 duration-300   h-full">
              <div className="relative">
                <div
                  className="w-32 h-32 mx-auto border-2  shadow-xl -mt-16 bg-white mb-4 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: "url('./images/haroon.png')",
                  }}
                ></div>
                <div className="text-xs font-bold uppercase text-amber-400 tracking-widest mb-2">
                  Message from Director’s Engineering
                </div>
                <h3 className="text-xl font-bold text-indigo-50 leading-snug mb-2">
                  Muhammad Haroon
                </h3>
                <p className="text-slate-50 block text-sm sm:text-base ">
                  Solnye Solutions Pvt. Ltd. offers high-quality engineering
                  solutions with a focus on customer satisfaction. Our priority
                  is to maintain precision and excellence in our products and
                  services through a comprehensive quality management system and
                  internal performance reviews. Our aim is to become a leading
                  engineering organization in Pakistan by utilizing our diverse
                  experience and professional expertise to provide top-notch
                  consultancy services to clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
                  
    <section className="relative">



    
      {/* <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 z-20">
        <div className="mx-auto   divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Our Process
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 bg-white p-6 rounded-xl shadow">
            {faqs.map((faq,index) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="md:text-xl text-base">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400 group">
                        <i className="absolute not-italic">{index+1}</i><span className="font-bold pl-5 md:pl-10 text-gray-900 group-hover:text-amber-500">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center text-amber-500">
                          <PlusIcon
                            className={classNames(open ? 'hidden' : 'flex', 'h-5 w-5 mr-4 transform')}
                            aria-hidden="true"
                          />
                           <MinusIcon
                            className={classNames(open ? 'flex' : 'hidden', 'h-5 w-5 mr-4 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel as="dd" className="mt-2 pr-2">
                      <p className="md:text-lg text-sm text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
      </Transition>
         
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

       
      



      </div> 


*/}
      <div className=" flex justify-center items-center mt-10">
              <Link href="/solar-referral"
                className="border   text-white text-sm sm:text-base md:text-2xl mt-5 cursor-pointer   hover:text-white 
                rounded-full text-center    mx-auto md:px-8   inline-flex items-center w-auto p-4 py-4   font-semibold   transition-all duration-300 shadow-md hover:from-amber-400 hover:via-amber-600 hover:to-amber-800 bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600  
                "
              >
               Earn Money with Solar Referral Program
              </Link>
            </div>


      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      
      </section>
    </>
  );
}
