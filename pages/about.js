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
        <link rel="icon" type="image/x-icon" href="/favicon."></link>
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
        pageHeading="ABOUT US"
        pageImg="header-1.webp"
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
                  Spica International School Gujranwala Campus aims to offer quality education of an international standard within our cultural structure.</p>
                  <p className="mt-3"> We aim for merit through quality management, quality training and quality teaching bringing betterment to our students, society, country and the wider world.
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
                  Spica International School aims to impart quality education, knowledge, inspire, and influence through its innovative and stem educational practices. At Spica International School we want to raise a generation of talented, confident, enlightened individuals who socially and morally contribute towards the society.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto mt-16">
<div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
<div className="grid lg:flex gap-10">
<Image
              src="/images/chairman-spica-haji-muhammad-bashir-ansari-gujranwala.jpg"
              alt="Chairman Spica Haji Muhammad Bashir Ansari Gujranwala"
                width={445} height={591}
              
              className="lg:w-80 lg:h-96 w-60 h-auto shadow-xl mt-12 mx-auto"
            ></Image>

<div className="space-y-4 ">
      <h2 className="text-2xl text-center">Founder's Message</h2>
      

      <blockquote className="mt-8">
                <div className="relative text-base font-medium md:flex-grow">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-6 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                 
               

      <p className="mt-4">Dear Students and Parents,</p>
<p className="mt-4">Welcome to the family of Spica International School Gujranwala Campus! Thank you for trusting our school and admitting your child here. We place high value on our partnership with parents, families and community and we invite you to be an active part of our organization. </p>
<p className="mt-4">We consider it an honour to work with your children every day and cherish your trust in us. We believe that each and every student has a gift to share with the world, and we are here to unlock their highest potential. We have high expectations of our students, and we have high expectations of ourselves to help them learn and grow into well-rounded citizens and critical thinkers. Spica International School aims to develop leadership skills, social and emotional skills and academic skills to prepare students for success not only in school but also in their future careers, relationships and life-long learning.</p>
<p className="mt-4">We strongly believe in the importance of teachers, parents and administrators collaborating and communicating openly and frequently. We are in a process of continually improving the quality of tools of communication, including giving our parents access to an interactive website, facebook page,whatsapp groups and face to face interaction. You are encouraged to regularly check our early mentioned mediums and read about our exciting academic and co-curricular activities.</p>

</div>
              </blockquote>

<p>Best Regards,</p>

<p className="font-bold">Founder<br/>

Haji Muhammad Bashir Ansari (Late)<br/>

Spica International School Gujranwala Campus</p>
</div></div>
</div>
</section>


<section className="container mx-auto">
<div
          className="content-bx1 space-y-4 container mx-auto px-4 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >

<div className="grid lg:flex gap-10">
<Image
              src="/images/maliha-principal-spica-international-school-gujranwala.jpg"
              alt="Principal Spica International School"
                width={445} height={591}
              
              className="lg:w-80 lg:h-96 w-60 h-auto shadow-xl mt-12 mx-auto border-solid border-4 border-white hover:border-dotted"
            ></Image>
            <div className="space-y-4 ">
      <h2 className="text-2xl text-center">Principal's Message</h2>

<p>As a proud Principal of this academically accomplished school with well-respected directors of providing exceptional educational outcomes and opportunities to our talented young students since March, 2023, I warmly welcome you to Spica International School Gujranwala Campus.</p>

<p>Our aim is to create a supportive and inclusive environment where students from all socioeconomic strata are encouraged to explore their potential and achieve their personal best in all aspects of school life. Students are challenged and engaged through authentic learning opportunities that inspire them to develop creativity, confidence and resilience to become independent and ethical life-long learners.</p>

<p>We offer a broad curriculum and a range of opportunities for all our girls to achieve excellence in academic, creative, social, cultural, sporting and community endeavours. We value collaborative learning, positive relationships and building capacity amongst our girls to effectively allow them to engage in the world of the future, where problem solving, evaluating, working in teams, communicating, creating and innovating are not only valued concepts, but expected skills, attributes and capabilities.</p>
<p>We support the individual wellbeing of our students and provide a school environment that allows every child to thrive as they work towards achieving their personal best performance. We set high expectations for our students and work hard to safeguard positive emotions across our school community. We are partners in learning with our students and seek to deepen their knowledge, provide enriching and innovative learning experiences, while also gently urging our students out of their comfort zone to attempt new challenges. We value relationships and connections with the community. We encourage our students to develop respectful relationships with their peers, teachers and the broader community.</p>
<p>We instill in our students a keen social conscience and the capacity to make ethical decisions. We work hard to develop and sustain productive partnerships and connections with our parents, local schools and businesses and leading tertiary institutions. We are proud to be a high performing school and aim to be the selective school of first choice for all families within our community.</p>

<p>Our students graduate with the skills, mind sets and qualities that will best equip them for success in the world of the future. Our students are intelligent, resilient, creative, imaginative, disciplined, dedicated to life-long learning, respectful and ethical. They are the future leaders and role models of society.</p>
<p>Welcome to the Family of Spica International School! We place high value on our partnership with parents, families and community and we invite you to be an active part of our organization.</p>


<p>Warm Regards,</p>

<p className="font-bold">Ma'am Maliha Fatima<br/>

Principal<br/>

Spica International School Gujranwala Campus</p>
</div>
</div>
</div>
</section>





      <figure className="container pt-10 md:pt-10 mx-auto max-w-7xl ">
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
                  
   


      <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]"><svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="pricing-pattern" width="32" height="32" patternUnits="userSpaceOnUse" x="50%" y="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect></svg></div>  
      
     
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
    </>
  );
}
