import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Award, User, Menu, X, Link as LinkIcon, Download } from 'lucide-react';

// Data Mockup untuk Portofolio - Diperbarui untuk Project Image Preview
const portfolioData = {
  profile: {
    name: "Tarq Hilmar Siregar",
    title: "Machine Learning & Cloud Enthusiast | AWS Certified Cloud Practitioner",
    summary: "I have built a strong foundation in cloud computing and machine learning, supported by hands-on projects and collaborative experiences. Along the way, I developed technical expertise while also strengthening leadership, problem solving, communication, and adaptability. Taking roles as both team leader and facilitator allowed me to guide others, work effectively in teams, and deliver impactful solutions. These experiences shaped me into an adaptive digital talent, ready to face challenges and contribute meaningfully in the tech industry.",
    photoUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/IMG_20240904_195954.jpg",
    cvUrl: "https://drive.google.com/file/d/1Gfi2NKYs6dP0PYhI5xCoUCcIxatu4i6R/view?usp=drive_link",
  },
  experiences: [
    {
      title: "AWS re/Start",
      company: "Orbit Future Academy",
      duration: "Jul 2025 - Oct 2025",
      description: "I joined the AWS re/Start program in collaboration with Orbit Future Academy to learn cloud computing with AWS services. The program gave me both hard and soft skills through hands-on labs in AWS Canvas and interactive sessions with experienced coaches. This experience helped me build strong foundations in cloud technology and prepare for real work challenges.",
    },    
    {
      title: "Google Cloud Arcade Facilitator",
      company: "Dicoding Indonesia",
      duration: "Jul 2025 - Sep 2025",
      description: "I had the opportunity to serve as a facilitator in the Google Cloud Arcade program, in collaboration with Dicoding Indonesia. In this role, I guided participants to learn and practice Google Cloud Platform services through Skills Boost. The program used a gamification concept, which made the learning process fun and engaging. Participants who reached their milestones were rewarded with exclusive Google Cloud merchandise, creating both motivation and excitement in the journey.",
    },    
    {
      title: "Machine Learning Engineer",
      company: "Coding Camp powered by DBS Foundation",
      duration: "Feb 2025 - Jul 2025",
      description: "Through Coding Camp 2025 powered by DBS Foundation, I developed strong technical and soft skills while following the Machine Learning path. I was entrusted as Team Leader in the Capstone Project WatchIn, where I learned to guide and collaborate effectively. Graduating with Distinction (Top 10%) and achieving multiple milestones, I am ready to contribute as an adaptive digital talent.",
    },
    {
      title: "Cloud Computing",
      company: "Bangkit led by Google, GoTo, & Traveloka",
      duration: "Sep 2024 - Dec 2024",
      description: "Through Bangkit 2024 Batch 2, I learned to use Google Cloud Platform while improving soft skills like problem solving and communication. My experience in the WasteSmart Capstone Project taught me how to collaborate and create real solutions. With achievements such as Distinction (Top 10%) and Best Presenter, I am prepared to face challenges in cloud computing.",
    },
  ],
  projects: [
    {
      name: "WatchIn: Employee Activity Tracking",
      description: "Developed and implemented a computer vision model to classify eye states (open or closed) with the primary goal of detecting early signs of drowsiness or fatigue. This project aims to support an early warning system for individuals working in front of laptops/PCs, helping to reduce productivity loss and potential health risks.",
      technologies: ["Python", "Computer Vision", "Tensorflow", "Keras"],
      link: "https://drive.google.com/file/d/1cWSAM9Hwo7S4d7KUpwTZbdwKRf-ImC0S/view?usp=sharing",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/1. Home.png", 
    },
    {
      name: "WasteSmart - Waste Education App",
      description: "WasteSmart is an application for identifying various types of waste and serves as a comprehensive knowledge center for waste-related information. Most importantly, this application uses learning methods that are friendly and attractive to all levels of Indonesian society, with the aim of increasing broad awareness and understanding of waste management problems.",
      technologies: ["JavaScript", "Tensorflow.js", "Google Cloud Platform", "Postman"],
      link: "https://drive.google.com/file/d/1vURCuWdzb-zgic_w76RK1YKwGSDz0EwP/view?usp=sharing&usp=embed_facebook&usp=embed_facebook",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/wastesmartapp.PNG", 
    },
    {
      name: "House Pricing Prediction MLOps",
      description: "This project demonstrates a complete MLOps workflow for predicting house prices. It uses TensorFlow Extended (TFX) with Apache Beam for building and orchestrating the ML pipeline, Docker for containerization, Google Cloud Run for deployment, and Streamlit for an interactive prediction and monitoring interface.",
      technologies: ["Docker", "Apache Beam", "Google Cloud Platform", "Streamlit", "TFX"],
      link: "https://youtu.be/lzd8HByLiVk",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/housepricingmlops.png", 
    },
  ],
  certificates: [
    {
      name: "Juara Harapan 3 Data Mining - Indoneris National IT Competition 2025",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/DATA%20MINING_6_TARQ%20HILMAR%20SIREGAR%2C%20WILLIAM%20WIDJAJA_page-0001.jpg",
      linkUrl: "https://indoneris.amikompurwokerto.ac.id/competition/winner?y=2025"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/aws-certified-cloud-practitioner.png",
      linkUrl: "https://www.credly.com/badges/c1396390-b677-4ab0-b017-695f8485eb1a/public_url"
    },
    {
      name: "AWS re/Start Graduate",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/aws-re-start-graduate-credly.png",
      linkUrl: "https://www.credly.com/badges/4a3597c0-ffd1-4ed3-95a5-ab04e1195c34/public_url"
    },
    {
      name: "Google Cloud Arcade Facilitator 2025",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/GCAF-Tarq.jpg",
      linkUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/GCAF-Tarq.jpg"
    },
    {
      name: "Top 20 Teams Capstone Project - Coding Camp 2025 DBS Foundation",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/%5BCoding%20Camp%202025%20-%20University%5D%20Best%20Capstone%20Project%20-%20MC811D5Y0336.jpg",
      linkUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/%5BCoding%20Camp%202025%20-%20University%5D%20Best%20Capstone%20Project%20-%20MC811D5Y0336.jpg"
    },
    {
      name: "Distinction Graduate - Coding Camp 2025 DBS Foundation",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/page-0-cc.jpg",
      linkUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/page-0-cc.jpg"
    },
    {
      name: "English for Business Communication",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/univ7_139_page-0001.jpg",
      linkUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/univ7_139_page-0001.jpg"
    },
    {
      name: "Distinction Graduate - Bangkit Academy 2024 Batch 2 led by Google, GoTo & Traveloka",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/page-1-bangkit.jpg",
      linkUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/page-1-bangkit.jpg"
    },
    {
      name: "Machine Learning Operations (MLOps) - Dicoding Indonesia",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/sertifikat_course_443_938006_110825224706_page-0001.jpg",
      linkUrl: "https://www.dicoding.com/certificates/4EXG364NQZRL"
    },
    {
      name: "Membangun Sistem Machine Learning - Dicoding Indonesia",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/sertifikat_course_713_938006_070725162438_page-0001.jpg",
      linkUrl: "https://www.dicoding.com/certificates/KEXL2EWMWZG2"
    },
    {
      name: "Menjadi Google Cloud Architect - Dicoding Indonesia",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/sertifikat_course_332_938006_210125222728_page-0001.jpg",
      linkUrl: "https://www.dicoding.com/certificates/98XWERLDLXM3"
    },
    {
      name: "Menjadi Google Cloud Engineer - Dicoding Indonesia",
      imageUrl: "https://raw.githubusercontent.com/tarqhilmars29/assets-portfolio/main/sertifikat_course_133_938006_091124195146_page-0001.jpg",
      linkUrl: "https://www.dicoding.com/certificates/6RPNY79WQZ2M"
    },                
  ],
};

// Komponen Pembantu
const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-3 text-2xl md:text-3xl font-bold text-gray-800 mb-6">
    <Icon className="w-7 h-7 text-indigo-600" />
    <span>{title}</span>
  </div>
);

const ExperienceCard = ({ experience }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
    <p className="text-indigo-600 font-medium mt-1">{experience.company}</p>
    <p className="text-sm text-gray-500 mt-1">{experience.duration}</p>
    <p className="mt-4 text-gray-600 leading-relaxed">{experience.description}</p>
  </div>
);

// Komponen ProjectCard diubah untuk menyertakan preview gambar
const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer">
    {/* Area Gambar Preview */}
    <div className="h-48 overflow-hidden relative">
      <img
        src={project.imageUrl}
        alt={`Preview Proyek ${project.name}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/94a3b8/ffffff?text=Proyek+Image" }}
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
      <p className="text-gray-600 flex-grow mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-200 mt-2"
      >
        View Project <LinkIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
);

// Komponen Sertifikat
const CertificateItem = ({ certificate }) => (
  <a 
    href={certificate.linkUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
  >
    {/* Area Gambar Preview */}
    <div className="h-40 overflow-hidden relative">
      <img
        src={certificate.imageUrl}
        alt={`Sertifikat ${certificate.name}`}
        className="w-full h-full object-cover transition-transform duration-100 hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/94a3b8/ffffff?text=Image+Not+Found" }}
      />
    </div>
    
    {/* Detail Nama Sertifikat */}
    <div className="p-4 flex items-start space-x-3">
      <Award className="w-5 h-5 flex-shrink-0 text-amber-500 mt-1" />
      <span className="text-gray-700 font-medium text-sm leading-relaxed">{certificate.name}</span>
    </div>
  </a>
);

// Komponen Utama
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
  ];

  // Komponen Navigasi
  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#overview" className="text-2xl font-extrabold text-indigo-700 tracking-wider">
            PORT<span className="text-gray-900">FOLIO</span>
          </a>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Tombol Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    // 'scroll-behavior: smooth' untuk navigasi halus antar section
    <div className="min-h-screen bg-gray-50 font-sans antialiased" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* === 1. Overview / Summary Profesional (Lapisan Putih) === */}
        <section id="overview" className="pb-16 pt-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-4 border-indigo-600">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              
              {/* Foto */}
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 md:h-52 md:w-52 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                  src={portfolioData.profile.photoUrl}
                  alt={`Foto ${portfolioData.profile.name}`}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/1e293b/ffffff?text=FOTO" }}
                />
              </div>

              {/* Detail Profil */}
              <div className="text-center md:text-left md:flex-grow">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                  {portfolioData.profile.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4">
                  {portfolioData.profile.title}
                </h2>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto md:mx-0">
                  {portfolioData.profile.summary}
                </p>

                {/* Tombol Unduh CV dengan atribut 'download' */}
                <a
                  href={portfolioData.profile.cvUrl}
                  download="CV_Tarq_Hilmar_Siregar.pdf" // Ini adalah nama file yang disarankan saat diunduh
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Unduh CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- */}

        {/* === 2. Pengalaman (Lapisan Abu-abu Muda) === */}
        <section id="experience" className="py-16 bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle icon={Briefcase} title="Professional Experience" />
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioData.experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </section>
        
        {/* --- */}

        {/* === 3. Project (Lapisan Putih) === */}
        <section id="projects" className="py-16 bg-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 shadow-inner">
          <div className="max-w-7xl mx-auto">
            <SectionTitle icon={Code} title="Top Projects" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioData.projects.map((proj, index) => (
                <ProjectCard key={index} project={proj} />
              ))}
            </div>
          </div>
        </section>

        {/* --- */}

        {/* === 4. Sertifikat (Lapisan Abu-abu Muda) === */}
        <section id="certificates" className="py-16 bg-gray-100 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionTitle icon={Award} title="Certificates and Awards" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.certificates.map((cert, index) => (
                <CertificateItem key={index} certificate={cert} />
              ))}
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm">
            Made by {portfolioData.profile.name} {new Date().getFullYear()}.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Tambahkan ikon media sosial di sini jika diperlukan */}
            <a href="https://www.linkedin.com/in/tarqhilmarsiregar/" className="text-gray-400 hover:text-indigo-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/tarqhilmarsiregar" className="text-gray-400 hover:text-indigo-400 transition-colors">GitHub</a>
            <a href="https://tarqhilmarsiregar.medium.com/" className="text-gray-400 hover:text-indigo-400 transition-colors">Medium</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
