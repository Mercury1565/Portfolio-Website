"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./App.css"

const mediaItems = [
  { type: "video", src: "/10.webm" },
  { type: "image", src: "/2.png" },
  { type: "image", src: "/3.png" },
  { type: "image", src: "/4.png" },
  { type: "image", src: "/5.png" },
  { type: "image", src: "/6.png" },
  { type: "image", src: "/8.png" },
  { type: "video", src: "/9.webm" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = mediaItems[currentIndex];

  const prev = () => setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % mediaItems.length);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
        <div className="text-xl font-bold text-blue-400">Hermon G. Abdissa</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`hover:text-blue-400 transition-colors ${
            activeSection === item.id ? "text-blue-400" : "text-gray-300"
          }`}
            >
          {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Mercury1565"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:hermongetachew10@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hermon-getachew"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
            <a
            href="https://drive.google.com/file/d/1C6aTUjDdCgO0ipKW6UBE5RbAico9v4vo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            >
            <img src="/cv.png" className="w-5 h-5" />
            </a>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-800">
          {navItems.map((item) => (
            <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
            >
          {item.label}
            </button>
          ))}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/Mercury1565"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              >
              <Github size={20} />
            </a>
            <a
              href="mailto:hermongetachew10@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              >
              <Mail size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1C6aTUjDdCgO0ipKW6UBE5RbAico9v4vo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              >
             <img src="/cv.png" />
            </a>
          </div>
        </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-5 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hermon Getachew Abdissa
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Computer Engineering 2025 | Back-End Developer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-82 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <img
                    src="../public/hermon.JPG"
                    alt="Hermon Getachew Abdissa"
                    className="w-80 h-88 rounded-full object-cover border-4 border-gray-800"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div >
              <p className="text-lg text-gray-300 mb-6">
              I am an Electrical & Computer Engineering graduate with a strong interest in systems development and backend engineering. I have spent the past 
              few years deepening my understanding of core computer science concepts, particularly in data structures, algorithms, and software architecture. 
              My learning has been driven by a passion for designing systems that are both efficient and reliable.              
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My experience spans a variety of technical projects, including embedded systems, computer architecture, and server-side development. I have 
                worked on building custom processors, developing real-time applications, and creating full-stack platforms with a focus on backend performance. 
                These experiences have allowed me to apply theoretical knowledge to real-world challenges and continuously improve my technical skills.
              </p>
              <p className="text-lg text-gray-300">
                Looking ahead, I am excited to further explore the fields of Computer Architecture & Software Engineering and contribute to research and
                development that enhances the performance and efficiency of computing systems. I am especially motivated by opportunities that involve designing
                and optimizing system-level solutions with practical impact.
              </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Addis Ababa University</h3>
                  <p className="text-xl text-gray-300">Electrical and Computer Engineering, BSc</p>
                  <p className="text-gray-400">AAU is in top 4.1% of Universities in the world</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-300">Aug 2021 - July 2025</p>
                  <p className="text-blue-400 font-semibold">GPA: 3.82</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Notable Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Computer Architecture & Organization",
                    "Operating Systems",
                    "Compilers",
                    "Computer Network & Security",
                    "Microcomputers & Interfacing",
                    "Embedded Systems",
                    "Database Systems",
                    "Data Structures",
                    "Algorithms",
                    "Object Oriented Programming",
                    "Introduction to Software Engineering",
                  ].map((course) => (
                    <span key={course} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Africa to Silicon Valley (A2SV)</h3>
                  <p className="text-xl text-gray-300">Tech Academy & Incubator</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">Nov 2023 - Nov 2024</p>
              </div>
              <p className="text-gray-300 mb-4">
                A2SV is a tech academy that trains high-potential African students, partnering with companies like Google, Palantir, and Meta, and has placed over 
                60 students in top tech firms. During my time there, I sharpened my DSA skills, enabling me to solve complex problems and build a strong foundation 
                for real-world software engineering.
                <div className="flex justify-left space-x-1 mt-1">
                  <a
                    href="https://leetcode.com/Mercury1565/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6" />
                  </a>
                  <a
                    href="https://codeforces.com/profile/Mercury1565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    <img src="/codeforces.png" alt="Codeforces" className="w-6 h-6" />
                  </a>
                </div>

              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">1000+</p>
                  <p className="text-gray-300">Hours of Practice</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-blue-400">850+</p>
                  <p className="text-gray-300">Problems Solved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Backend Development Intern</h3>
                  <p className="text-xl text-gray-300">Perago Information Systems</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">Sep 2024 - Present</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Utilized TypeScript to enhance performance and scalability of the backend system built with NestJS
                </li>
                <li>
                  • Contributed to database optimization efforts, improving query efficiency and minimizing downtime
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Backend Developer</h3>
                  <p className="text-xl text-gray-300">WeyTech</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">Sep 2024 - Present</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Contributed to onboarding and integrating new features for the VStu learning platform.
                </li>
                <li>
                  • Leading research initiatives to explore and implement innovative feature enhancements.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Management Team Member, Project Team Member</h3>
                  <p className="text-xl text-gray-300">AAiT Innovation Center</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">Sep 2024 - July 2025</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Responsible for curating, developing and overseeing projects being incubated in the center</li>
                <li>• Provide guidance for junior members in embedded systems and hardware design</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Embedded Systems Engineering Intern</h3>
                  <p className="text-xl text-gray-300">4K Labs</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">Feb 2024 - Jan 2025</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Dedicated 10 hours per week to contribute in a team working on an autonomous vehicle embedded
                  systems project
                </li>
                <li>• Built a power supply module providing 8+ hours life for the autonomous vehicle</li>
                <li>
                  • Implemented computer vision tools for navigation, object detection and traffic sign recognition
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">Volunteer Mathematics Teacher</h3>
                  <p className="text-xl text-gray-300">Addis Ababa University, Office of Community Engagement</p>
                </div>
                <p className="text-gray-300 mt-4 md:mt-0">July 2023 - Aug 2023</p>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Mentored 20 high school students to help them improve their understanding in Linear Algebra,
                  Calculus and prepare for the annual national exam
                </li>
                <li>
                  • Received a certificate of appreciation for voluntary contributions. 
                  <a 
                    href="https://drive.google.com/file/d/1GhAcTQECwzSd_h5EaVkwjhFGPhUR4xhz/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:underline"
                  >
                    View Certificate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">

            <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors overflow-hidden">
              <div className="aspect-video bg-gray-700 relative overflow-hidden group">
                {current.type === "video" ? (
                  <video
                    src={current.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={current.src}
                    alt="Project media"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Left Arrow */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/60 p-2 rounded-full hover:bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/60 p-2 rounded-full hover:bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Evidence-Based Static Branch Prediction with Deep Learning</h3>
                <p className="text-gray-300 mb-4">
                    Developed a Graph Neural Network (GNN)-based model to enhance branch prediction accuracy for hard-to-predict branches 
                    in modern processors, leveraging LLVM IR and XFGs. We were able to process a diverse program corpus, achieving a significant reduction 
                    in miss rates compared to traditional heuristic-based predictors
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Research Project</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Computer Architecture</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">PyTorch</span>
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://github.com/poseidon2022/EBSBP-Using-GNNs", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://docs.google.com/document/d/1bjFojl8qAfZnX9A7T_MbpxwTA30KXbO1xYX98MNLwdE/edit?usp=sharing", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Writeup
                </div>
              </div>
            </div>
          
            <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors overflow-hidden">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <a href="/sap.mp4" target="_blank" rel="noopener noreferrer">
                  <video
                    src="/sap.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </a>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Simple Processor Design</h3>
                <p className="text-gray-300 mb-4">
                  Developed a fully functional low-level processor in Proteus that supports a range of complex
                  operations, including arithmetic, logic, and control instructions with precision.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Proteus</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Computer Architecture</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Hardware Design</span>
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://github.com/Mercury1565/SAP-Processor-Design-on-Proteus", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors overflow-hidden">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <a href="/music.webm" target="_blank" rel="noopener noreferrer">
                    <video
                      src="/music.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Music Player App</h3>
                <p className="text-gray-300 mb-4">
                  Built a full-stack music app with playing, uploading, searching and deleting capabilities. Implemented
                  clean architecture principles and seamless state management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Redux Toolkit</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Go (Gin)</span>
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://github.com/Mercury1565/Music_Player-A_Full_Stack_Web_Project", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://music-player-a-full-stack-web-project.vercel.app/", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View App
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors overflow-hidden">
              <div className="aspect-video bg-gray-700 relative overflow-hidden">
                <img
                  src="/tutor.png"
                  alt="TutorHub"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">TutorHub</h3>
                <p className="text-gray-300 mb-4">
                  Collaborated with 4 colleagues in a week-long hackathon to develop a tutorship services system
                  enabling seamless connection between students and tutors.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">NestJS</span>
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://github.com/Mercury1565/TutorHub-Nest-Back-End", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </div>
                <div 
                  className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer"
                  onClick={() => window.open("https://tutor-hub-react-front-end.vercel.app/", "_blank")}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View App
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>

          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-14 h-14 bg-purple-400/10 rounded-full animate-pulse delay-3000"></div>
          </div>

          <div className="space-y-16">
            {/* Programming Languages */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "Python", color: "from-yellow-400 to-blue-500", icon: <img src="/python-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "GO", color: "from-cyan-400 to-blue-600", icon: <img src="/go-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "JavaScript", color: "from-yellow-300 to-yellow-600", icon: <img src="/javascript-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "TypeScript", color: "from-blue-400 to-blue-700", icon: <img src="/typescript-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "Java", color: "from-red-400 to-blue-600", icon: <img src="/java-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "C++", color: "from-blue-400 to-white-600", icon: <img src="/cplusplus-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                ].map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                    <div
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:scale-110 transition-all duration-300 animate-float`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Databases</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "MySQL", color: "from-blue-400 to-indigo-600", icon: <img src="/mysql-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "PostgreSQL", color: "from-blue-400 to-blue-600", icon: <img src="/postgresql-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "MongoDB", color: "from-green-400 to-green-600", icon: <img src="/mongodb-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                ].map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                    <div
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:scale-110 transition-all duration-300 animate-float`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Technologies & Tools</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "Git", color: "from-orange-400 to-red-500", icon: <img src="/git-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "Linux", color: "from-yellow-400 to-orange-500", icon: <img src="/linux-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "Proteus", color: "from-blue-400 to-purple-500", icon: <img src="/proteus.png" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "MatLab", color: "from-orange-500 to-red-600", icon: <img src="/matlab.png" alt="Custom icon" className="w-8 h-8" /> },
                ].map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                    <div
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:scale-110 transition-all duration-300 animate-float`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Skills */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Hardware Skills</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "Arduino", color: "from-teal-400 to-cyan-500", icon: <img src="/arduino-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "Raspberry Pi", color: "from-green-400 to-pink-500", icon: <img src="/raspberrypi-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                ].map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                    <div
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:scale-110 transition-all duration-300 animate-float`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*  Web Dev Frameworkds */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">Web Development Technologies / Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "React", color: "from-teal-400 to-cyan-500", icon: <img src="/react-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "NextJS", color: "from-blue-400 to-cyan-500", icon: <img src="/nextjs-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "NestJS", color: "from-red-400 to-pink-500", icon: <img src="/nestjs-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                  { name: "Docker", color: "from-blue-400 to-green-500", icon: <img src="/docker-original.svg" alt="Custom icon" className="w-8 h-8" /> },
                ].map((skill, index) => (
                  <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 200}ms` }}>
                    <div
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 hover:scale-110 transition-all duration-300 animate-float`}
                    >
                      <div className="w-full h-full rounded-xl bg-gray-800 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-2 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => window.open("https://drive.google.com/file/d/1Qpwy_c8htz03nVtmqKpKxepzaBywqM6u/view?usp=sharing", "_blank")}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Data Analysis Fundamentals</h3>
              <p className="text-gray-300">Udacity Nanodegree Program</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => window.open("https://drive.google.com/file/d/156wGjZOzVPtlAKHTbO5SuStB08bEIOWe/view?usp=sharing", "_blank")}
            >              
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Data Structures with Python</h3>
              <p className="text-gray-300">University of Michigan, via Coursera</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => window.open("https://drive.google.com/file/d/1F-z5A_GL2tZtWoWO0kSVdmy4XRmASOb-/view?usp=sharing", "_blank")}
            >              
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Interfacing with Arduino</h3>
              <p className="text-gray-300">University of California, via Coursera</p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => window.open("https://drive.google.com/file/d/1h9K3Mc9cq7Rw6UsjZsplJTR-PS2yDzcq/view?usp=sharing", "_blank")}
            >              
              <h3 className="text-xl font-semibold text-blue-400 mb-2">French Language: Level-A1</h3>
              <p className="text-gray-300">Alliance Ethio-Française Addis Ababa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation
            about technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">hermongetachew10@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+251940203596</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Mercury1565"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hermon-getachew"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hermongetachew10@gmail.com"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Hermon Getachew Abdissa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
