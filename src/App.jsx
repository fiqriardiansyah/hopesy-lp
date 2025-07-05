import { useForm } from '@formspree/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Timeline, Tween } from 'react-gsap';
import { Helmet } from 'react-helmet';
import { Controller, Scene } from 'react-scrollmagic';
import Carousel from "react-multi-carousel";
import { Modal } from 'react-responsive-modal';

import Abstract from './assets/abstract.png';
import ArrowDownCircle from './assets/arrow-down-circle.svg';
import ArrowUpRight from './assets/arrow-up-right.svg';
import BgContactPng from './assets/bg-contact.png';
import BookLine from './assets/book-line.svg';
import calenderSvg from './assets/calendar.svg';
import ChevronRight from './assets/chevron-right.svg';
import Client1 from './assets/client-1.png';
import Client10 from './assets/client-10.png';
import Client11 from './assets/client-11.png';
import Client12 from './assets/client-12.png';
import Client13 from './assets/client-13.png';
import Client14 from './assets/client-14.png';
import Client2 from './assets/client-2.png';
import Client3 from './assets/client-3.png';
import Client4 from './assets/client-4.png';
import Client5 from './assets/client-5.png';
import Client6 from './assets/client-6.png';
import Client7 from './assets/client-7.png';
import Client8 from './assets/client-8.png';
import Client9 from './assets/client-9.png';
import cursorSvg from './assets/cursor.svg';
import Document from './assets/document.svg';
import Eye from './assets/eye.svg';
import FlowerSvg from './assets/flower.svg';
import Group1 from './assets/group-1.png';
import HashSvg from './assets/hash.svg';
import Head2Png from './assets/head-2.png';
import HopesyColorSvg from './assets/hopesy-color.svg';
import Hopesy from './assets/hopesy.svg';
import JumbotronPng from './assets/jumbotron.png';
import purseSvg from './assets/purse.svg';
import RocketSvg from './assets/rocket.svg';
import Setting from './assets/setting.svg';
import sheetSvg from './assets/sheet.svg';
import Shield from './assets/shield.svg';
import starPinSvg from './assets/star-pin.svg';
import StarSvg from './assets/star.svg';
import storeSvg from './assets/store.svg';
import ThumbsDownLine from './assets/thumbs-down-line.svg';
import ThumbsUpLine from './assets/thumbs-up-line.svg';
import userSvg from './assets/user.svg';
import SeePink from './assets/eye-pink.png';
import AmplifyPink from './assets/amplify-pink.png';
import CheckPink from './assets/check-pink.png';
import ConvertPink from './assets/convert-pink.png';
import TrustPink from './assets/trust-pink.png';
import ValidatePink from './assets/validate-pink.png';
import Abstract2 from './assets/abstract-2.png';
import Information from './assets/information.png';
import Clients from './assets/clients.png';
import Female from './assets/female-percent.svg';
import Male from './assets/male-percent.svg';
import Indonesia from './assets/indonesia-new.png';
import Buzzing from './assets/buzzing.png';
import Fedex from './assets/fedex.png';
import WhatWeDoBg from './assets/what-we-do-bg.png';
import StarLine from './assets/star-line.svg';
import AnalyticsLine from './assets/analytics-line.svg';
import FinanceLine from './assets/finance-line.svg';

const sliderContent = [
  { img: SeePink, text1: 'SEE', text2: 'Discover the brand (viral, trends)', text3: 'Support Feature', text4: 'Hashtag boost, viral hijack, FYP exposure' },
  { img: CheckPink, text1: 'CHECK', text2: 'Google /search the brand', text3: 'Support Feature', text4: 'Rating, reviews, clarification reply' },
  { img: ValidatePink, text1: 'VALIDATE', text2: 'Read comments & testimonials', text3: 'Support Feature', text4: 'UGC videos, polls, real feedback' },
  { img: TrustPink, text1: 'TRUST', text2: 'Feel ready to buy', text3: 'Support Feature', text4: 'ASO, product visuals, buyer  comments' },
  { img: ConvertPink, text1: 'CONVERT', text2: 'Make a purchase or install', text3: 'Support Feature', text4: 'KYC, download boost, checkout optimization' },
  { img: AmplifyPink, text1: 'AMPLIFY', text2: 'Leave review & share experience', text3: 'Support Feature', text4: 'Feedback loop, repeat testimonialse' },
]

const clients = [
  { img: Client1, name: "bca" },
  { img: Client2, name: "pln" },
  { img: Client3, name: "astro" },
  { img: Client4, name: "adaro minerals" },
  { img: Client5, name: "adaro minerals" },
  { img: Client6, name: "adaro minerals" },
  { img: Client7, name: "adaro minerals" },
  { img: Client8, name: "adaro minerals" },
  { img: Client9, name: "adaro minerals" },
  { img: Client10, name: "adaro minerals" },
  { img: Client11, name: "adaro minerals" },
  { img: Client12, name: "adaro minerals" },
  { img: Client13, name: "adaro minerals" },
  { img: Client14, name: "adaro minerals" },
]

const whatwedoitems = [
  { img: RocketSvg, title: "Boost Campaign", desc: "Enhance brand visibility through digital ads, influencers, buzzers, and trending hashtags on social media." },
  { img: purseSvg, title: "App Store & Play Store Optimization ", desc: "Optimize apps to increase visibility, downloads, and reviews on app stores." },
  { img: HashSvg, title: "Social Engagement Campaign ", desc: "Drive social media interactions through viral hashtags, user-generated content (UGC), and community campaigns." },
  { img: calenderSvg, title: "Event & Community Activation", desc: "Activate physical events and communities to build brand loyalty and increase engagement through live experiences." },
  { img: userSvg, title: "Influencer & Niche Campaign	", desc: "Leverage targeted influencers to reach the right audience and increase brand influence in relevant niches." },
  { img: sheetSvg, title: "Market Insights & Surveys", desc: "Gather market insights and customer feedback through online and offline surveys." },
  { img: cursorSvg, title: "Paid Ads Optimization", desc: "Optimize paid ads across platforms to increase reach, clicks, and conversions." },
  { img: starPinSvg, title: "Reputation Management", desc: "Improve brand reputation online through positive reviews, ratings, and customer feedback on digital platforms." },
  { img: storeSvg, title: "E-commerce Optimization", desc: "Optimize online shopping experiences to improve conversions and sales." },
]

const brands = [
  { img: Buzzing, title: "Buzzing", desc: 'Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar ' },
  { img: Fedex, title: "Key'OI", desc: 'Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar ' },
  { img: Fedex, title: "Buzzing", desc: 'Lorem ipsum dolor sit amet consectetur. Turpis id pulvinar ' },
]

const hopesyDifferent = [
  { img: Shield, text1: 'No vanity metrics. We prove it, or we fix it.', text2: 'measured results only' },
  { img: Eye, text1: 'You know what you’re paying for. Always.', text2: 'no hidden fees' },
  { img: Document, text1: '150%+ engagement growth. 98% happy clients.', text2: 'real results, not promises' },
  { img: Setting, text1: 'No templates. Just tailored trust strategies.', text2: 'built around you' },
]

const weDoWhatWeDoBest = [
  { img: Document, title: 'TRUSTCRAFT', desc: 'Review & rating optimization, Positive comment & social proof, Reputation repair & monitoring' },
  { img: purseSvg, title: 'STOREBOOST', desc: 'App store optimization (ASO), Growth Rating & Review, Marketplace visual upgrade, Search, download & rating boost' },
  { img: HashSvg, title: 'TRENDCAMPAIGN', desc: 'Trending hashtag campaign, Viral content hijack, Engagement bombing' },
  { img: Shield, title: 'REPUTATION MANAGEMENT', desc: 'Improve brand reputation online through positive reviews, ratings, and customer feedback on digital platforms.' },
]

const wordingSlide = [
 `Hopesy — Specialist in Trust. We Build What Ads Can’t.`,
 `Real People. Real Feedback. Real Trust. That’s the Hopesy Standard`,
 `People don't trust ads, People trust people`
];

const slideVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
};

const trustcraftSuccessStory = [
  { title: 'Review & Rating Optimization', desc: 'In just 30 days, a fintech app’s Play Store rating increased from 3.7 to 4.8 through a structured review optimization campaign powered by real users from our verified community.', },
  { title: 'Positive Comment & Social Proof', desc: 'A fintech company boosted ad performance by 2.1× after we deployed 200+ organic, relevant comments under their sponsored content — creating the social validation their audience needed.' },
  { title: 'Reputation Repair', desc: 'A local service app recovered from a series of 1-star reviews, burying them with fresh, verified feedback while deploying clarifying responses — restoring their Play Store score within 3 weeks.', },
  { title: 'Monitoring & Reporting', desc: 'A B2B SaaS platform used our custom dashboard to track sentiment shifts in real-time, discovering that 94% of new feedback post-campaign was positive and actionable.' },
];

const pulseSuccessStory = [
  { title: "UGC Campaigns", desc: "A skincare brand received over 150 testimonial videos from real users in just two weeks — significantly increasing organic engagement and trust across TikTok and Instagram." },
  { title: "Market Survey & Feedback", desc: "Before launching a new product feature, a fintech app collected over 1,000 inputs from our community survey — helping them fine-tune development and avoid costly missteps." },
  { title: "Interactive Engagement", desc: "An F&B brand activated IG Stories polls and Q&As to choose their next flavor launch — resulting in a 280% spike in story engagement and stronger product-market fit."},
  { title: "Niche Influencer Activation", desc: "An EdTech platform onboarded 30+ micro-influencers within campus communities, generating 75+ real content pieces and a 4.2× boost in organic sign-ups."},
];

const storeBoostSuccessStory = [
  { title: "App Store Optimization (ASO)", desc: "A financial app jumped into the Top 10 ranking on the Play Store within one week by optimizing keywords, visuals, and user sentiment — all coordinated under our ASO sprint."},
  { title: "Marketplace Visual & Trust Upgrade", desc: "After redesigning product visuals and boosting positive ratings, a Shopee store doubled its conversion rate and reduced negative reviews by 60% in just 30 days."},
  { title: "User Acquisition & KYC", desc: "A digital wallet brand gained 10,000+ fully verified users in under a month through our acquisition & KYC onboarding system — with CPA kept under Rp12,000."},
  { title: "Download & Search Boost", desc: "A lifestyle app ranked on page 1 of Play Store search after a 3-day campaign burst, leading to 3× more organic downloads than their average baseline."},
];

const trendSuccessStory = [
  { title: "Trending Hashtag Campaigns", desc: "A national brand reached #1 trending spot on Twitter Indonesia within just 5 hours during Ramadan, leading to a 220% spike in hashtag mentions and thousands of organic conversations in a single day."},
  { title: "Viral Content Hijack", desc: "A retail client used our TikTok challenge hijack strategy, resulting in 10× higher engagement on their branded reels compared to prior campaigns."},
  { title: "Engagement Bombing", desc: "By flooding relevant content with real comments and reactions, a mobile app campaign improved ad CTR by 2.3× in just 48 hours."},
  { title: "Competitor Hijack", desc: "A beauty brand leveraged strategic, positive replies on competitor content to organically grow followers by 140% — without running paid ads."}
]

const successStories = [
  { name: 'TrustCraft — Brand Trust & Reputation Engine', stories: trustcraftSuccessStory },
  { name: 'PulseUCG — User Generated Content & Community Insight', stories: pulseSuccessStory },
  { name: 'StoreBoost — Marketplace & App Store Optimization', stories: storeBoostSuccessStory },
  { name: 'TrendCampaign — Viral & Trending Strategy', stories: trendSuccessStory }
]

const responsive = {
  a: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5.6
  },
  b: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3.5
  },
  c: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3.2
  },
  d: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.2
  },
  e: {
    breakpoint: { max: 464, min: 400 },
    items: 2
  },
  f: {
    breakpoint: { max: 400, min: 300 },
    items: 1.1
  },
  g: {
    breakpoint: { max: 400, min: 0 },
    items: 1
  }
};

const cities = ['Jabodetabek', 'Semarang', 'Pekanbaru', 'Yogyakarta', 'Surabaya', 'Padang', 'Bandung', 'Medan', 'Makassar', 'Palembang', 'Malang'];

const trustcraftServices = [
  {
    title: "Review & Rating Optimization",
    description:
      "Gain more positive ratings and real user reviews for apps, online stores, or local businesses.",
  },
  {
    title: "Positive Comment & Social Proof",
    description:
      "Add relevant, authentic comments to your content, ads, and social platforms to build trust.",
  },
  {
    title: "Reputation Repair",
    description:
      "Bury negative reviews with new, positive feedback, clarify through comments, and deploy “defense” strategies.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Track your rating changes and feedback, receive real-time reports so you know the campaign’s true impact.",
  },
];

const storeBoostServices = [
  {
    title: "APP STORE OPTIMIZATION (ASO)",
    description: "Optimize keywords, ratings, reviews, visuals, and boost your search/downloads",
  }, 
  {
    title: "Marketplace Visual & Trust Upgrade",
    description: "Improve product/store visuals, copy, layout, and increase positive reviews & ratings",
  },
  {
    title: "User Acquisition & KYC",
    description: "Attract and onboard new users, including KYC if required",
  },
  {
    title: "Download & Search Boost",
    description: "Push your store/app to higher ranks and trending spots through campaign-based strategies",
  }
]

const pulseucgServices = [
  {
    title: "UGC Campaigns",
    description: "Community users create video testimonials, reviews, tutorials, and unboxings, then share them across social channels",
  },
  {
    title: "Market Survey & Feedback",
    description: "Collect insights, preferences, and product validation via community-based surveys",
  },
  {
    title: "Interactive Engagement",
    description: "Activate polls, Q&As, or lively discussions on IG Stories, TikTok, WhatsApp, etc",
  },
  {
    title: "Niche Influencer Activation",
    description: "Mobilize relatable micro-influencers—trusted voices within your target audience"
  }
]

const trendCampaignServices = [
  {
    title: "Trending Hashtag Campaigns",
    description: "Boost brand hashtags to trend on Twitter/TikTok",
  },
  {
    title: "Viral Content Hijack",
    description: "Leverage viral sounds, formats, and effects so your brand rides the hottest trends (challenges, Reels, IG Stories, etc)",
  },
  {
    title: "Engagement Bombing",
    description: "Flood your content with thousands of comments, shares, and likes to trigger social algorithms",
  },
  {
    title: "Competitor Hijack",
    description: "Smart, positive engagement on competitor content to capture their audience",
  },
]

const trustCraftContent = {
  title: "TrustCraft: Brand Trust & Reputation Engine",
  desc: "TrustCraft helps your brand build digital trust by increasing ratings, positive reviews, and authentic comments. We focus on managing your reputation across key platforms (Google, Play Store, marketplaces, social media) so your brand appears more credible and attractive to real customers.",
  sample1: "Client’s app rating improved from 3.6 to 4.5 on the Play Store in 30 days",
  sample2: "Shopee store shifted from several 1-star reviews to a majority of 4–5 star positive reviews and trusted comments.",
  industries: "Finance, E-commerce, FMCG, Technology, Healthcare, Telco, Education, Media",
  price: "2,500,000"
};

const storeBoostContent = {
  title: "StoreBoost: Marketplace & App Store Optimization",
  desc: "StoreBoost ensures your app or online store is easy to find and trusted by your target users. We boost visibility, conversions, and presentation on marketplaces and app stores",
  sample1: "Client’s app reached Top 10 trending in Play Store’s Finance category",
  sample2: "Online store doubled positive reviews, saw increased conversions after marketplace upgrades",
  industries: "E-commerce, Technology, Finance, Retail, Education, Telco",
  price: "2,500,000"
};

const trendCampaignContent = {
  title: "TrendCampaign: Viral & Trending Strategy",
  desc: "TrendCampaign puts your brand at the center of digital conversations—on Twitter, TikTok, and Instagram. We drive trending campaigns, viral hashtags, and creative content hijacks",
  sample1: "Ramadan campaign trended on Twitter within 3 hours",
  sample2: "Reels content for a client hit 5x normal reach in just two days via viral effect",
  industries: "FMCG, Technology, Finance, Entertainment, Media, Skincare, Education",
  price: "3,000,000"
};

const pulseucgContent = {
  title: "PulseUCG: User Generated Content & Community Insight",
  desc: "PulseUCG activates real communities to create authentic content for your brand: videos, photos, testimonials, comments, polls, Q&As—even market surveys. This content builds far more trust than paid ads or traditional endorsements",
  sample1: "Skincare brand received 150+ genuine video testimonials on TikTok & Instagram within two weeks",
  sample2: "Community survey helped validate new features for a fintech app before launch",
  industries: "FMCG, Skincare, Finance, Technology, E-commerce, Education, Lifestyle",
  price: "4,000,000"
};

const detailServices = [
  { title: 'TRUSTCRAFT', list: trustcraftServices, content: trustCraftContent },
  { title: 'STOREBOOST', list: storeBoostServices, content: storeBoostContent },
  { title: 'TRENDCAMPAIGN', list: trendCampaignServices, content: trendCampaignContent },
  { title: 'REPUTATION MANAGEMENT', list: pulseucgServices, content: pulseucgContent },
];

function App() {
  const navBgRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [detailService, setDetailService] = useState(null);
  const [successStory, setSuccessStory] = useState(successStories[0].name);

  const onOpenModal = (item) => {
    const detail = detailServices.find((i) => i.title === item.title);
    setDetailService(detail);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordingSlide.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  // email to arman@hopesy.co.id
  const [state, handleSubmit] = useForm("mgvvpqok");

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

  const carouselRef = useRef(null);

  const goNext = () => {
    carouselRef.current?.next();
  };

  const goPrev = () => {
    carouselRef.current?.previous();
  };

  return (
    <Controller> 
      <Helmet>
      <meta property="og:title" content="Hopesy" />
      <meta property="og:site_name" content="Hopesy" />
      <meta property="og:url" content="" />
      <meta property="og:description" content="A Platform-first community creative agency." />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content="https://ik.imagekit.io/p4ukigs1hrvx/Group%2050_E8Fv3tN6w.png?updatedAt=1733590113119" />
      </Helmet>
      <Modal open={open} onClose={onCloseModal} center classNames={{ modal: 'customModal' }}>
        <div className="bg-white text-gray-800 font-sans">
          <div className="text-start p-10">
            <h2 className=" font-bold text-lg">Our Services</h2>
            <div className="flex gap-10 flex-col lg:flex-row">
              <div className="flex-1">
                <h1 className="text-xl font-bold mt-2 uppercase">{detailService?.content?.title}</h1>
              </div>
              <div className="flex-2">
                <p className="mx-auto">{detailService?.content?.desc}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-200 my-5"></div>
          <div className='p-10'>
            <h3 className="text-2xl font-bold text-center mb-6 uppercase">What We Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailService?.list?.map((service, i) => (
                <div key={service.number} className="bg-[#2D2D2D] text-white p-6 rounded-lg shadow-md relative">
                  <img src={WhatWeDoBg} className='w-full h-full absolute z-0 opacity-20 top-0 left-0' alt="" />
                  <h4 className="text-[#C4008D] font-bold text-3xl mb-2 uppercase">0{i + 1}</h4>
                  <h5 className="font-bold text-lg mb-2 uppercase">{service.title}</h5>
                  <p className="text-sm font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-10 flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
              <p className='text-3xl font-bold w-[300px]'>SAMPLE IMPLEMENTATION</p>
              <div className="flex flex-1 flex-col gap-5">
                <img src={AnalyticsLine} className="w-[60px]" alt="" />
                <p className='font-light'>{detailService?.content?.sample1}</p>
              </div>
              <div className="flex flex-1 flex-col gap-5">
                <img src={StarLine} className="w-[60px]" alt="" />
                <p className='font-light'>{detailService?.content?.sample2}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
              <p className='text-3xl font-bold uppercase w-[300px]'>Industries <br /> Served</p>
              <div className="flex flex-col gap-5 flex-1">
                <img src={FinanceLine} className="w-[60px]" alt="" />
                <p className='font-light'>{detailService?.content?.industries}</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-700 lg:items-center flex-col lg:flex-row gap-5 to-pink-500 w-full flex text-white py-6 mt-12 px-6 justify-between">
            <h4 className="text-2xl font-semibold uppercase">Pricing</h4>
            <div className="">
               <p className="text-3xl font-bold mt-1"><span className='text-base font-normal'>Starts from </span>{detailService?.content?.price}<span className="text-base font-normal">/month</span></p>
                <p className="text-sm mt-1 text-end">*customizable for your needs</p>
            </div>
          </div>
        </div>
      </Modal>
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
      <Scene duration="100%" triggerHook="onLeave" >
        <Timeline  wrapper={<section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full h-screen relative' />} >
          <Tween 
            position="0"
            from={{ yPercent: -50, xPercent: -50 }}
            to={{ yPercent: 0, xPercent: -50 }} >
            <div className="w-[80%] md:w-auto absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex flex-col">
                <img src={FlowerSvg} alt="" className="absolute hidden md:block z-10 -right-10 -top-10 rotate-animation" />
                <img src={StarSvg} alt="" className="absolute hidden md:block star-animation top-1/2 -left-20" />
                <h1 className='text-white text-center xl:whitespace-nowrap text-8xl font-bebas'>MARKETING FOR THE TRUST ERA</h1>
                <div className="overflow-y-hidden h-[150px] lg:h-[100px] w-full relative mt-8 self-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      variants={slideVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.6 }}
                      className="absolute whitespace-pre-line text-center flex justify-center text-white text-xl lg:text-4xl w-full"
                    >
                      {wordingSlide[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button type='submit' className='mt-10 hover:bg-black/15 self-center transition-all duration-200 flex items-center rounded-full border border-solid border-white px-4 py-2 text-white w-fit'>
                  CONTACT US <img src={ArrowUpRight} alt="" className='' />
                </button>
              </div>
            </div>
          </Tween>
          <img src={JumbotronPng} className='absolute w-full h-full object-cover z-0' alt="Jumbotron" />
          <div className="absolute bottom-3 flex flex-col items-center gap-2 left-1/2 transform -translate-x-1/2">
            <p className='text-white font-light text-center'>Scroll down to see more</p>
            <img src={ArrowDownCircle} className='w-7 up-down-animation' alt="" />
          </div>
        </Timeline>
      </Scene>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full bg-white min-h-screen' id='who-are-we'>
        <div className="flex h-full container-custom items-center">
          <div className="flex-1 relative min-h-screen hidden md:block">
            <img src={Group1} alt="" className="sticky top-20" />
          </div>
          <div className="flex-1 h-full flex flex-col gap-6 relative min-h-screen justify-center py-20">
            {/* <img src={StarLinkSvg} className='h-[80%] pointer-events-none object-cover absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 transform' alt="" /> */}
            <p className="m-0 text-primary-pink font-semibold">Who We Are</p>
            <p className="m-0 text-6xl uppercase font-bebas">Hopesy is a trust-first marketing agency powered by real communities.</p>
            <p className="m-0 font-light">With 500,000+ active users and 100+ national brands, we don’t just help brands get seen — we help them get believed.</p>
            <p className="m-0 text-4xl mt-10 font-bebas uppercase">OUR MISSION</p>
            <p className="m-0 font-light">To turn real trust into lasting growth. Because in today’s world, attention is cheap — but belief is priceless.</p>
            <div className="grid grid-cols-2 gap-8 text-center mt-10">
              <div className='flex flex-col justify-start items-start text-start'>
                <h2 className="text-pink-600 text-6xl font-bebas">500,000+</h2>
                <h3 className="text-lg font-semibold mt-2">Community Users</h3>
                <p className="text-sm text-gray-600 mt-1">
                  500,000+ community users engaged in impactful campaigns and events.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start text-start'>
                <h2 className="text-pink-600 text-6xl font-bebas">100+</h2>
                <h3 className="text-lg font-semibold mt-2">Clients</h3>
                <p className="text-sm text-gray-600 mt-1">
                  100+ satisfied clients across various industries, from startups to established brands.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start text-start'>
                <h2 className="text-pink-600 text-6xl font-bebas">98%</h2>
                <h3 className="text-lg font-semibold mt-2">Trust Score/Testimonial</h3>
                <p className="text-sm text-gray-600 mt-1">
                  98% of our clients report a significant increase in brand visibility and engagement within the first three months.
                </p>
              </div>
              <div className='flex flex-col justify-start items-start text-start'>
                <h2 className="text-pink-600 text-6xl font-bebas">150%</h2>
                <h3 className="text-lg font-semibold mt-2">Average Engagement Growth</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Successfully increased client engagement by an average of 150% through tailored campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-custom mt-10 mb-20">
          <h2 className="text-6xl font-bebas text-center text-black mb-12">
            WHAT MAKES HOPESY DIFFERENT
          </h2>
          <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hopesyDifferent.map((item, i) => (
              <div key={i} className="bg-[#2D2D2D] text-white p-6 flex flex-col rounded-xl text-start">
                <img src={item.img} alt="" className='w-[40px] mb-5' />
                <p className="text-sm mb-4">{item.text1}</p>
                <div className="flex-1"></div>
                <hr className="border-pink-500 my-5" />
                <h3 className="text-2xl font-bebas tracking-wider uppercase h-[70px]">{item.text2}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='relative bg-gradient-to-b from-[#E13CB3] to-[#5E0043]'>
        <img src={Abstract} className='w-full h-full absolute top-0 left-0 opacity-20' alt="" />
        <div className="container-custom py-20 z-10">
          <h2 className="text-3xl sm:text-5xl font-bebas text-white text-center mb-12">
            THE TRUST ADVANTAGE: WHY LEADING BRANDS WIN WITH TRUST
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-white/40 rounded-xl p-6 text-center backdrop-blur-sm bg-white/5">
              <img src={BookLine} className='mb-5' alt="" />
              <p className='text-white text-start'>
                <span className="font-bold">81% of buyers</span> read reviews before deciding (BrightLocal 2023)
              </p>
            </div>
            <div className="border-2 border-white/40 rounded-xl p-6 text-center backdrop-blur-sm bg-white/5">
              <img src={ThumbsDownLine} className='mb-5' alt="" />
              <p className='text-white text-start'>
                <span className="font-bold">Negative reviews can reduce</span> sales by up to 30% (Spiegel Research Center 2017)
              </p>
            </div>
            <div className="border-2 border-white/40 rounded-xl p-6 text-center backdrop-blur-sm bg-white/5">
              <img src={ThumbsUpLine} className='mb-5' alt="" />
              <p className='text-white text-start'>
                <span className="font-bold">Trusted brands are 7× more likely</span> to be purchased (Edelman Trust Barometer 2024)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-50'>
        <div className="py-16 container-custom">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-between">
            
            <div className="flex-1">
              <h2 className="text-2xl sm:text-5xl font-bebas text-black mb-2">
                BUT HERE’S THE REAL WIN:
              </h2>
              <p className="text-gray-700 mb-8">With Hopesy, your brand is not just seen—it’s chosen</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#2D2D2D] text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-1 text-xl">Higher Ratings</h3>
                  <p className="text-sm text-gray-300">With Hopesy, your brand is not just seen—it’s chosen</p>
                </div>

                <div className="bg-[#2D2D2D] text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-1 text-xl">Strong Engagement</h3>
                  <p className="text-sm text-gray-300">Viral growth & lasting impact</p>
                </div>

                <div className="bg-[#2D2D2D] text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-1 text-xl">Positive Reputation</h3>
                  <p className="text-sm text-gray-300">Brand preference in every marketplace</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl rounded-xl h-full p-7 max-w-sm">
              <h3 className="text-pink-600 font-bebas text-5xl mb-2">WE SOLVE THE <br /> TRUST GAP</h3>
              <p className="text-black mb-5">
                We help you build authentic trust that directly drives your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-custom py-20">
            <div className="flex items-center gap-10 w-full justify-between mb-5">
              <div className="w-[80%]">
                <h2 className='uppercase text-5xl font-bebas'>from stranger to believer - hopesy trust funnel</h2>
                <p className='font-light mt-4'>This is the journey every customer goes through — from seeing your product to believing in it. <br /> Hopesy helps you accelerate every stage of this journey.</p>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={goPrev}>
                  <img src={ChevronRight} className='-rotate-180' alt="" />
                </button>
                <button onClick={goNext}>
                  <img src={ChevronRight} alt="" />
                </button>
              </div>
            </div>
            <Carousel ref={carouselRef} responsive={responsive} arrows={false} className='p-4 !pl-1'>
              {sliderContent.map((item, i) => (
                <div key={item.text1} className="group bg-white h-full rounded-lg shadow-lg p-6 w-full max-w-xs text-gray-800 relative">
                  <div className="mb-4">
                    <img src={item.img} className='w-10 grayscale group-hover:grayscale-0' />
                  </div>
                  <div className="absolute top-4 right-4 text-4xl font-bold text-[#F700B1] opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 select-none">
                      0{i + 1}
                  </div>
                  <h3 className="font-bebas text-black uppercase text-2xl mb-1">{item.text1}</h3>
                  <p className="text-sm text-gray-700 mb-4">{item.text2}</p>
                  <h4 className="font-semibold text-sm mb-1">{item.text3}</h4>
                  <p className="text-sm text-gray-700">{item.text4}</p>
                </div>
              ))}
            </Carousel>
        </div>
      </section>
      <section id="what-we-do" className='relative bg-[#111111] rounded-t-3xl'>
          <img src={Abstract2} className='w-full h-full absolute top-0 left-0 opacity-5' alt="" />
          <div className="container-custom flex flex-col lg:flex-row relative py-20 gap-10">
              <div className="flex-1">
                <p className="m-0 text-primary-pink text-2xl mb-2 font-semibold">Our Services</p>
                <p className="m-0 text-white text-6xl font-bebas uppercase mb-10 mt-4">
                  We Do What We <br /> Do Best
                </p>
                <p className='flex-1 text-white text-xl font-light'>
                  Marketing For The Trust Era, "People don’t trust ads. People trust people."
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-5">
                {weDoWhatWeDoBest.map((item) => (
                  <div key={item.title} className="bg-[#2D2D2D99] text-white flex flex-col p-6 rounded-xl w-full">
                    <img src={item.img} className='w-10 mb-5' alt="" />
                    <p className="text-sm text-white mb-6 leading-relaxed">{item.desc}</p>
                    <div className="flex-1"></div>
                    <div className="flex flex-col">
                    <hr className="border-pink-500 mb-4" />
                    <h3 className="text-xl font-bebas uppercase tracking-widest mb-4">{item.title}</h3>
                    <button onClick={() => onOpenModal(item)} className="flex w-fit items-center gap-2 text-sm border border-white px-4 py-2 rounded-full hover:bg-white/30 hover:text-white transition">
                      Detail
                      <img src={ArrowUpRight} alt="" className='' />
                    </button>
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </section>
      <section>
        <div className="container-custom py-20">
          <h2 className='font-bebas text-5xl uppercase mb-10 text-center'>why hopesy outperforms other marketing channels</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg text-sm text-left">
              <thead>
                <tr>
                  <th className="bg-white p-4 font-bold">Key Criteria</th>
                  <th className="text-center bg-pink-100 p-4 font-bold">HOPESY</th>
                  <th className="text-center bg-white p-4 font-bold">INFLUENCER/ ENDORSEMENT</th>
                  <th className="text-center bg-white p-4 font-bold">PAID ADS</th>
                  <th className="text-center bg-white p-4 font-bold">FULL-SERVICE AGENCY (A–Z)</th>
                  <th className="text-center bg-white p-4 font-bold">TV/BILLBOARD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="p-4">Conversion Rate</td>
                  <td className="text-center p-4 bg-pink-50">12–18%</td>
                  <td className="text-center p-4">2–5%</td>
                  <td className="text-center p-4">1–3%</td>
                  <td className="text-center p-4">3–6%</td>
                  <td className="text-center p-4">&lt;1%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4">Cost per User (CPA)</td>
                  <td className="text-center p-4 bg-pink-50">Rp 8K–15K</td>
                  <td className="text-center p-4">Rp 25K–150K</td>
                  <td className="text-center p-4">Rp 15K–60K</td>
                  <td className="text-center p-4">Rp 30K–100K</td>
                  <td className="text-center p-4">&gt;Rp 100K</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4">Trust Level</td>
                  <td className="text-center p-4 bg-pink-50">Very High</td>
                  <td className="text-center p-4">Medium</td>
                  <td className="text-center p-4">Low</td>
                  <td className="text-center p-4">Medium</td>
                  <td className="text-center p-4">Very Low</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4">Durability</td>
                  <td className="text-center p-4 bg-pink-50">Long-Term</td>
                  <td className="text-center p-4">Short-Term</td>
                  <td className="text-center p-4">Ends when stopped</td>
                  <td className="text-center p-4">Medium-Term</td>
                  <td className="text-center p-4">One-Time Branding</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-4">Sales Funnel Coverage</td>
                  <td className="text-center p-4 bg-pink-50">Full Funnel</td>
                  <td className="text-center p-4">Middle Only</td>
                  <td className="text-center p-4">Top Only</td>
                  <td className="text-center p-4">Mid Funnel</td>
                  <td className="text-center p-4">Awareness Only</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#2D2D2D] text-white text-sm p-6 flex items-start gap-2 rounded-b-lg">
              <img src={Information} className='mr-2' alt="" />
              <p className='font-light'>
                The data above is based on a combination of Hopesy’s internal campaign results (2023–2025)
                and cross-referenced with industry research from <br />
                <span className="font-bold">Hubspot, Brightlocal, Nielsen</span> and 
                <span className="font-bold"> Influencer Marketing Hub</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-custom py-20">
          <h2 className='font-bebas text-7xl uppercase mb-10 text-center'>success story</h2>
          <div className="bg-white rounded-3xl p-7 flex flex-col md:flex-row shadow-2xl gap-10 lg:gap-20">
            <div className="flex-1 gap-1 flex-col flex">
              {successStories.map((s) => (
                <button 
                  key={s.name} 
                  onClick={() => setSuccessStory(s.name)} 
                  className={`p-5 rounded-xl hover:bg-[#F8E5F3]/20 font-light text-start ${successStory === s.name ? 'text-[#C4008D] bg-[#F8E5F3]' : 'bg-white'}`}>
                  {s.name}
                </button>
              ))}
            </div>
            <div className="flex-3 grid lg:grid-cols-2 gap-5">
              {successStories.find((i) => i.name === successStory).stories.map((item, i) => (
                <div key={i} className="border h-full border-gray-300 rounded-2xl p-6 max-w-lg bg-white relative">
                  <div className="absolute top-0 right-4 text-9xl text-gray-200 select-none z-0">
                    &ldquo;
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14' id='our-client'>
        <div className="container-custom flex flex-col items-center gap-10">
          <p className="m-0 text-primary-pink text-xl font-semibold">Our Client</p>
          <p className="m-0 text-dark sm:text-4xl lg:text-6xl text-center font-bebas uppercase">
            We have partnered with many Brands to provide insights and solutions.
          </p>
          <div className="bg-gray-200 my-6 h-[3px] w-full"></div>
          <img src={Clients} className='' alt="" />
        </div>
      </section>
      <section className='py-20'>
        <div className="container-custom flex flex-col">
            <h2 className='font-bebas text-5xl uppercase text-center mb-7'>Our Gig Workers are spread throughout Indonesia</h2>
            <div className="flex gap-10">
              <div className="flex-1 flex flex-col gap-10">
                <div className="bg-[#FFE9F94D] border border-[#91006833] rounded-xl p-7 flex gap-5">
                  <div className="flex-1 flex flex-col items-center gap-7">
                    <img src={Male} className="w-[70px]" alt="" />
                    <p className="text-2xl font-semibold text-center">Male</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center gap-7">
                    <img src={Female} className="w-[70px]" alt="" />
                    <p className="text-2xl font-semibold text-center">Female</p>
                  </div>
                </div>
                <div className="bg-[#FFE9F94D] border border-[#91006833] rounded-xl p-7 flex flex-col gap-5 py-10 h-full justify-center">
                  <div className="w-full flex gap-10 items-center">
                    <p className='whitespace-nowrap w-[200px] m-0'>Umur 18 - 24</p>
                    <div className="rounded-full w-full h-[25px] overflow-hidden">
                      <div className="w-full h-full rounded-full bg-[#5E0043]"></div>
                    </div>
                  </div>
                  <div className="w-full flex gap-10 items-center">
                    <p className='whitespace-nowrap w-[200px] m-0'>Umur 25 - 34</p>
                    <div className="rounded-full w-full h-[25px] overflow-hidden">
                      <div className="w-[80%] h-full rounded-full bg-[#910068]"></div>
                    </div>
                  </div>
                  <div className="w-full flex gap-10 items-center">
                    <p className='whitespace-nowrap w-[200px] m-0'>Umur 35 - 44</p>
                    <div className="rounded-full w-full h-[25px] overflow-hidden">
                      <div className="h-full rounded-full w-[70%] bg-[#C92099]"></div>
                    </div>
                  </div>
                  <div className="w-full flex gap-10 items-center">
                    <p className='whitespace-nowrap w-[200px] m-0'>Umur {'>'} 45</p>
                    <div className=" rounded-full w-full h-[25px]">
                      <div className="bg-[#F700B1] w-[50%] h-full rounded-full"></div>
                    </div>
                </div>
              </div>
              </div>
              <div className="flex-3 flex flex-col gap-10">
                <div className="bg-[#FFE9F94D] border border-[#91006833] rounded-xl p-7 flex flex-col gap-5">
                  <img src={Indonesia} className='' alt="" />
                </div>
                <div className="bg-[#FFE9F94D] border border-[#91006833] rounded-xl p-7 flex flex-row gap-5">
                  <p className="text-[#C4008D] uppercase font-bebas text-4xl">TOP CITY</p>
                  <div className="flex-1 flex gap-x-10 flex-wrap">
                    {cities.map((city) => <p key={city} className="text-lg">{city}</p>)}
                  </div>
              </div>
              </div>
            </div>
            </div>
      </section>
      {/* <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14 bg-white' id='our-brand'>
        <div className="container-custom flex flex-col items-start">
          <p className="m-0 text-primary-pink text-xl font-bold">Our Brand</p>
          <p className="m-0 text-dark text-3xl text-center uppercase mt-4 font-bold">Several Brand that we have</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 mt-5">
            {brands.map((brand, i) => (
              <div className="bg-[#FEFAFD] border border-[#91006833] rounded-xl p-3 md:p-7 flex flex-col gap-3" key={i}>
                <img src={brand.img} alt="" className='w-[100px]' />
                <p className="m-0 text-primary-pink text-xl font-semibold">{brand.title}</p>
                <p className="m-0 text-dark opacity-75 text-sm">{brand.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section style={{ filter: showMenu ? "grayscale(1)" : "" }} className='transition duration-300 w-full py-14 relative overflow-hidden' id='contact'>
        <img src={BgContactPng} className='w-full h-full bg-cover absolute top-0 left-0 z-0' alt="" />
        <div className="w-full md:w-[70%] h-full bg-[#910068] bg-opacity-50 absolute top-0 left-0 z-10">
          <img src={StarSvg} alt="" className="absolute star-animation right-[-10px] top-1/4" />
        </div>
        <div className="container-custom flex relative z-20">
            <div className="flex-2 flex flex-col gap-7">
              <p className="m-0 text-white font-bebas text-6xl">Contact Us</p>
              <p className="m-0 text-white font-light">Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team.</p>
              <form onSubmit={handleSubmit} className='grid grid-cols-2 sm:grid-cols-3 gap-7'>
                <input required type="text" name="fullname" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Full Name' />
                <input required type="text" name="phone number" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Phone Number' />
                <input required type="email" name="email" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4' placeholder='Email' />
                <textarea required name="message" className='bg-white bg-opacity-55 rounded-lg text-dark placeholder:text-white py-2 px-4 col-span-2 sm:col-span-3' rows={6} placeholder='Enter message here' />
                <div className="col-span-2 sm:col-span-3 flex justify-end">
                {state.succeeded ? <p className='text-white font-bold'>Success sending your form 🔥</p> : state.submitting ? <p className='text-white font-bold'>Sending...</p> : (
                  <button type='submit' className=' hover:bg-black/15  transition-all duration-200 flex items-center rounded-md border border-solid border-white px-4 py-2 text-white w-fit'>
                  SENT <img src={ArrowUpRight} alt="" className='' />
                </button>
                ) }
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
              <a href="mailto:arman@hopesy.co.id" className="m-0 text-gray-400 font-light flex items-center w-fit">
                <i className="fa-regular fa-envelope mr-2"></i>arman@hopesy.co.id</a>
              <a href="http://instagram.com/_u/hopesy.id" className="m-0 text-gray-400 font-light flex items-center mb-2 w-fit">
                <i className="fa-brands fa-instagram mr-2"></i>Hopesy Id</a>
            </div>
            <div className="">
              <p className="m-0 text-black font-bold text-lg mb-5">Location</p>
              <p className="m-0 text-gray-400 font-light">
                Sovereign Plaza Lantai 21 Suite M25, Jalan Tb Simatupang Kavling 36, Desa/Kelurahan Cilandak Barat, Kec. Cilandak, Kota Adm. Jakarta
                Selatan, Provinsi DKI Jakarta
                Kode Pos: 12430
              </p>
            </div>
        </div>
      </section>
    </Controller>
  )
}

export default App
