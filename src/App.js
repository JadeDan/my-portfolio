
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Smartphone, MapPin, Phone, Award, Briefcase, GraduationCap, Star, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Profile from "./picture/Profile.png";

import Chatbot1 from "./picture/chatbot/Ardi1.png";
import Chatbot2 from "./picture/chatbot/Ardi2.png";
import Chatbot3 from "./picture/chatbot/Ardi3.png";
import Chatbot4 from "./picture/chatbot/Ardi4.png";
import Chatbot5 from "./picture/chatbot/Ardi5.png";

import BullyProof1 from "./picture/bullyproof/bullyproof-1.png";
import BullyProof2 from "./picture/bullyproof/bullyproof-2.png";
import BullyProof3 from "./picture/bullyproof/bullyproof-admin1.png";
import BullyProof4 from "./picture/bullyproof/bullyproof-admin2.png";
import BullyProof5 from "./picture/bullyproof/bullyproof-admin3.png";
import BullyProof6 from "./picture/bullyproof/bullyproof-admin4.png";

import ReallifeBGC1 from "./picture/reallife-bgc/reallife1.png";
import ReallifeBGC2 from "./picture/reallife-bgc/reallife2.png";
import ReallifeBGC3 from "./picture/reallife-bgc/reallife3.png";
import ReallifeBGC4 from "./picture/reallife-bgc/reallife4.png";


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Project Images - Replace these with your actual imports
  const projectImages = {
    bullyproof: [
      BullyProof1,
      BullyProof2,
      BullyProof3,
      BullyProof4,
      BullyProof5,
      BullyProof6
    ],
    chatbot: [
      Chatbot1,
      Chatbot2,
      Chatbot3,
      Chatbot4,
      Chatbot5
    ],
    reallifeBGC: [
      ReallifeBGC1,
      ReallifeBGC2,
      ReallifeBGC3,
      ReallifeBGC4
    ]
  };

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "BullyProof Mobile App",
      description: "Collaborated with a team to develop a mobile app for reporting cyberbullying incidents. Focused on creating a safe and user-friendly platform for students.",
      tech: ["Mobile Development", "UI/UX Design", "Team Collaboration"],
      image: projectImages.bullyproof[0],
      period: "May 2025",
      detailedDescription: "BullyProof is a comprehensive mobile application designed to combat cyberbullying in educational environments. Working with a dedicated team, we created a secure platform that allows students to report incidents anonymously while providing administrators with powerful tools to address and prevent bullying.",
      features: [
        "Anonymous reporting system with secure data handling",
        "Real-time incident tracking and status updates",
        "User-friendly interface designed for students of all ages",
        "Administrative dashboard for school officials",
        "Evidence collection tools including screenshots and text logs",
        "Support resource integration and counseling referrals"
      ],
      gallery: projectImages.bullyproof,
      role: "UI/UX Designer & Mobile Developer",
      team: "4 developers, 2 designers, 1 project manager",
      challenges: "Ensuring user anonymity while maintaining data integrity, creating an intuitive interface for sensitive reporting, and implementing robust security measures."
    },
    {
      title: "AI-Powered Chatbot UI/UX",
      description: "Designed the user interface and experience for an AI-powered chatbot for employees and clients. Focused on intuitive layouts and user flow to improve usability.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"],
      image: projectImages.chatbot[0],
      period: "May 2025",
      detailedDescription: "Developed a sophisticated chatbot interface that bridges the communication gap between AI technology and human users. The design emphasizes clarity, accessibility, and natural conversation flow to create an engaging user experience for both employees and clients.",
      features: [
        "Conversational UI with natural language processing",
        "Multi-platform responsive design",
        "Real-time typing indicators and status updates",
        "File sharing and document management integration",
        "Customizable chat themes and accessibility options",
        "Analytics dashboard for conversation insights"
      ],
      gallery: projectImages.chatbot,
      role: "Lead UI/UX Designer",
      team: "2 designers, 3 developers, 1 AI specialist",
      challenges: "Creating intuitive interactions for complex AI responses, designing for multiple user types with different needs, and ensuring the interface remains clean while handling rich media content."
    },
    {
      title: "Reallife BGC UI/UX",
      description: "Designed the UI/UX of the Real Life BGC scholarship website, creating a seamless application process for students and an efficient dashboard for administrators to manage applications.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"],
      image: projectImages.reallifeBGC[0],
      period: "May 2023",
      detailedDescription: "Real Life BGC scholarship platform revolutionizes how students apply for educational funding. The project focused on eliminating barriers in the application process while providing administrators with comprehensive tools to evaluate and manage scholarship programs effectively.",
      features: [
        "Streamlined multi-step application process",
        "Document upload and verification system",
        "Administrative review and approval workflow",
        "Student progress tracking and notifications",
        "Scholarship matching algorithm based on eligibility",
        "Comprehensive reporting and analytics tools"
      ],
      gallery: projectImages.reallifeBGC,
      role: "UI/UX Designer",
      team: "3 designers, 4 developers, 2 stakeholders",
      challenges: "Simplifying complex scholarship requirements into user-friendly forms, ensuring accessibility for users with varying technical skills, and creating an efficient review system for administrators."
    }
  ];

  const skills = [
    { 
      category: "Frontend Development", 
      icon: <Code className="w-6 h-6 text-blue-700" />,
      items: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
      ] 
    },
    { 
      category: "Programming & Development", 
      icon: <Smartphone className="w-6 h-6 text-slate-700" />,
      items: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git Bash", logo: "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons/git/git-original.svg" }
      ] 
    },
    { 
      category: "Design & Tools", 
      icon: <Palette className="w-6 h-6 text-emerald-700" />,
      items: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
      ] 
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Makati",
      period: "2023 - 2025",
      track: "Application Development Elective Track",
      achievements: ["Dean's Lister for 1st Semester in 3rd Year", "Dean's Lister for 1st Semester in 4th Year"]
    },
    {
      degree: "Diploma in Application Development",
      school: "University of Makati", 
      period: "2020 - 2023",
      achievements: ["Dean's Lister 2nd Semester for both 2nd Year and 3rd Year"]
    },
    {
      degree: "Information Communication Technology",
      school: "Asia Source College of Arts and Technology",
      period: "2018 - 2020",
      track: "Computer Programming"
    }
  ];

  const experience = [
    {
      title: "DESO Technical Support",
      company: "Department of Education Supervisor Official",
      period: "2025 Mid-Year Election",
      location: "City Government of Makati",
      description: "Provided technical support for Automated Counting Machines (ACM) during the 2025 mid-year election. Assisted election officers in setup, operation, and troubleshooting."
    },
    {
      title: "UI/UX Designer",
      company: "Real Life BGC",
      period: "May 2025",
      description: "Designed user interface and experience for an AI-powered chatbot for employees and clients. Focused on intuitive layouts and user flow."
    },
    {
      title: "Intern UI/UX Designer & IT Support",
      company: "Ardent Paralegal and Business Solution Inc.",
      period: "May 2024",
      description: "Contributed to visual and functional design of digital experiences. Assisted in hardware troubleshooting and network setup."
    }
  ];

  // Calculate parallax values - only for desktop
  const getParallaxStyle = (direction = 1, intensity = 0.2) => {
    if (isMobile) {
      return { transform: 'none', opacity: 1 };
    }
    
    return {
      transform: `translateX(${Math.max(Math.min(scrollY * intensity * direction, 100), -100)}px)`,
      opacity: Math.max(1 - scrollY * 0.0003, 0.7) // Much slower fade
    };
  };

  // Navigation functions for project gallery carousel
  const nextImage = (gallery) => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = gallery.length - 3;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const previousImage = (gallery) => {
    setCurrentImageIndex((prevIndex) => {
      const maxIndex = gallery.length - 3;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  // Reset image index when opening a new project
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Professional geometric background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #1e293b 1px, transparent 1px),
            linear-gradient(180deg, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'slowFloat 20s ease-in-out infinite'
        }} />
      </div>

      {/* Floating professional elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-2 h-2 bg-blue-600 rounded-full"
          style={{
            animation: 'professionalFloat 15s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-3 h-3 bg-slate-700 rounded-sm rotate-45"
          style={{
            animation: 'professionalFloat 18s ease-in-out infinite',
            animationDelay: '5s'
          }}
        />
        <div 
          className="absolute bottom-40 left-20 w-4 h-4 border border-emerald-600 rounded-full"
          style={{
            animation: 'professionalFloat 22s ease-in-out infinite',
            animationDelay: '10s'
          }}
        />
        <div 
          className="absolute top-60 left-1/2 w-1 h-8 bg-blue-600 rounded-full"
          style={{
            animation: 'professionalFloat 16s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute bottom-60 right-1/4 w-6 h-1 bg-emerald-600 rounded-full"
          style={{
            animation: 'professionalFloat 14s ease-in-out infinite',
            animationDelay: '7s'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes professionalFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(-5px) rotate(-3deg); opacity: 0.4; }
          75% { transform: translateY(-15px) translateX(15px) rotate(8deg); opacity: 0.7; }
        }
        
        @keyframes slowFloat {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(20px) translateY(-10px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">
              Jade Bantilo
            </h1>
            
            <div className="hidden md:flex space-x-12">
              {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:scale-105 px-2 py-1 ${
                    activeSection === item ? 'text-blue-700 font-semibold' : 'text-gray-700 hover:text-blue-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200">
              <div className="py-4 space-y-2">
                {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-6 py-3 capitalize text-gray-700 hover:text-blue-700 hover:bg-gray-50 transition-all duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
            {/* Photo Section - Left Side */}
            <div 
              className="flex justify-center lg:justify-start order-1"
              style={getParallaxStyle(-1, 0.15)}
            >
              <div className="relative group">
                {/* Professional decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-300 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-700 opacity-10 rounded-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
  
                
                {/* Main photo container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-white border border-gray-200">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    {/* Profile photo */}
                    <img
                      src={Profile}
                      alt="Jade Bantilo - Professional Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div 
              className="order-2 text-center lg:text-left lg:pl-8"
              style={getParallaxStyle(1, 0.15)}
            >
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-base font-medium mb-6">
                  👋 Hello, I'm
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-blue-700">
                    Jade Bantilo
                  </span>
                </h1>
                
                <div className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-3 font-semibold">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                  UI/UX Designer
                </div>
                
                <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional digital experiences and solving real-world problems through technology. Dean's Lister with hands-on experience in mobile app development and user-centered design.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 mb-10 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-blue-700" />
                  <span className="text-base md:text-lg">Taguig City</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-slate-700" />
                  <span className="text-base md:text-lg">09053012761</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start mb-8 md:mb-10">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 md:px-10 py-4 md:py-5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-base md:text-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 md:px-10 py-4 md:py-5 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-500 hover:text-slate-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-medium text-base md:text-lg"
                >
                  Get In Touch
                </button>
              </div>

              {/* Professional badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                <div className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-white border border-emerald-200 rounded-lg shadow-sm">
                  <Palette className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 mr-2 md:mr-3" />
                  <span className="text-sm md:text-base font-medium text-gray-700">UI & UX Designer</span>
                </div>
                <div className="flex items-center px-4 md:px-6 py-2 md:py-3 bg-white border border-blue-200 rounded-lg shadow-sm">
                  <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mr-2 md:mr-3" />
                  <span className="text-sm md:text-base font-medium text-gray-700">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator - hide on mobile when scrolled */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${isMobile && scrollY > 100 ? 'opacity-0' : 'opacity-100'}`}>
            <div className="animate-bounce">
              <ChevronDown size={isMobile ? 24 : 32} className="text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">Crafting Digital Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm Jade Daniele M. Bantilo, a fresh graduate from the University of Makati with a Bachelor of Science in Computer Science, specializing in Application Development. My academic journey has provided me with a solid foundation in programming, problem-solving, and building software solutions tailored to real-world needs.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Throughout my studies, I've worked on meaningful projects such as Real Life BGC's scholarship application platform and BullyProof, a mobile application designed to report cyberbullying incidents. These experiences allowed me to apply my technical knowledge in both web and mobile development while also strengthening my teamwork, research, and design skills.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
                I am particularly passionate about front-end development and the challenge of creating applications that are not only functional but also engaging and user-friendly. As I continue my professional journey, I am eager to learn from real-world experiences, collaborate with innovative teams, and grow into a well-rounded software developer.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center mb-3">
                      {skill.icon}
                      <h4 className="font-medium text-gray-700 ml-2 text-sm md:text-base">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {skill.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center px-3 md:px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-xs md:text-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group transform hover:scale-105 hover:bg-white"
                        >
                          <img 
                            src={item.logo} 
                            alt={item.name} 
                            className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 group-hover:scale-110 transition-transform duration-200"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="education" className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mr-2" />
                Education
              </h3>
              <div className="space-y-4 md:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-2">{edu.degree}</h4>
                    <p className="text-blue-700 font-medium mb-1 text-sm md:text-base">{edu.school}</p>
                    <p className="text-gray-500 text-xs md:text-sm mb-3">{edu.period}</p>
                    {edu.track && <p className="text-slate-600 text-xs md:text-sm mb-3">Track: {edu.track}</p>}
                    {edu.achievements && (
                      <div className="mt-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-xs md:text-sm text-emerald-600 mb-1">
                            <Star size={14} className="mr-2" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-slate-700 mr-2" />
                Experience
              </h3>
              <div className="space-y-4 md:space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-2">{exp.title}</h4>
                    <p className="text-slate-700 font-medium mb-1 text-sm md:text-base">{exp.company}</p>
                    <div className="flex flex-col md:flex-row md:items-center text-gray-500 text-xs md:text-sm mb-3">
                      <span>{exp.period}</span>
                      {exp.location && (
                        <>
                          <span className="hidden md:inline mx-2">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Here are some of my recent projects that showcase my skills in application development, UI/UX design, and problem-solving.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                      <span className="text-gray-900 font-semibold text-sm">View Details</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                    {project.period}
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-700 text-sm font-medium group-hover:text-blue-800 transition-colors duration-300">
                    <span>Click to view details</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Project Overview */}
              <div className="mb-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Role</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.role}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Team</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.team}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.period}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>
              </div>

              {/* Project Gallery */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Gallery</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedImage({
                          src: image,
                          alt: `${selectedProject.title} screenshot ${index + 1}`,
                          title: selectedProject.title
                        })}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 px-3 py-2 rounded-lg">
                          <span className="text-gray-900 font-medium text-sm">View</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges & Solutions</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 leading-relaxed">{selectedProject.challenges}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-60 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-lg transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 text-lg">{selectedImage.title}</h3>
                <p className="text-gray-600 text-sm">{selectedImage.alt}</p>
              </div>
            </div>
            
            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setSelectedImage(null)}
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Email</h3>
              <a href="mailto:jadedanbantilo15@gmail.com" className="text-gray-600 hover:text-blue-700 transition-colors text-xs md:text-sm break-all">
                jadedanbantilo15@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-slate-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Phone</h3>
              <a href="tel:09053012761" className="text-gray-600 hover:text-slate-700 transition-colors text-xs md:text-sm">
                09053012761
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Location</h3>
              <p className="text-gray-600 text-xs md:text-sm">Taguig City, Philippines</p>
            </div>
          </div>
          
          <div>
            <a 
              href="mailto:jadedanbantilo15@gmail.com"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 md:py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2025 Jade Daniele M. Bantilo. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;