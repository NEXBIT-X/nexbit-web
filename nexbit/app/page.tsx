
  'use client';
  import './home.css'
  import Link from "next/link";
  import { useState } from 'react';

  const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return (
      <nav className='nav fixed top-0 left-0 right-0 z-50  backdrop-blur-sm  '>
        <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
          <div className='text-white font-bold text-xl'>NEXBIT</div>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6 lg:gap-8'>
            <Link href="/" className="text-white hover:text-orange-400 transition-colors text-base">
              Home
            </Link>
            <Link href="#Team" className="text-white hover:text-orange-400 transition-colors text-base">
              Team
            </Link>
            <Link href="#Projects" className="text-white hover:text-orange-400 transition-colors text-base">
              Projects
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col space-y-1 p-4">
            <Link 
              href="/" 
              className="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#Team" 
              className="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link 
              href="#Projects" 
              className="text-white hover:text-blue-400 transition-colors py-3 px-4 rounded-md hover:bg-gray-800"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  const Home = () => {
    const team = [
      {
        name: "ABHIJEETH V N",
        role: "Software Developer",
        image: "./team/abhi.gif",
        link:"https://hypervisuals.pages.dev",
        linkedin:"www.linkedin.com/in/abhijeeth-v-n",
        github:"https://github.com/ABHIJEETH-V-N"
      },
      {
        name: "B LAKSHMI NARAYANAN",
        role: "Fullstack Developer",
        image: "./team/ln.jpg",
        link:"",
        linkedin:"https://www.linkedin.com/in/b-lakshmi-narayanan/",
        github:"https://github.com/lakshmi22-2007"
      },
      {
        name: "PAVAN S",
        role: "Fullstack Developer",
        image: "./team/pavan.jpg",
         link:"",
        linkedin:"https://www.linkedin.com/in/pavan-s-1796b6301/",
        github:"https://github.com/Pavan03062006"
      },
      {
        name: "DEV NARAYANAN",
        role: "Software Developer",
        image: "./team/dev.gif",
        link:"",
        linkedin:"https://www.linkedin.com/in/devnarayanan0/",
        github:"https://github.com/devnarayanan0"
      }
    ];
    const Project=[
      {
        name:"Claim",
        description:"A  platform for sharing  ideas securely through blockchain",
        tag:"Web3 D-app",
        image:"data:image/svg+xml,%3csvg%20width='645'%20height='744'%20viewBox='0%200%20645%20744'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.433013'%20y='0.75'%20width='371'%20height='371'%20transform='matrix(0.866025%200.5%200%201%200.0580127%20185.783)'%20fill='url(%23paint0_linear_762_30)'%20stroke='white'/%3e%3crect%20x='0.433013'%20y='0.25'%20width='371'%20height='371'%20transform='matrix(0.866025%20-0.5%200%201%20322.236%20372.217)'%20fill='url(%23paint1_linear_762_30)'%20stroke='white'/%3e%3crect%20x='0.866025'%20width='371'%20height='371'%20transform='matrix(0.866025%20-0.5%200.866025%200.5%200.116025%20186.433)'%20fill='url(%23paint2_linear_762_30)'%20stroke='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_762_30'%20x1='186'%20y1='0'%20x2='186'%20y2='372'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230066FF'/%3e%3cstop%20offset='1'%20stop-color='%23EA8CFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_762_30'%20x1='186'%20y1='0'%20x2='186'%20y2='372'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230066FF'/%3e%3cstop%20offset='1'%20stop-color='%23EA8CFF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_762_30'%20x1='186'%20y1='0'%20x2='186'%20y2='372'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230066FF'/%3e%3cstop%20offset='1'%20stop-color='%23EA8CFF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
      },
      {
        name:"Essence",
        description:"Essence is a Duolingo-inspired app for cultural learning. Instead of teaching languages, it helps users explore traditions, rituals, food, and music from around the world — through AI-powered micro-lessons.",
        tag:"AI",
        image:"https://raw.githubusercontent.com/NEXBIT-X/.github/4d74b40293655ef6ccef4806e5d902016440240c/es.svg"
      },
      {
        name:"G8",
        description:"Comprehensive test platform for conducting gate mock tests",
        tag:"Education",
        image:"./projects/g8.svg"
      },

    ]

    const teamMembers = team.map((member, index) => (
      <div key={index} className="card rounded-xl p-4 sm:p-6 lg:p-8 flex flex-col items-center backdrop-blur-sm  transition-all duration-300 hover:scale-105">
        <img 
          src={member.image} 
          className="w-24 h-24 p-1 rounded-full  " 
          alt={member.name}
        />
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center text-white">{member.name}</h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center">{member.role}</p>
        <hr className="w-full mt-2 sm:mt-3 border-gray-700"/>
        <br />
        <div className='flex text-white gap-2'>
          <Link href={member.link} className='fa-solid fa-link'></Link>
          <Link href={member.linkedin} className='fa-brands fa-linkedin'></Link>
          <Link href={member.github} className="fa-brands fa-github"></Link>
        </div>
      </div>
    ));
    const Projects = Project.map((p, index) => (
      <div key={index} className="card  backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden">
        <img 
          src={p.image} 
          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover" 
          alt={p.name}
        />
        <div className="p-3 sm:p-4 md:p-6">
            <span className="inline-block px-3 py-1 text-sm bg-neutral-600 rounded-full shadow text-white mb-3">
          {p.tag}
        </span>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{p.name}</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 line-clamp-3">{p.description}</p>
          
        </div>
      
      </div>
    ));









    return (
        <div className="min-h-screen w-full bg-black flex flex-col">
          <Nav/>
          
          {/* Hero Section */}
          <div className="pt-30 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.8] drop-shadow-lg mb-4 sm:mb-6 md:mb-8">
                NEX<br/>BIT
              </h1>
              <hr className="border-gray-800 mb-4 sm:mb-6 md:mb-8"/>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mb-6 sm:mb-8 md:mb-12">
                Opensource + Hackathon Community 
              </p>
            </div>
          </div>

          {/* Hero Image Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="hero rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <img height="100%" width="100%" src="./hero.svg"/>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold text-center lg:text-left leading-tight">
                A GROUP OF DEVELOPERS FOCUSED ON BUILDING THE TOOLS OF THE FUTURE
              </h1>
            </div>
          </section>

          {/* Team Section */}
          <section id="Team" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
            <div className="max-w-7xl mx-auto">
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 sm:mb-8'>
                THE MINDS BEHIND NEXBIT™
              </h1>
              <hr className="border-gray-800 mb-8 sm:mb-12"/>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {teamMembers}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="Projects" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
            <div className="max-w-7xl mx-auto">
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 sm:mb-8'>
                Projects
              </h1>
              <hr className="border-gray-800 mb-8 sm:mb-12"/>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {Projects}
              </div>
            </div>
          </section>
            
          {/* Footer */}
          <footer className='card '>
    
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white">
                  NEXBIT
                </h1>
        
          </footer>
        </div>
    );
  }

  export default Home;
