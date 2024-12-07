import { useEffect, useRef, useState } from 'react';
import ArrowDownCircle from './assets/arrow-down-circle.svg';
import ArrowUpRight from './assets/arrow-up-right.svg';
import BgContactPng from './assets/bg-contact.png';
import Brand1 from './assets/brand-1.png';
import BrandAwarePng from './assets/brand-aware.png';
import BrandPerformPng from './assets/brand-perfom.png';
import Client1 from './assets/client-1.png';
import Client2 from './assets/client-2.png';
import Client3 from './assets/client-3.png';
import Client4 from './assets/client-4.png';
import FlowerSvg from './assets/flower.svg';
import GearSvg from './assets/gear.svg';
import HashSvg from './assets/hash.svg';
import Head2Png from './assets/head-2.png';
import HeadPng from './assets/head.png';
import HopesyColorSvg from './assets/hopesy-color.svg';
import Hopesy from './assets/hopesy.svg';
import JumbotronPng from './assets/jumbotron.png';
import RocketSvg from './assets/rocket.svg';
import StarLinkSvg from './assets/star-link.svg';
import StarSvg from './assets/star.svg';
import TitleSvg from './assets/title.svg';

const brands = [
  { img: Brand1, title: "Buzzing", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar" },
  { img: Brand1, title: "Buzzing", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar" },
  { img: Brand1, title: "Buzzing", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar" },
]

const clients = [
  { img: Client1, name: "bca" },
  { img: Client2, name: "pln" },
  { img: Client3, name: "astro" },
  { img: Client4, name: "adaro minerals" },
]

const whatwedoitems = [
  { img: RocketSvg, title: "Boost Campaign", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: HashSvg, title: "App Store & Play Store Optimization ", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: GearSvg, title: "Trending Hashtag Campaigns", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: GearSvg, title: "Survey Product", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: GearSvg, title: "User Generated Content", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: GearSvg, title: "Niche Influencer", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
  { img: GearSvg, title: "Voice & Visual Search Optimization", desc: "Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar " },
]

function App() {
  const navBgRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {

    if(!navBgRef.current) return;
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if(scroll > 100) {
        navBgRef.current?.classList.add("opacity-40", "blur-[1px]");
        navBgRef.current?.classList.remove("opacity-0");
        return;
      }
      navBgRef.current?.classList.remove("opacity-40", "blur-[1px]");
      navBgRef.current?.classList.add("opacity-0");
    });

  }, []);

  const onClickMenu = () => {
    setShowMenu((prev) => !prev);
  }

  const onCLickLink = () => {
    onClickMenu();
  }
 
  return (
    <>
      <div className={`w-[80vw] h-screen fixed top-0 left-0 flex items-center justify-center transform transition-all duration-500 z-50 translate-x-[-80vw] ${showMenu ? "!translate-x-0 delay-500" : ""}`}>
        <img src={JumbotronPng} className='absolute w-full h-full object-cover z-0 top-0 left-0' alt="Jumbotron" />
        <ul className='flex flex-col items-center gap-10 relative z-10'>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#who-are-we">Who Are We</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#what-we-do">What We Do</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#our-client">Our Client</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-light" href="#our-brand">Our Brand</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a onClick={onCLickLink} className="text-white font-medium flex" href="#contact">CONTACT US <img className='ml-2' src={ArrowUpRight} alt="" /></a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
      </div>
      <header className="w-full fixed top-0 left-0 z-30">
        <img ref={navBgRef} src={JumbotronPng} className='absolute opacity-0 w-full h-full object-cover z-0' alt="Jumbotron" />
        <nav className='container-custom py-3 flex items-center justify-between z-10 relative'>
          <a href="/"><img src={Hopesy} className="h-[40px]" alt="Hopesy" /></a>
          <ul className='lg:flex items-center gap-10 hidden'>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#who-are-we">Who Are We</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#what-we-do">What We Do</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#our-client">Our Client</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-light" href="#our-brand">Our Brand</a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <div className="h-[30px] w-[1px] bg-white"></div>
            <li className='flex flex-col gap-1 group'>
              <a className="text-white font-medium flex" href="#contact">CONTACT US <img className='ml-2' src={ArrowUpRight} alt="" /></a>
              <div className="bg-white rounded-full h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
          <button onClick={onClickMenu} className="text-white font-medium text-sm block lg:hidden">
            {showMenu ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full h-screen relative'>
        <img src={JumbotronPng} className='absolute w-full h-full object-cover z-0' alt="Jumbotron" />
        <div className="w-[80%] md:w-auto absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <img src={FlowerSvg} alt="" className="absolute z-10 right-0 top-0 rotate-animation" />
            <img src={StarSvg} alt="" className="absolute star-animation top-1/2" />
            <img src={TitleSvg} alt="" className="" />
          </div>
        </div>
        <div className="absolute bottom-3 flex flex-col items-center gap-2 left-1/2 transform -translate-x-1/2">
          <p className='text-white font-light text-center'>Scroll down to see more</p>
          <img src={ArrowDownCircle} className='w-7 up-down-animation' alt="" />
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full bg-white min-h-screen' id='who-are-we'>
        <div className="flex h-full container-custom items-center">
          <div className="flex-1 relative min-h-screen hidden md:block">
            <img src={BrandAwarePng} className="h-[200px] absolute top-1/2 transform -translate-y-1/2 right-[10%]" alt="" />
            <img src={HeadPng} className="h-[400px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="" />
            <img src={BrandPerformPng} className="h-[300px] absolute bottom-0 transform z-20  left-[10%]" alt="" />
          </div>
          <div className="flex-1 h-full flex flex-col gap-6 relative min-h-screen py-20">
            <img src={StarLinkSvg} className='h-[80%] pointer-events-none object-cover absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 transform' alt="" />
            <p className="m-0 text-primary-pink font-semibold">Who We Are</p>
            <p className="m-0 text-4xl font-semibold">A Platform-first community creative agency.</p>
            <p className="m-0 font-light">At Hopesy, we turn business challenges into growth opportunities. From market analysis and social media strategies to PR management, SEO, and advertising, we deliver solutions that make your hopes a reality.</p>
            <div className="flex items-start gap-10">
              <div className="">
                <p className="m-0 text-primary-pink text-3xl font-bold">500+</p>
                <p className="m-0 mt-1 font-light text-sm">Community User</p>
              </div>
              <div className="">
                <p className="m-0 text-primary-pink text-3xl font-bold">100+</p>
                <p className="m-0 mt-1 font-light text-sm">Delivered Task</p>
              </div>
              <div className="">
                <p className="m-0 text-primary-pink text-3xl font-bold">100+</p>
                <p className="m-0 mt-1 font-light text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full bg-black rounded-tr-xl rounded-tl-xl py-10' id='what-we-do'>
        <div className="container-custom">
          <div className="flex w-full mb-10 flex-col md:flex-row gap-5 md:gap-0">
            <div className="flex-1">
              <p className="m-0 text-primary-pink text-xl mb-2 font-semibold">Who We Do</p>
              <p className="m-0 text-white text-4xl font-bold">
                We Do What We Do Best
              </p>
            </div>
            <p className='flex-1 text-white text-sm font-light'>Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar egestas ac sollicitudin urna faucibus in a. Tristique a eleifend</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            {whatwedoitems.map((element, i) => (
              <div className="bg-dark rounded-lg p-3 md:p-7 flex flex-col gap-3" key={i}>
                <img src={element.img} alt="" className='w-10' />
                <p className="m-0 text-primary-pink text-xl font-semibold">{element.title}</p>
                <p className="m-0 text-white opacity-75 text-sm">{element.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14 bg-[#EFEFEF]' id='our-client'>
        <div className="container-custom flex flex-col items-center gap-10">
          <p className="m-0 text-primary-pink text-xl font-semibold">Our Client</p>
          <p className="m-0 text-dark sm:text-2xl text-center font-semibold">We've partnered with many Brand to deliver insights and solutions to their problems with big data</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {clients.map((client, i) => (
              <img src={client.img} key={i} className="md:grayscale hover:grayscale-0 transition-all duration-300" alt={client.name} />
            ))}
          </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14 bg-white' id='our-brand'>
        <div className="container-custom flex flex-col items-start gap-7">
          <p className="m-0 text-primary-pink text-xl font-bold">Our Brand</p>
          <p className="m-0 text-dark text-2xl text-center font-semibold">Several Brand that we have</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
            {brands.map((brand, i) => (
              <div className="bg-[#EFEFEF] rounded-lg p-3 md:p-7 flex flex-col gap-3" key={i}>
                <img src={brand.img} alt="" className='w-[100px]' />
                <p className="m-0 text-primary-pink text-xl font-semibold">{brand.title}</p>
                <p className="m-0 text-dark opacity-75 text-sm">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14 relative overflow-hidden' id='contact'>
        <img src={BgContactPng} className='w-full h-full bg-cover absolute top-0 left-0 z-0' alt="" />
        <div className="w-full md:w-[70%] h-full bg-[#910068] bg-opacity-50 absolute top-0 left-0 z-10">
          <img src={StarSvg} alt="" className="absolute star-animation right-[-10px] top-1/4" />
        </div>
        <div className="container-custom flex relative z-20">
            <div className="flex-2 flex flex-col gap-7">
              <p className="m-0 text-white font-semibold text-4xl">Contact Us</p>
              <p className="m-0 text-white font-light">Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team.</p>
              <form action="" className='grid grid-cols-2 sm:grid-cols-3 gap-7'>
                <input type="text" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Full Name' />
                <input type="text" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Phone Number' />
                <input type="email" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Email' />
                <textarea className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4 col-span-2 sm:col-span-3' rows={6} placeholder='Enter message here' />
                <div className="col-span-2 sm:col-span-3 flex justify-end">
                <button className=' hover:bg-black  transition-all duration-200 flex items-center rounded-md border border-solid border-white px-4 py-2 text-white w-fit'>
                  SEND <img src={ArrowUpRight} alt="" className='' />
                </button>
                </div>
              </form>
            </div>
            <div className="flex-1 relative hidden md:block">
              <img src={Head2Png} className='absolute left-0 md:bottom-0 lg:bottom-[-50%] transform rotate-6' alt="" />
            </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full bg-white py-14'>
        <div className="container-custom grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-5">
            <img src={HopesyColorSvg} className='h-[60px]' alt="" />
            <div className="">
              <p className="m-0 text-black font-bold text-lg mb-5">Our Contact</p>
              <a href="https://wa.me/6285892758224" className="m-0 text-gray-400 font-light flex items-center mb-2 w-fit"><i className="fa-solid fa-phone mr-2"></i> +62 858-9275-8224</a>
              <a href="mailto:arman@hopesy.co.id" className="m-0 text-gray-400 font-light flex items-center w-fit"><i className="fa-solid fa-envelope mr-2"></i>arman@hopesy.co.id</a>
            </div>
            <div className="">
              <p className="m-0 text-black font-bold text-lg mb-5">Location</p>
              <p className="m-0 text-gray-400 font-light">Gedung Jaya, Jl. M.H. Thamrin No.12 Lantai 5 unit A6, RT.2/RW.1, Kb. Sirih, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10340</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default App