import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Smartphone, MapPin, Phone, Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import Profile from "./picture/Profile.png";



const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      period: "May 2025"
    },
    {
      title: "AI-Powered Chatbot UI/UX",
      description: "Designed the user interface and experience for an AI-powered chatbot for employees and clients. Focused on intuitive layouts and user flow to improve usability.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      period: "May 2025"
    },
    {
      title: "Reallife BGC UI/UX",
      description: "Designed the UI/UX of the Real Life BGC scholarship website, creating a seamless application process for students and an efficient dashboard for administrators to manage applications.",
      tech: ["UI/UX Design", "User Experience", "Interface Design"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      period: "May 2023"
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
              style={{
                transform: `translateX(${Math.min(scrollY * -0.2, 0)}px)`,
                opacity: Math.max(1 - scrollY * 0.0005, 0.5)
              }}
            >
              <div className="relative group">



      {/* Professional decorative elements */}
      <div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-300 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
        <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-700 opacity-10 rounded-2xl group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
  
      {/* Main photo container */}
      <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-white border border-gray-200">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
      {/* Graduation photo */}
        <img
         src={Profile}
         alt="My Graduation Photo"
         className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

            {/* Text Content - Right Side */}
            <div 
              className="order-2 text-center lg:text-left lg:pl-8"
              style={{
                transform: `translateX(${Math.max(scrollY * 0.2, 0)}px)`,
                opacity: Math.max(1 - scrollY * 0.0005, 0.5)
              }}
            >
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-base font-medium mb-6">
                  👋 Hello, I'm
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-blue-700">
                    Jade Bantilo
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl text-slate-700 mb-3 font-semibold">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-xl md:text-2xl text-gray-600 mb-8">
                  UI/UX Designer
                </div>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional digital experiences and solving real-world problems through technology. Dean's Lister with hands-on experience in mobile app development and user-centered design.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-10 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 text-blue-700" />
                  <span className="text-lg">Taguig City</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3 text-slate-700" />
                  <span className="text-lg">09053012761</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-10 py-5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-5 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-slate-500 hover:text-slate-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                >
                  Get In Touch
                </button>
              </div>

              {/* Professional badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center px-6 py-3 bg-white border border-emerald-200 rounded-lg shadow-sm">
                  <Palette className="w-5 h-5 text-emerald-600 mr-3" />
                  <span className="text-base font-medium text-gray-700">UI & UX Designer</span>
                </div>
                <div className="flex items-center px-6 py-3 bg-white border border-blue-200 rounded-lg shadow-sm">
                  <Code className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-base font-medium text-gray-700">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <ChevronDown size={32} className="text-slate-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Crafting Digital Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I’m Jade Daniele M. Bantilo, a fresh graduate from the University of Makati with a Bachelor of Science in Computer Science, specializing in Application Development. My academic journey has provided me with a solid foundation in programming, problem-solving, and building software solutions tailored to real-world needs.              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Throughout my studies, I’ve worked on meaningful projects such as Real Life BGC’s scholarship application platform and BullyProof, a mobile application designed to report cyberbullying incidents. These experiences allowed me to apply my technical knowledge in both web and mobile development while also strengthening my teamwork, research, and design skills.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I am particularly passionate about front-end development and the challenge of creating applications that are not only functional but also engaging and user-friendly. As I continue my professional journey, I am eager to learn from real-world experiences, collaborate with innovative teams, and grow into a well-rounded software developer.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center mb-3">
                      {skill.icon}
                      <h4 className="font-medium text-gray-700 ml-2">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skill.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center px-4 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group transform hover:scale-105 hover:bg-white"
                        >
                          <img 
                            src={item.logo} 
                            alt={item.name} 
                            className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200"
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
      <section id="education" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-blue-700 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">{edu.degree}</h4>
                    <p className="text-blue-700 font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    {edu.track && <p className="text-slate-600 text-sm mb-3">Track: {edu.track}</p>}
                    {edu.achievements && (
                      <div className="mt-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-emerald-600 mb-1">
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 text-slate-700 mr-2" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">{exp.title}</h4>
                    <p className="text-slate-700 font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span>{exp.period}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in application development, UI/UX design, and problem-solving.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-lg text-xs font-semibold">
                    {project.period}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-8" />
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <Mail className="w-8 h-8 text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jadedanbantilo15@gmail.com" className="text-gray-600 hover:text-blue-700 transition-colors">
                jadedanbantilo15@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <Phone className="w-8 h-8 text-slate-700 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:09053012761" className="text-gray-600 hover:text-slate-700 transition-colors">
                09053012761
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Taguig City, Philippines</p>
            </div>
          </div>
          
          <div>
            <a 
              href="mailto:jadedanbantilo15@gmail.com"
              className="inline-block px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Jade Daniele M. Bantilo. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;