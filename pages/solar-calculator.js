import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import MainHeader from "../components/mainheader";
import Head from "next/head";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon, SunIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function SolarCalculator() {
 

  ///////////////////////////////////
  const devicesData = [
    { id: 1, name: "Energy Saver", power: 25, usage: 1, qty: 1 },
    { id: 2, name: "Tube Lights", power: 40, usage: 2, qty: 1 },
    { id: 3, name: "LED Bulb", power: 15, usage: 1, qty: 1 },
    { id: 4, name: "Fan", power: 100, usage: 1, qty: 1 },
    { id: 5, name: "TV", power: 400, usage: 1, qty: 1 },
    { id: 6, name: "LED TV", power: 18, usage: 1, qty: 1 },
    { id: 7, name: "Computer", power: 250, usage: 1, qty: 1 },
    { id: 8, name: "Refrigerator", power: 350, usage: 1, qty: 1 },
    { id: 9, name: "Fridge", power: 250, usage: 1, qty: 1 },
    { id: 10, name: "Washing Machine", power: 500, usage: 1, qty: 1 },
    { id: 11, name: "Water Pump 1 HP", power: 1500, usage: 1, qty: 1 },
    { id: 12, name: "Iron", power: 1100, usage: 1, qty: 1 },
    { id: 13, name: "Split AC", power: 3504, usage: 1, qty: 1 },
    { id: 14, name: "Inverter AC", power: 1954, usage: 1, qty: 1 },
    { id: 15, name: "Microwave Oven ", power: 1200, usage: 1, qty: 1 },
    
  ];

  const [devices, setDevices] = useState([]);
  const [availableDevices, setAvailableDevices] = useState(devicesData);

  function addDevice(deviceId) {
    const deviceToAdd = availableDevices.find(
      (device) => device.id === deviceId
    );
    if (deviceToAdd) {
      setDevices([...devices, deviceToAdd]);
      setAvailableDevices(
        availableDevices.filter((device) => device.id !== deviceId)
        
      );
      
    }
    
  }

  function removeDevice(deviceId) {
    const deviceToRemove = devices.find((device) => device.id === deviceId);
    if (deviceToRemove) {
      setDevices(devices.filter((device) => device.id !== deviceId));
      setAvailableDevices([...availableDevices, deviceToRemove]);
     
    }
  }

  function calculateLoad() {
     
    setTimeout(() => {
    setTotalwatts(load.toFixed(2))
    }, 300);
   
    
    const load = devices.reduce((acc, device) => {
      const { power, usage,qty } = device;
      return (((acc + power * usage)/1000)*qty);
    }, 0);
    
    return load;
    
  }
  
  // function calculateLoad() {
  //   const load = devices.reduce((acc, device) => {
  //     const { power, usage,qty } = device;
  //     return ((acc + power * usage)*qty)/1000;
  //   }, 0);
  //   return load;
  // }
  
  function handleChange(index, field, value) {
    setDevices(
      devices.map((device, i) => {
        if (i === index) {
          return { ...device, [field]: value };
        }
        return device;
      })
    
    );
   
  }
  //////////////////////////
///////////////////////////////////

const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");
const [totalwatts, setTotalwatts] = useState((calculateLoad()).toFixed(2));
const [phone, setPhone] = useState("");

function handleTextBoxChange(event) {
   setTotalwatts(event.target.value);
}
 const [errors, setErrors] = useState({}); 
 const [buttonText, setButtonText] = useState("Send Message"); 
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [showFailureMessage, setShowFailureMessage] = useState(false); 
 const handleValidation = () => {
  let tempErrors = {};
  let isValid = true;

  if (fullname.length <= 0) {
    tempErrors["fullname"] = true;
    isValid = false;
  }
  if (email.length <= 0) {
    tempErrors["email"] = true;
    isValid = false;
  }
  if (totalwatts.length == 0) {
    tempErrors["totalwatts"] = true;
    isValid = false;
  }
  if (phone.length <= 0) {
   tempErrors["phone"] = true;
   isValid = false;
 }
  
  setErrors({ ...tempErrors });
  console.log("errors", errors);
  return isValid;
};

const handleSubmit = async (e) => {
 e.preventDefault();

 let isValidForm = handleValidation();

 if (isValidForm) {
   setButtonText("Sending");
   const res = await fetch("/api/sendgridres", {
     body: JSON.stringify({
       email: email,
       fullname: fullname,
       totalwatts: totalwatts,
       phone: phone,         
     }),
     headers: {
       "Content-Type": "application/json",
     },
     method: "POST",
   });

   const { error } = await res.json();
   if (error) {
      
     setShowSuccessMessage(false);
     setShowFailureMessage(true);
     setButtonText("Send Message");

     setPhone("");
     setFullname("");
     setEmail("");       
     setTotalwatts("0");
     return;
   }
   setShowSuccessMessage(true);
   setShowFailureMessage(false);
   setButtonText("Send Message");
   setPhone("");
   setFullname("");
   setEmail("");    
   setTotalwatts("0");
 }
  
};



/////////////////////////////

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
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
        <title>Solar Calculator | Solnyne Solutions</title>
        <meta name="title" content="Solar Load Calculator | Solnyne Solutions" />
        <meta
          name="description"
          content="Load Calculation for Solar System, Solar Calculator and Solar Panel Calculator Online."
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
          content="Solar Load Calculator | Solnyne Solutions"
        />
        <meta
          name="twitter:description"
          content="Load Calculation for Solar System, Solar Calculator and Solar Panel Calculator Online."
        />
        <meta
          name="twitter:image:src"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:title"
          content="Solar Load Calculator | Solnyne Solutions"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <meta
          property="og:description"
          content="Load Calculation for Solar System, Solar Calculator and Solar Panel Calculator Online."
        />
        <meta property="og:locale" content="en" />
        <meta
          itemProp="image"
          content="https://solnyne.com/_next/image?url=%2Fimages%2Fsolnyne-logo.png&w=256&q=75"
        />
        <link rel="canonical" href="https://solnyne.com/solar-calculator" />
        <link rel="preconnect" href="//www.google-analytics.com" as="script" />
        <meta name="google" content="notranslate" />
      </Head>

      <MainHeader
        pageHeading="Solar Load Calculator | Solnyne"
        pageImg="hdr-6.jpg"
      />

      <section className="main-sec">
        <div
          className="space-y-4 container h-auto mx-auto px-5 bg-gradient-to-b from-white to-transparent rounded-xl py-5  mb-4 border border-slate-200 border-b-0 rounded-b-none pb-10 "
          style={{ boxShadow: "0px -15px 15px rgba(1,41,112,0.08)" }}
        >
          <p>
            Solnyne Solar Calculator can help you estimate your electricity <strong>load
            calculation for Solar System</strong> and determine the solar power potential
			of your Home / Business. You may wonder How to calculate load for solar system ?. 
			By inputting information about your energy consumption, the calculator
            can provide an estimate of the size and configuration of a solar
            panel system that would best meet your needs.
          </p>

          <p>
            Alternatively, you can contact us to discuss your specific energy
            needs and we can tailor a solar power solution that is customized to
            your requirements.
          </p>

          {/* <form>
        <label>
          Select Device:
          <select onChange={(e) => addDevice(parseInt(e.target.value))}>
            <option value="">--Select Device--</option>
            {availableDevices.map(device => (
              <option key={device.id} value={device.id}>{device.name}</option>
            ))}
          </select>
        </label>
        {devices.length > 0 && (
          <div>
            <h2>Selected Devices:</h2>
            {devices.map(device => (
              <div key={device.id}>
                <p>{device.name}</p>
                <p>Power Rating:   {device.power} W</p>
                <p>Usage Time: {device.usage} hours/day</p>
                <button type="button" onClick={() => removeDevice(device.id)}>Remove</button>
              </div>
            ))}
            <div>
              Total Electricity Load: {calculateLoad()} Watts
            </div>
          </div>
        )}
      </form> */}

          <form className="mt-10 max-w-6xl mx-auto bg-gradient-to-b from bg-slate-100 to-white p-5 rounded-xl border shadow">
            <label className="relative">
              {/* Select Appliance */}
              {/* <ChevronDownIcon className="absolute right-4 top-4 w-5 h-5 z-10 focus:text-blue-400"/> */}
              <select
                className="txtbx font-sans font-semibold h-12 mb-5 p-2.5 "
                onChange={(e) => addDevice(parseInt(e.target.value))}
              >
                <option value="" className="font-semibold">--Select Appliance--</option>
                {availableDevices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.name}
                  </option>
                ))}
              </select>
            </label>

            {devices.length > 0 && (
              <div>
                {devices.map((device, index) => (
                  <div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-0 sm:mt-3"
                    key={device.id}
                  >
                    <label className="text-lg text-blue-700 font-medium mt-7 flex items-center h-10">
                      <SunIcon className="text-amber-400 w-7 mr-3" />
                      {device.name}
                    </label>

                    <label className="block mb-4">
                      <span className="text-slate-600">
                        Power Rating (Watts)
                      </span>

                      <input
                        className="txtbx"
                        type="number"
                        step="1"
                        onChange={(e) =>
                          handleChange(index, "power", e.target.value)
                        }
                        value={device.power}
                      />
                    </label>
                    <label className="block mb-4">
                      <span className="text-slate-600">
                        Average Daily Usage (Hours)
                      </span>
                      <input
                        className="txtbx"
                        type="number"
                        step="1"
                        onChange={(e) =>
                          handleChange(index, "usage", e.target.value)
                        }
                        value={device.usage}
                      />
                    </label>
                    <label className="block mb-4">
                      <span className="text-slate-600">Quantity</span>

                      <div className="flex">
                        <input
                          className="txtbx"
                          type="number"
                          step="1"
                          onChange={(e) =>
                            handleChange(index, "qty", e.target.value)
                          }
                          value={device.qty}
                        />

                        <div className="w-8 h-8  bg-green-500 hover:bg-green-700 p-1 ml-2 mt-2   justify-center items-center shadow-sm  cursor-pointer rounded-full hidden">
                          <PlusIcon className="w-6 h-auto text-white" />
                        </div>
                        <div className="w-8 h-8  bg-red-400 hover:bg-red-600 duration-300 transition   p-1 ml-2 mt-2 cursor-pointer   flex  justify-center items-center shadow-sm    rounded-full  " title="Remove Appliance">
                          <MinusIcon
                            className="w-6 h-auto text-white"
                            onClick={() => removeDevice(device.id)}
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </form>

          <div className="text-center relative w-full h-10 flex justify-center items-center">
            <div className="font-medium  absolute md:-mt-12 mt-2 bg-white p-3 px-5 md:px-10 border shadow block mx-auto text-black md:text-3xl text-xl text-center rounded">
              Electric Load ={" "}
              <span className="font-bold text-red-600">
                {(calculateLoad()).toFixed(2)} kWh
              </span>
           
            </div>

          
          </div>

          <p className="text-sm text-slate-500 text-center"><span className="text-red-600 text-lg">*</span> A kilowatt hour (kWh) is a measure of how much energy you're using per hour</p>

          <div className=" flex justify-center items-center mt-5">
            {/* <div
                className="border   text-slate-700 text-lg mt-5 md:mt-0 cursor-pointer rounded-full px-5 py-3 bg-amber-400 border-amber-400  transition duration-300 font-bold hover:text-white"
              >
                Calculate Electric Load
              </div> */}
          </div>
        </div>
      </section>

      <section className="py-16 pt-0  relative">
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
              <span className="relative block md:inline">
                {" "}
                the details of your solar project!{" "}
              </span>
            </span>
          </h2>

          <p>
            Our team of experts is ready to answer any questions you may have
            and help you find the best solution for your needs. Contact us today
            to schedule a consultation.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 max-w-6xl mx-auto bg-gradient-to-b from bg-slate-100 to-white p-5 rounded-xl border shadow">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <label className="block mb-4">
                <span className="text-slate-600">Total Load (kWh)</span>

                <input
                  type="text"
                  onChange={handleTextBoxChange}
                  name="totalwatts"
                  className="txtbx"
                value={totalwatts}
                />
                
                 {errors?.totalwatts && (
            <i className="text-red-500 text-sm not-italic">Please enter total load.</i>
          )}
              </label>
              <label className="block mb-4">
                <span className="text-slate-600">Full Name</span>

                <input
                  type="text"  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  name="fullname"
                  className="txtbx"
                />
                 {errors?.fullname && (
            <i className="text-red-500 text-sm not-italic">Please enter full name.</i>
          )}
              </label>
              <label className="block mb-4">
                <span className="text-slate-600">Email Address</span>
                <input
                  type="text"  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className="txtbx"
                />
                 {errors?.email && (
            <i className="text-red-500 text-sm not-italic">Please enter valid email.</i>
          )}
              </label>
              <label className="block mb-4">
                <span className="text-slate-600">Phone Number </span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name="phone"
                  className="txtbx"
                />
                 {errors?.phone && (
            <i className="text-red-500 text-sm not-italic">Please enter phone number.</i>
          )}
              </label>

              <label className="block mb-4">
                <span className="text-slate-600 block"> </span>
                <button
                        type="submit" className="border   text-white text-lg mt-0 sm:mt-6   rounded-full px-3 py-2 bg-amber-400 border-amber-400  transition duration-300 font-bold hover:text-slate-600 cursor-pointer text-center">
                {buttonText}
                </button>
              </label>
            </div>

            {showSuccessMessage && (
              <i className="text-green-500 font-semibold text-sm my-2 not-italic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2 -mt-1">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
</svg>
 Thankyou! Your Message has been delivered.
              </i>
            )}
            {showFailureMessage && (
              <i className="text-red-500 not-italic">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline mr-2 -mt-1">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
  Oops! Something went wrong, please try again.
              </i>
            )}
          </form>

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

            <a
              href="tel:+923041111908"
              title="Call"
              className="tooltip  hover:-translate-y-2 duration-300 transition"
            >
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

        <div className="absolute inset-x-0 bottom-0 h-96 -z-10 text-slate-600/10 [mask-image:linear-gradient(to_bottom,transparent,white)]">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pricing-pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#pricing-pattern)"
            ></rect>
          </svg>
        </div>
      </section>
    </>
  );
}
