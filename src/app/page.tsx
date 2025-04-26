'use client'
import React, { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { Barlow_Semi_Condensed, Plus_Jakarta_Sans,Oswald } from 'next/font/google';
import {motion, useScroll, useTransform,useMotionValueEvent, useInView, AnimatePresence} from 'framer-motion'
import { TextAnimate } from '@/components/magicui/text-animate';
import Counter from '@/components/animata/counter';
const barlow = Barlow_Semi_Condensed({
  weight: ['700'], // Regular and SemiBold
  subsets: ['latin'],
  display: 'swap',
});

const barlow2 = Barlow_Semi_Condensed({
  weight: ['600'], // Regular and SemiBold
  subsets: ['latin'],
  display: 'swap',
});

const barlowH = Barlow_Semi_Condensed({
  weight: ['700'], // Regular and SemiBold
  subsets: ['latin'],
  display: 'swap',
});


const oswald = Oswald({
  subsets: ['latin'], // Choose appropriate subsets
  weight: ['700'], // Optional: Choose specific font weights
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'], // Adjust the weights as per your needs
});

// Reference to the .items container


function Page() {
  const [into,setInto] = useState(false);
  const [currIntro,setCurrIntro] = useState('');
  const [currIntro2,setCurrIntro2] = useState('');
  const [start,setStart] = useState(false);
  const [currNav,setCurrNav] = useState(0);
  const [spy1,setSpy1] = useState(1);
  const [intial,setIntial] = useState(false);
  const [audio,setAudio] = useState(false);
  const [page2Head,setPage2Head] = useState('HTML CSS JS');
  const introRef = useRef<HTMLSpanElement>(null);
  const refHi = useRef<HTMLHeadingElement>(null);
  const introRef2 = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const sec1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const page3Ref = useRef<HTMLDivElement>(null);
  const hiRef = useRef<HTMLDivElement>(null);
  const outroPageRef = useRef<HTMLDivElement>(null);
  const outroPageTransitionRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);
  const project1 = useRef<HTMLDivElement>(null);
  const project2 = useRef<HTMLDivElement>(null);
  const project1Head = useRef<HTMLParagraphElement>(null);
  const project2Head = useRef<HTMLParagraphElement>(null);
  const js = useRef<HTMLParagraphElement>(null);
  const golang = useRef<HTMLParagraphElement>(null);
  const nodejs = useRef<HTMLParagraphElement>(null);
  const react = useRef<HTMLParagraphElement>(null);
  const webDev = useRef<HTMLHeadingElement>(null);
  const bachlor = useRef<HTMLHeadingElement>(null);
  const ref12 = useRef<HTMLHeadingElement | null>(null);
  const ref10 = useRef<HTMLHeadingElement | null>(null);
  const navForViewers = [
    'For anyone',
    'Recruiters',
    'Client',
    'Engineers',
    'chill guy'
  ]

  const sec1ViewPort = useInView(sec1Ref,{amount:'all'});

  const intros = [
    "Hey there! myself Tanish, A human who can use his brain to build beautiful yet scalable websites according to needs.",

    "Currently i'm doing my Bachlor degree in BCA and looking for internships to grow my practical knowladge in the field.",

    'I can create your dream website for growing your business to exponential hieghts which you were dreaming of.',

    "i'm a Engineer (may be?) in full-stack web-dev but i have a strong sense of taste in frontend (thanks to frameworks 😉) but i can handle backend as well.",

    'I can make beautiful UI for your websites and good backend systems, I can do a lots of cool stuff only if you pay me well 🕵️‍♂️.'
  ]
  
  const intros2 = [
    "In 2023, I started learning the core fundamentals of frontend web development. The raw HTML, CSS, and JavaScript were the foundational concepts that opened the gates to my creativity in frontend engineering.",

    "React was a great framework; it led me to the discovery of components, which are essential for building large-scale websites. After learning React, I switched to Next.js while also learning TypeScript.",

    "After diving into frontend development and grinding for months, I decided to learn backend technologies to elevate my skills. I chose Golang as my backend language because of its efficiency and speed.",

    "With Node.js, I can use JavaScript for both frontend and backend development. This eliminates the need to switch languages, making it easier to build and maintain full-stack applications."
  ]


  const {scrollYProgress} = useScroll({
    target:projectRef,
    offset:['start end','start start']
  });

  const {scrollYProgress:videoScrollYProg} = useScroll({
    target:projectRef,
    offset:['start end','end start']
  });


  const {scrollYProgress:page2ScrollYprog} = useScroll({
    target:page2Ref,
    offset:['start end','end start']
  });
  

  const {scrollYProgress:page3ScrollYprog} = useScroll({
    target:page3Ref,
    offset:['start end','end start']
  });
  
  const {scrollYProgress:outroPageScrollYProg} = useScroll({
    target:outroPageRef,
    offset:['start end','start start']
  }) 
  
  const {scrollYProgress:introPageScrollYProg} = useScroll({
    target:introRef2,
    offset:['start end','start start']
  }) 

  const num1 = useTransform(scrollYProgress,[0.7,0.8],['-220%','0%']);
  const video = useTransform(videoScrollYProg,[0,1],[0,30]);
  const introZ = useTransform(introPageScrollYProg,[0.9,1],[0,50]);
  useMotionValueEvent(video, "change", (latest) => {
    if (latest >= 20) {
      setSpy1(2);
      project1.current?.classList.replace('block','hidden');
      project2.current?.classList.replace('hidden','block');

    } else {
      setSpy1(1);
      project1.current?.classList.replace('hidden','block');
      project2.current?.classList.replace('block','hidden');
    }
  });



 useMotionValueEvent(page2ScrollYprog,"change",(e)=>{
  if (e < 0.4) {
    setPage2Head('HTML CSS JS');
    setSpy1(3);
    setCurrIntro2(intros2[0]);
  } else if (e >= 0.4 && e < 0.6) {
    setPage2Head('REACT: NEXT.Js, Ts');
    setSpy1(4);
    setCurrIntro2(intros2[1]);
  } else if (e >= 0.6) {
    setSpy1(5)
    setPage2Head('Golang');
    setCurrIntro2(intros2[2]);
  } 
  if( e > 0.7 ) {
    setSpy1(6)
    setPage2Head('Node.Js');
    setCurrIntro2(intros2[3]);
  }
 }) 

 useMotionValueEvent(page3ScrollYprog,"change",(e)=>{
  if (e < 0.4) {
    setSpy1(7);
  } else if (e >= 0.4 && e < 0.6) {
    setSpy1(8);
  } else if (e >= 0.6) {
    setSpy1(9)
  } 
  if( e > 0.7 ) {
    setSpy1(10)
  }
 }) 


  useEffect(() => {
    const timer1 = setTimeout(() => setInto(true), 7500);
    const timer4 = setTimeout(()=> setIntial(true),7000);
    const timer2 = setTimeout(() => {
      if (introRef.current) {
        introRef.current.classList.replace('hidden', 'block');
      }
      setStart(true);
      if (refHi.current) {
        refHi.current.classList.add('hidden');
      }
    }, 8500);
  
    const timer3 = setTimeout(() => {
      if (introRef2.current) {
        introRef2.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10000);

    const timerPage1 = setTimeout(()=>{
       if(hiRef.current) hiRef.current.scrollIntoView({behavior:'instant'})
    },0)
  
    // Cleanup on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timerPage1);
    };
  }, []);

  const parent = {
    visible: {
      transition: {
        staggerChildren: 1,
        delayChildren: 1,
      },
    },
  };
  
  const child = {
    hidden: { opacity: 0, x: 20 },
    visible: start? {opacity: 1, x: 0 } : {},
  };


  useEffect(()=>{
   setCurrIntro(intros[currNav])
  },[currNav])
  

  useEffect(() => {
    // Callback function for the observer
    const callback:MutationCallback = (mutations) => {
       new Audio('typingSound.wav').play();
    };

    // Create a MutationObserver instance
    const observer = new MutationObserver(callback);

    // Start observing the .items container
    if(project1Head.current){
       observer.observe(project1Head.current,{
        attributes:true
       })
   
      }
      if(golang.current){
        observer.observe(golang.current,{
         attributes:true
        })
      }   
    if(nodejs.current){
          observer.observe(nodejs.current,{
           attributes:true
          })
        }   
          if(js.current){
            observer.observe(js.current,{
             attributes:true
            });
          }     
            if(react.current){
              observer.observe(react.current,{
               attributes:true
              });
            }   
            if(ref12.current){
              observer.observe(ref12.current,{
               attributes:true
              });
            }
            if(ref10.current){
              observer.observe(ref10.current,{
               attributes:true
              });
            }
            if(webDev.current){
              observer.observe(webDev.current,{
               attributes:true
              });
            }
            if(bachlor.current){
              observer.observe(bachlor.current,{
               attributes:true
              });
            }            
      
    // Cleanup observer on component unmount

  }, []);

  useEffect(()=>{
    const lenis = new Lenis({
      duration:3
    });
    function raf(time: any){
     lenis.raf(time) 
     requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
   },[])


  return (
    <div className=' w-full flex cursor-crosshair justify-center items-center text-black flex-col'>



{/* Percentage page */}
<motion.div initial={{zIndex:50}} animate={{zIndex:-10}} transition={{delay:4.5}} className='fixed bottom-0 h-screen w-full bg-[#F9F6EE]'>
  <motion.div initial={{zIndex:50}} animate={{zIndex:-1}} transition={{delay:4.5}} className='relative flex h-full w-full'>

<span className='absolute flex justify-center items-center bottom-0 right-0'>
<Counter
  direction="up"
  className={`${barlow.className} text-[10rem]`} 
  targetValue={100}
/>
<h1 className={`${plusJakartaSans.className} text-[10rem]`}>%</h1>
</span>

</motion.div>
</motion.div>
{/* Percentage page */}



{/* top blur */}
     <div className='fixed h-[2%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[5px] top-0 z-40 opacity-100'></div>
     <div className='fixed h-[4%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[10px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[6%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[9px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[8%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[6px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[10%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[5px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[12%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[4px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[14%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[3px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[16%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[2px] top-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[18%] w-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-[1px] top-0 z-40 opacity-100'>
     </div>
{/* top blur */}


{/* bottom blur */}
     <div className='fixed h-[2%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[5px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[4%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[10px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[6%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[9px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[8%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[6px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[10%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[5px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[12%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[4px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[14%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[3px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[16%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[2px] bottom-0 z-40 opacity-100'>
     </div>
     <div className='fixed h-[18%] w-full bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[1px] bottom-0 z-40 opacity-100'>
     </div>
{/* bottom blur */}

     <div ref={hiRef} className='overflow-hidden h-[100vh] bg-[#F9F6EE] w-full flex justify-center items-center'>

        <motion.span>
        <motion.h1 ref={refHi}  initial={{opacity:0,filter:'blur(20px)'}} animate={intial? {opacity:0,filter:'blur(30px)'}:{opacity:1,filter:'blur(0px)'}} transition={intial? {duration:1}:{duration:1,delay:5} } className={`${barlow.className} text-[10rem]`}>Hi</motion.h1>
        </motion.span>


 <h1 className='m-0 p-0'>     
      <motion.span
  ref={introRef}    
  className={`hidden  ${barlow2.className} h-full w-full flex-col flex`}

>
<TextAnimate className={`h-full text-[14vw] md:text-[15vw]  text-blue-600 ${barlowH.className}`}  animation="blurInUp" as="span" >
  Tanish Saxena
</TextAnimate>
<span className='opacity-50'>
<TextAnimate className='opacity-50 text-[1.5rem]' animation="blurIn" as="span" >
  Full-Stack 
</TextAnimate>
</span>

<span className='opacity-50'>
<TextAnimate className='opacity-50 text-[1.5rem]' animation="blurIn" as="span" >
  Web-Devloper 
</TextAnimate>
</span>
</motion.span>
</h1>
</div>

{/* intro msg */}
<motion.div initial={{zIndex:0}} whileInView={{zIndex:50}} viewport={{amount:0.9}} ref={introRef2} className='overflow-hidden h-[100vh] bg-[#F9F6EE] w-full flex flex-col justify-center items-center gap-5'>
  <span className={`${barlow2.className} text-[3vw] md:text-[1.5vw] flex gap-5`}>
    {navForViewers.map((e,idx)=>(
    <motion.h1 style={currNav === idx? {opacity:'100%'} : {opacity:'30%'}} onClick={()=>setCurrNav(idx)} key={idx} className='opacity-50 cursor-pointer'>{e}</motion.h1>
  ))}</span>

  <span className={`${barlow2.className} text-[12vw] sm:text-[9vw] md:text-[6vw] leading-[1] text-center  w-[70vw]`}>
    <TextAnimate animation="blurIn">
      {currIntro}
    </TextAnimate>
    </span>
</motion.div>
{/* intro msg */}

{/* projects */}
 <div  ref={projectRef} className='relative  bg-[#F9F6EE] h-[190vh]  md:h-[290vh] w-full flex md:flex-row flex-col md:px-16'>
 
  <h1 className='text-[13vw] absolute w-full font-mono opacity-50 text-center mt-[2rem] md:mt-0'>Projects</h1>


  <motion.div  initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{amount:0.2}}  ref={sec1Ref} className='sticky  top-[5rem] sm:top-[1rem] md:top-[15vw] lg:top-0 w-[50vw] h-[100vw] md:w-[20vw] md:h-[20vw] pt-16  justify-center md:flex flex-col pl-2 z-40'>
    <motion.h1  className={`${barlow2.className} md:text-[10rem] text-[14vw] leading-[1]`}>1.</motion.h1>


  <div className='flex flex-col'>
  <motion.p ref={project1Head} transition={{duration:0.3}} animate={ spy1 === 1? {opacity:1} : {opacity:0.3}} className={`${barlow2.className} text-lg text-[3vw]`}>Anime-Streaming Site</motion.p>

  <motion.p ref={project2Head}  transition={{duration:0.3}}  animate={ spy1 === 2? {opacity:1} : {opacity:0.3}}className={`${barlow2.className} text-lg text-[3vw]`}>E-Commerce Site</motion.p>
  </div>

  </motion.div>
  



  <div ref={videoRef} className='relative flex justify-center items-center w-full h-full'>
    <motion.div whileHover={{scale:0.95,cursor:'help'}} initial={{opacity:0,filter:"blur(20px)"}}
    whileInView={{opacity:1,filter:'blur(0px)'}} viewport={{amount:0.9}}
    className='sticky md:top-0 top-[50vw]  h-[40vw]  w-[75vw] rounded-lg flex flex-col md:justify-start justify-center items-center '> 
       <div className='relative h-full w-full flex justify-center items-center md:items-start gap-5 py-[2vw] 3xl:py-[15vw]'>
        <div className='flex justify-center  md:items-center md:h-[95vh]'>
       <AnimatePresence>
        <motion.div key={1156846} ref={project1} initial={{opacity:0,filter:'blur(20px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}} exit={{opacity:0,filter:'blur(20px)'}}  style={{zIndex:20}} className='absolute rounded-xl overflow-hidden h-[55vw] w-[95vw]  md:h-full md:w-full  justify-center items-center'>
        <video src="/project1.mp4" loop autoPlay muted className='object-cover rounded-xl'></video>
        </motion.div>

        <motion.div key={264864} ref={project2} initial={{opacity:0,filter:'blur(20px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}} exit={{opacity:0,filter:'blur(20px)'}} style={{zIndex:video}} className='absolute  h-[55vw] w-[95vw]  md:h-full md:w-full rounded-xl overflow-hidden hidden'>
        <video src="/project2.mp4" loop autoPlay muted className='object-cover rounded-xl'></video>
        </motion.div>
        </AnimatePresence>
        </div>
        </div>
    </motion.div>
    
  </div>

 </div>
 {/* projects */}

{/* Dexterity */}
  <div ref={page2Ref} className='relative bg-[#F9F6EE] h-[350vh] w-full flex md:px-16'> 
  <h1 className='text-[13vw] absolute w-full font-mono opacity-50 text-center z-20 mt-[8.5rem] md:mt-0'>Dexterity</h1>

  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{amount:0.2}}  className='sticky top-0 md:top-[15vw] lg:top-0 w-[50vw] h-[100vw] md:w-[20vw] md:h-[20vw] pt-[9.5rem]  justify-center md:flex items-center flex-col pl-2 z-40'>
    
  <motion.h1  className={`${barlow2.className} md:text-[10rem] text-[14vw] leading-[1] w-full`}>2.</motion.h1>
  
  <div className='flex  w-full flex-col'>  
  <div className='flex flex-col'>
  <motion.h1   className={`${barlow2.className} md:text-lg text-md`}>frontend</motion.h1>
  <motion.p ref={js} transition={{duration:0.3}} animate={ spy1 === 3? {opacity:1} : {opacity:0.3}} className={`font-mono  w-full `}>Vanila:- HTML,CSS,JS</motion.p>
  <motion.p ref={react} transition={{duration:0.3}} animate={ spy1 === 4? {opacity:1} : {opacity:0.3}} className={`font-mono w-full`}>React:-Next.Js,Ts</motion.p>
  </div>

  <div className='flex flex-col'>
  <motion.h1   className={`${barlow2.className} text-lg `}>Backend</motion.h1>
  <motion.p ref={golang} transition={{duration:0.3}} animate={ spy1 === 5? {opacity:1} : {opacity:0.3}} className={`font-mono`}>Golang</motion.p>
  <motion.p ref={nodejs} transition={{duration:0.3}} animate={ spy1 === 6? {opacity:1} : {opacity:0.3}} className={`font-mono`}>Node.Js</motion.p>
  </div>

  </div>

  </motion.div>

 <motion.div initial={{zIndex:0}} whileInView={{zIndex:50}} viewport={{amount:1}} className='sticky top-[5rem] sm:top-16 md:top-10 w-full h-[80vh] flex flex-col z-10 mt-96 pt-14 md:px-20 px-10  overflow-hidden'>
   <h1 className={`${barlow.className} w-full text-3xl  md:text-7xl`}>{page2Head}</h1>
   <div className='flex flex-col gap-10'>


    <div className='flex flex-col gap-5'> 
    <h1 className='opacity-70'>Updated Apr.2025</h1>
    <div className={`${plusJakartaSans.className} text-sm md:text-lg`}>
    <TextAnimate animation="blurIn" startOnView={false} as="h1">
     {currIntro2}
    </TextAnimate>
    </div>
    </div>

{/* images for logo */}
     <div className='flex gap-5 items-center w-full'>

      <div className='flex justify-center items-center'>     
        <svg  className='w-[15vw] md:w-[12rem]' style={spy1 === 3? {display:'block'} : {display:'none'}} width={200} height={200}viewBox="-52.5 0 361 361" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid"><path d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z" fill="#E44D26"/><path d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z" fill="#F16529"/><path d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z" fill="#EBEBEB"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z"/><path d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z" fill="#FFF"/></svg>

     <svg className='w-[15vw] md:w-[12rem]' style={spy1 === 3? {display:'block'} : {display:'none'}} width={200} height={200} viewBox="-52.5 0 361 361" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z" fill="#264DE4">

</path>
        <path d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z" fill="#2965F1">

</path>
        <path d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z" fill="#EBEBEB">

</path>
        <path d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z" fill="#EBEBEB">

</path>
        <path d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z" fill="#EBEBEB">

</path>
        <path d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z" fill="#000000">

</path>
        <path d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z" fill="#000000">

</path>
        <path d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z" fill="#000000">

</path>
        <path d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z" fill="#FFFFFF">

</path>
    </g>
</svg>

<svg className='w-[15vw] md:w-[12rem]'   style={spy1 === 3? {display:'block'} : {display:'none'}} width={180} height={180} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
        <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E">

</path>
        <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000">

</path>
        <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000">

</path>
    </g>
</svg>
</div>

{/* for react nextjs */}

<div  className='flex h-full w-full  gap-3 ' style={spy1 === 4? {} : {display:'none'}} >
<svg className='w-[15vw] md:w-[12rem]' style={spy1 === 4? {display:'block'} : {display:'none'}} width={200} height={200} viewBox="0 -14 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
    <g>
        <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF">

</path>
    </g>
</svg>

<svg className='w-[15vw] md:w-[12rem]' fill="#000000" style={spy1 === 4? {display:'block'} : {display:'none'}} width={200} height={200} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
</svg>

<svg className='w-[15vw] md:w-[12rem]' style={spy1 === 4? {display:'block'} : {display:'none'}} width={200} height={200}  viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
	<g>
		<polygon fill="#007ACC" transform="translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) " points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256">

</polygon>
		<path d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z" fill="#FFFFFF" transform="translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) ">

</path>
		<path d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z" fill="#FFFFFF" transform="translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) ">

</path>
	</g>
</svg>
</div>
{/* golang */}
<div style={spy1 === 5? {display:'block'} : {display:'none'}} className='h-full w-full flex'>
<svg className='w-[30vw]' style={spy1 === 5? {display:'block'} : {display:'none'}} width={300} height={300}  viewBox="0 -160 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
    <g>
        <path d="M292.533152,13.2950639 L293.657233,14.0455076 C306.869315,22.7704678 316.342129,34.7361275 322.574244,49.1946331 C324.069951,51.4381943 323.072813,52.6846171 320.081398,53.4324709 L315.017741,54.7277932 C303.571167,57.6768058 294.487155,60.1566573 283.191384,63.10567 L276.74841,64.7843862 C274.428264,65.3583626 273.787695,65.1170696 271.320433,62.3073717 L270.972336,61.9081465 C267.453024,57.9195933 264.816991,55.2559574 260.154613,52.878088 L259.255961,52.4353326 C243.551033,44.7075107 228.344673,46.9510719 214.135452,56.1746012 C197.184101,67.1431227 188.459141,83.3466202 188.708425,103.538671 C188.95771,123.481438 202.668362,139.93422 222.361843,142.67635 C239.313195,144.919911 253.522416,138.937081 264.740222,126.223568 C266.983783,123.481438 268.978059,120.490023 271.470905,117.000039 L223.358982,117.000039 C218.124006,117.000039 216.877583,113.759339 218.622575,109.521501 L219.486848,107.487264 C222.690544,100.033179 227.659682,89.3185944 230.887235,83.1925665 L231.591356,81.8743455 C232.452883,80.3801337 234.202861,78.3609287 237.568203,78.3609287 L317.791861,78.3603482 C321.394911,66.9456209 327.24084,56.159659 335.038473,45.9539335 C353.236247,22.0226141 375.17329,9.55838523 404.838154,4.32340907 C430.265181,-0.163713323 454.196501,2.32913245 475.884259,17.0369225 C495.577741,30.4982897 507.792685,48.6960639 511.033385,72.6273834 C515.271222,106.280802 505.549124,133.702105 482.365658,157.134856 C465.912876,173.836922 445.720825,184.306875 422.537359,189.043282 C415.806676,190.289704 409.075992,190.538989 402.594593,191.286843 C379.909697,190.788274 359.219077,184.306875 341.769156,169.3498 C329.496056,158.740849 321.041799,145.701725 316.840932,130.522127 C313.926247,136.409796 310.44016,142.04853 306.370746,147.412757 C288.422257,171.094792 264.989506,185.802582 235.324641,189.791135 C210.894753,193.031835 188.209856,188.295428 168.26709,173.338353 C149.820031,159.378417 139.350079,140.931358 136.607949,117.997177 C133.367249,90.8251575 141.344356,66.3952689 157.797138,44.9567952 C175.496343,21.7733295 198.929093,7.06553943 227.59682,1.8305633 C250.59563,-2.32879605 272.633891,0.235689133 292.533152,13.2950639 L292.533152,13.2950639 Z M411.120284,49.0171223 L410.322415,49.1946331 C387.138949,54.4296092 372.181875,69.1373993 366.697614,92.5701496 C362.210492,112.014347 371.683306,131.707829 389.631795,139.684935 C403.342447,145.667765 417.053099,144.919911 430.265181,138.189228 C449.958663,127.96856 460.6779,112.014347 461.924323,90.575873 C461.675038,87.3351735 461.675038,84.8423277 461.176469,82.3494819 C456.739764,57.9476028 434.511926,44.025432 411.120284,49.0171223 L411.120284,49.0171223 Z M116.415898,94.5644262 C117.413036,94.5644262 117.911605,95.3122799 117.911605,96.3094183 L117.413036,102.292248 C117.413036,103.289387 116.415898,104.03724 115.668044,104.03724 L61.3240061,103.787956 C60.3268678,103.787956 60.0775833,103.040102 60.5761524,102.292248 L64.0661365,96.0601337 C64.5647057,95.3122799 65.561844,94.5644262 66.5589823,94.5644262 L116.415898,94.5644262 Z M121.900159,71.6302451 C122.897297,71.6302451 123.395866,72.3780988 123.146581,73.1259525 L121.152305,79.1087824 C120.90302,80.1059207 119.905882,80.6044899 118.908744,80.6044899 L0.99713831,80.8537744 C0,80.8537744 -0.249284578,80.3552053 0.249284578,79.6073515 L5.48426071,72.8766679 C5.98282987,72.1288142 7.22925276,71.6302451 8.22639107,71.6302451 L121.900159,71.6302451 Z M134.862957,48.6960639 C135.860095,48.6960639 136.109379,49.4439176 135.61081,50.1917714 L131.372973,56.6731704 C130.874403,57.4210241 129.62798,58.1688779 128.880127,58.1688779 L38.6391096,57.9195933 C37.6419713,57.9195933 37.3926867,57.4210241 37.8912558,56.6731704 L43.126232,49.9424868 C43.6248011,49.1946331 44.871224,48.6960639 45.8683623,48.6960639 L134.862957,48.6960639 Z" fill="#00ACD7" fillRule="nonzero">

</path>
    </g>
</svg>
</div>

{/* node.js */}
<div style={spy1 === 6? {} : {display:'none'}} className='h-full
 w-full flex '>
<svg className='w-[30vw]' style={spy1 === 6? {display:'block'} : {display:'none'}} width={200} height={200} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"/>
<path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"/>
</svg>
</div>

     </div>

   </div>
 </motion.div>

  </div>
{/* Dexterity */}

{/* TimeLine */}

<div    ref={page3Ref}  className='relative bg-[#F9F6EE] h-[350vh] md:pb-40 w-full flex md:px-16 pt-[10.5rem] md:pt-0'> 
  <h1 className='text-[13vw] absolute w-full font-mono opacity-50 text-center z-20 mt-[7.7rem] md:mt-0 '>Timeline</h1>

  <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{amount:0.1}} ref={sec1Ref} className='sticky top-0  md:top-[15vw] lg:top-0 w-[40vw] sm:w-[20vw] h-[100vw] md:w-[20vw] md:h-[20vw] pt-[9.5rem]  justify-center md:flex items-center flex-col z-40 pl-2'>
  <motion.h1  className={`${barlow2.className} md:text-[10rem] text-[14vw] leading-[1] w-full`}>3.</motion.h1>

  <div className='flex flex-col w-full'>  
  <motion.h1 ref={webDev} transition={{duration:0.3}} animate={spy1 === 7? {opacity:1} : {opacity:0.3}}   className={`${barlow2.className} opacity-50 md:text-lg text-[3vw] `}>Web-Dev</motion.h1>
    <motion.h1 ref={bachlor} transition={{duration:0.3}} animate={spy1 === 8? {opacity:1} : {opacity:0.3}}   className={`${barlow2.className} opacity-50 md:text-lg text-[3vw] `}>Bachlor Degree</motion.h1>
    <motion.h1 ref={ref12} transition={{duration:0.3}} animate={spy1 === 9? {opacity:1} : {opacity:0.3}}    className={`${barlow2.className} opacity-50 md:text-lg text-[3vw]`}>12th Percentage</motion.h1>
    <motion.h1 ref={ref10} transition={{duration:0.3}} animate={spy1 === 10? {opacity:1} : {opacity:0.3}}   className={`${barlow2.className} opacity-50 md:text-lg text-[3vw]`}>10th Percentage</motion.h1>

  </div>

  </motion.div>

 <motion.div initial={{zIndex:0}} whileInView={{zIndex:50}} viewport={{amount:1}} className='sticky top-[20vw] sm:top-10 w-full h-[80vh] flex flex-col z-10 mt-96 md:px-20 px-10  md:gap-[5rem] gap-3 py-10 pt-16'>

   <motion.h1 transition={{duration:0.3}} animate={spy1 === 7? {opacity:1} : {opacity:0.1}}  className={`${plusJakartaSans.className} w-full  md:text-[4.5vw] lg:text-6xl text-[5vw] opacity-50`}>2024-Present:- Web-Dev.</motion.h1>
   <motion.h1 transition={{duration:0.3}} animate={spy1 === 8? {opacity:1} : {opacity:0.1}}  className={`${plusJakartaSans.className} w-full  md:text-[4.5vw] lg:text-6xl text-[5vw] opacity-50`}>2023-2024:- Persued BCA.</motion.h1>
   <motion.h1 transition={{duration:0.3}} animate={spy1 === 9? {opacity:1} : {opacity:0.1}}  className={`${plusJakartaSans.className} w-full  md:text-[4.5vw] lg:text-6xl text-[5vw] opacity-50`}>2022-2023:- 12th Boards:70%.</motion.h1>
   <motion.h1 transition={{duration:0.3}} animate={spy1 === 10? {opacity:1} : {opacity:0.1}}  className={`${plusJakartaSans.className} w-full  md:text-[4.5vw] lg:text-6xl text-[5vw] opacity-50`}>2020-2021:- 10th Boards:70%.</motion.h1>
 </motion.div>

  </div>

<motion.div viewport={{amount:0.7}} onViewportEnter={()=>{contactPageRef.current?.classList.replace('-z-10','z-50')}} onViewportLeave={()=>{contactPageRef.current?.classList.replace('z-50','-z-10')}}   ref={outroPageRef} className='relative h-[150vh] w-full bg-transparent flex flex-col'>

{/* top blur */}
<motion.div  ref={outroPageTransitionRef} className='flex flex-col'>

<motion.div  className='absolute h-[1%] w-full bg-gradient-to-t from-black/30 to-transparent backdrop-blur-[5px] top-0 z-50 opacity-100'>
     </motion.div>
     <motion.div  className='absolute h-[6%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[10px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div  className='absolute h-[8%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[9px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div   className='absolute h-[10%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[6px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div  className='absolute h-[12%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[5px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div  className='absolute h-[14%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[4px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div className='absolute h-[16%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[3px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div  className='absolute h-[18%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[2px] top-0 z-40 opacity-100'>
     </motion.div>
     <motion.div className='absolute h-[20%] w-full bg-gradient-to-b from-black/30 to-transparent backdrop-blur-[1px] top-0 z-40 opacity-100'>
     </motion.div>
     </motion.div>
{/* top blur */}



</motion.div>


  <motion.div  ref={contactPageRef}   className='fixed bottom-0 h-[100vh] w-full -z-10 flex flex-col bg-[#F9F6EE]'>
  <h1 className={`${plusJakartaSans.className} md:text-[9rem] text-[12vw]  leading-[1] md:pt-24  pt-32  md:px-16 px-5 `}>Let’s work on your project together.</h1>
    
    <div className={`${plusJakartaSans.className} h-full w-full px-5 md:px-0 md:pl-[65rem] pt-8 gap-10 flex flex-col`}>
      <span className={`${oswald.className} text-md`}>Contact me for your website work.</span>


   <span className='flex gap-20'>
      <div className='flex flex-col'>
        <h1 className={`${barlow.className} opacity-90 text-sm`}>CONTACT</h1>
        <span className='font-mono opacity-40'>saxenakaju7@gamil.com</span>
      </div>
      <div className='flex flex-col cursor-pointer'>
        <h1 className={`${barlow.className} opacity-90 text-sm`}>SOCIAL</h1>
        <span  className='font-mono opacity-40 cursor-pointer'>Linkdin</span>
        <span className='font-mono opacity-40 cursor-pointer'>Peerlist</span>
        <span className='font-mono opacity-40 cursor-pointer'>insta</span>
      </div>
      </span>
    </div>
  </motion.div>
    </div>

    
  )
}

export default Page;