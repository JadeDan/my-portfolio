import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Smartphone, MapPin, Phone, Award, Briefcase, GraduationCap, Star } from 'lucide-react';

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
      title: "City Government Digital Support",
      description: "Assisted in encoding files to support the digitalization of processes for the City of Makati, contributing to modern government operations.",
      tech: ["Data Management", "Government Systems", "Process Digitalization"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      period: "May 2023"
    }
  ];

  const skills = [
    { 
      category: "Frontend Development", 
      icon: <Code className="w-6 h-6 text-blue-600" />,
      items: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" }
      ] 
    },
    { 
      category: "Programming & Development", 
      icon: <Smartphone className="w-6 h-6 text-purple-600" />,
      items: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
      ] 
    },
    { 
      category: "Design & Tools", 
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      items: [
        { name: "UI/UX Design", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "Microsoft Office", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_365_%282022%29.svg" },
        { name: "Project Management", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" }
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 opacity-10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 opacity-10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-400 opacity-10 rounded-full blur-xl animate-pulse" />
      </div>

            {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white bg-opacity-95 backdrop-blur-lg shadow-xl border-b border-purple-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">
              Jade Bantilo
            </h1>
            
            <div className="hidden md:flex space-x-12">
              {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:scale-105 px-2 py-1 ${
                    activeSection === item ? 'text-purple-600 font-semibold' : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white bg-opacity-95 backdrop-blur-lg shadow-xl border-b border-purple-100">
              <div className="py-4 space-y-2">
                {['home', 'about', 'education', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-6 py-3 capitalize text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
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
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 opacity-10 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-400 opacity-10 rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400 opacity-10 rounded-full" />
          <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-purple-400 opacity-10 rotate-45" />
          <div className="absolute bottom-1/3 right-10 w-5 h-5 border-2 border-blue-400 opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
            {/* Photo Section - Left Side */}
            <div 
              className="flex justify-center lg:justify-start order-1"
              style={{
                transform: `translateX(${Math.min(scrollY * -0.3, 0)}px)`,
                opacity: Math.max(1 - scrollY * 0.001, 0.3)
              }}
            >
              <div className="relative group">
                {/* Decorative elements around photo */}
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-400 border-opacity-30 rounded-3xl group-hover:rotate-3 transition-transform duration-500" />
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-400 opacity-10 rounded-3xl group-hover:-rotate-3 transition-transform duration-500" />
                
                {/* Main photo container */}
                <div className="relative w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500 group-hover:shadow-opacity-25 transition-all duration-500">
                  <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                    {/* Placeholder for graduation photo */}
                    <div className="text-gray-600 text-center">
                      <div className="text-8xl mb-4">🎓</div>
                      <p className="text-sm font-medium">Upload your graduation photo here</p>
                    </div>
                  </div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div 
              className="order-2 text-center lg:text-left lg:pl-8"
              style={{
                transform: `translateX(${Math.max(scrollY * 0.3, 0)}px)`,
                opacity: Math.max(1 - scrollY * 0.001, 0.3)
              }}
            >
              <div className="mb-8">
                <div className="inline-block px-6 py-3 bg-purple-100 rounded-full text-purple-700 text-base font-medium mb-6">
                  👋 Hello, I'm
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-purple-600">
                    Jade Bantilo
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl text-gray-700 mb-3 font-semibold">
                  Computer Science Student
                </div>
                <div className="text-xl md:text-2xl text-gray-600 mb-8">
                  & UI/UX Designer
                </div>
                
                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional digital experiences and solving real-world problems through technology. Dean's Lister with hands-on experience in mobile app development and user-centered design.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-10 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3 text-purple-600" />
                  <span className="text-lg">Taguig City</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3 text-blue-600" />
                  <span className="text-lg">09053012761</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-10 py-5 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-medium text-lg"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-10 py-5 border-2 border-purple-300 text-purple-700 rounded-full hover:border-purple-600 hover:text-purple-900 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                >
                  Get In Touch
                </button>
              </div>

              {/* Achievement badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
                  <Palette className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-base font-medium text-gray-700">UI & UX Designer</span>
                </div>
                <div className="flex items-center px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm">
                  <Code className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-base font-medium text-gray-700">Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Crafting Digital Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated Computer Science student at the University of Makati with a passion for UI/UX design and application development. As a consistent Dean's Lister, I combine academic excellence with hands-on experience in creating digital solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My experience spans from developing mobile applications like BullyProof to providing technical support for government operations. I specialize in creating user-centered designs and building functional applications that solve real-world problems.
              </p>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
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
                          className="flex items-center px-4 py-3 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 border border-purple-200 text-gray-700 rounded-lg text-sm hover:shadow-lg hover:border-purple-300 transition-all duration-300 group transform hover:scale-105"
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
      <section id="education" className="py-20 px-6 bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-purple-600 mr-2" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">{edu.degree}</h4>
                    <p className="text-purple-600 font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    {edu.track && <p className="text-blue-600 text-sm mb-3">Track: {edu.track}</p>}
                    {edu.achievements && (
                      <div className="mt-3">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-green-600 mb-1">
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
                <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">{exp.title}</h4>
                    <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
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
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in application development, UI/UX design, and problem-solving.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-60 via-black via-opacity-20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.period}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
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
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jadedanbantilo15@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                jadedanbantilo15@gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:09053012761" className="text-gray-600 hover:text-blue-600 transition-colors">
                09053012761
              </a>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <MapPin className="w-8 h-8 text-pink-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Taguig City, Philippines</p>
            </div>
          </div>
          
          <div>
            <a 
              href="mailto:jadedanbantilo15@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:via-blue-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
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