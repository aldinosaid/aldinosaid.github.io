"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Layers,
  Sparkles,
  Mail,
  FileDown,
  GraduationCap,
  Send,
  Menu,
  X,
  Star,
  GitFork,
  Database,
  Wrench,
  ChevronRight,
  ArrowUp,
  Phone,
  MapPin,
  Bot,
  Video,
  Radio,
  CheckCircle2,
} from "lucide-react";

// Inline SVG Icon for Github
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState(true);

  // Fetch GitHub Repos
  useEffect(() => {
    fetch("https://api.github.com/users/aldinosaid/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load repositories");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingRepos(false));
  }, []);

  const projects = [
    {
      title: "AI Automated Video Clipper & YouTube Downloader",
      category: "AI & Multimedia Pipeline",
      icon: <Video className="w-8 h-8 text-sky-300" />,
      desc: "Engineered a distributed microservices platform using Laravel, FastAPI, and Redis to automate the conversion of long-form YouTube videos into optimized vertical clips for TikTok and Reels.",
      highlights: [
        "Integrated Google MediaPipe for active speaker face-tracking and intelligent auto-framing",
        "Utilized Whisper for automated, precise subtitle and caption generation",
        "Leveraged Google Gemini API to analyze script retention hooks and generate cover thumbnails",
        "Constructed custom FFmpeg pipelines for complex video processing and dynamic watermarks",
      ],
      tags: ["Laravel 11", "FastAPI", "Python", "MediaPipe", "Gemini API", "Whisper", "FFmpeg", "Redis", "Docker", "Tailwind CSS"],
      github: "https://github.com/aldinosaid",
      demo: "#",
      gradient: "from-sky-600 to-cyan-500",
    },
    {
      title: "TikTok Live Stream Automation & Real-time Tracker",
      category: "Real-Time Streaming & IoT",
      icon: <Radio className="w-8 h-8 text-rose-300" />,
      desc: "Architected a high-throughput real-time event pipeline using tiktok-live-connector and Socket.IO to stream and process live room events (comments, gifts, shares, likes, battles) with sub-second latency.",
      highlights: [
        "Engineered thermal printer integration engine (hardware POS & virtual print animation) to trigger automatic receipts for live gifts and milestones",
        "Built voice dubbing automation using browser Web Speech API to dynamically shout out high-tier contributors",
        "Implemented automated rate limiting, connection pooling (mysql2), and caching layers (node-cache)",
        "Integrated Google reCAPTCHA v2 with bypass token logic to safeguard live streaming sessions from IP throttling and bot spam",
      ],
      tags: ["Node.js", "Express.js", "Socket.IO", "WebSockets", "Web Speech API", "MySQL", "Node-Cache", "Hardware POS"],
      github: "https://github.com/aldinosaid",
      demo: "#",
      gradient: "from-rose-600 to-pink-500",
    },
    {
      title: "Enterprise Multi-Platform Payment Gateway Plugins",
      category: "Fintech & Payment Systems",
      icon: <Layers className="w-8 h-8 text-indigo-300" />,
      desc: "Contributed to payment gateway projects as a full stack developer and engineered comprehensive e-commerce payment plugins for international clients in Germany (Skrill, PayOn, and PaysafeCard).",
      highlights: [
        "Implemented for major global e-commerce platforms including Magento 1 & 2, WooCommerce, WordPress, PrestaShop (1.6 & 1.7), Shopware, Shopify, OpenCart, JTL Shop, Gambio, etc.",
        "Engineered high-security payment workflows, instant webhook transaction processing, and rigorous audit logging",
      ],
      tags: ["PHP", "Laravel", "Node.js", "CodeIgniter", "REST API", "CircleCI", "SVN", "Fintech"],
      github: "https://github.com/aldinosaid",
      demo: "#",
      gradient: "from-indigo-600 to-violet-500",
    },
  ];

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      skills: ["PHP", "JavaScript", "Python", "TypeScript", "C#", "C++", "C", "HTML5", "CSS3", "Visual Basic"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      skills: ["Next.js", "React", "Laravel", "CodeIgniter", "Express.js", "Vue.js", "FastAPI", "React Native", "Django", "Spring Boot", "Tailwind CSS", "Alpine.js", "Livewire", "Socket.IO"],
    },
    {
      title: "Databases, Caching & Cloud",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ["MySQL", "MongoDB", "Redis", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Google Cloud Storage (GCS)", "Docker", "Nginx"],
    },
    {
      title: "AI, APIs & Integrations",
      icon: <Bot className="w-5 h-5 text-amber-400" />,
      skills: ["Google Gemini API", "ChatGPT API", "Google MediaPipe", "Whisper", "DingTalk API", "WeCom API", "Qiscus (WhatsApp)", "Google Maps API", "WebSockets", "Yonyou ERP", "Pajakku.id"],
    },
    {
      title: "CI/CD, Tools & OS",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: ["Git & GitHub Actions", "CircleCI", "SVN", "Power BI", "FFmpeg", "OBS Studio", "Antigravity AI IDE", "Postman", "Linux", "Windows", "macOS"],
    },
  ];

  const experiences = [
    {
      period: "NOV 2024 - PRESENT",
      role: "Full Stack Developer",
      company: "PT. GREE ELECTRIC APPLIANCES INDONESIA",
      location: "Jakarta, Indonesia",
      desc: "Maintained and developed new modules for the internal admin system, incorporating DingTalk and WeCom APIs for automated workflows and business approvals, alongside Qiscus for WhatsApp OTP and system notifications. Engineered seamless data synchronization with Yonyou ERP to streamline operational transfer requests and integrated the Pajakku.id platform for taxation management. Implemented Google Cloud Storage (GCS), integrated Google Translation & ChatGPT APIs for automated translation and serial number extraction from user images, and built interactive Power BI analytics.",
      stack: ["ReactJS", "Next.js", "Express.js", "Laravel", "Redis", "Power BI", "Qiscus", "DingTalk", "WeCom", "GCS", "ChatGPT API", "Google Maps API"],
    },
    {
      period: "JUL 2024 - PRESENT & OCT 2017 - FEB 2021",
      role: "Full Stack Developer",
      company: "PT. ESPHERE TECHNO CORINDO",
      location: "Payment Gateway Company",
      desc: "Contributed to payment gateway projects as a full stack developer and engineered several payment plugins for European e-commerce for Skrill, PayOn, and PaysafeCard clients. Implemented plugins for platforms like Magento 1 & 2, WooCommerce, WordPress, PrestaShop (1.6 & 1.7), XT-Commerce, Gambio, Shopware, JTL Shop, Shopify, OpenCart, and Oxid.",
      stack: ["PHP", "Laravel", "CodeIgniter", "Node.js", "MySQL", "MongoDB", "REST API", "CircleCI", "SVN"],
    },
    {
      period: "FEB 2022 - JUN 2024",
      role: "Full Stack Developer",
      company: "NICHESTACK.IO (WP-STACK)",
      location: "Centralized WordPress Management SaaS",
      desc: "Responsible for building, analyzing, debugging, and deploying the core SaaS application for remotely monitoring, maintaining, and executing bulk updates across hundreds of WordPress websites from a unified single dashboard. Engineered the seamless integration between individual WordPress websites and the central management system.",
      stack: ["PHP", "Laravel", "MySQL", "AWS", "Docker", "REST API", "CircleCI", "SVN"],
    },
    {
      period: "JAN 2017 - OCT 2017",
      role: "Web Administrator & Full Stack Developer",
      company: "PT. REDCOMMUNICATION INDONESIA",
      location: "Digital Agency",
      desc: "Acted as a web administrator responsible for updating client websites, email blasts, and campaigns. Acted as an additional Full Stack Developer to build, analyze, debug, fix, and deploy the Redtimesheet enterprise application.",
      stack: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "MongoDB", "REST API"],
    },
    {
      period: "JAN 2016 - DEC 2016",
      role: "WordPress Developer",
      company: "MADEINDONESIA",
      location: "Web Development Company",
      desc: "Developed and deployed WordPress-based websites. Created custom plugins, databases, and secure registration systems.",
      stack: ["PHP", "WordPress", "MySQL", "JavaScript", "REST API"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans relative overflow-x-hidden">
      {/* Background Glow Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-sky-500/15 blur-[130px]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0b0f19]/85 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#home" className="font-mono text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors">
            &lt;<span className="text-sky-400">aldino</span>.said/&gt;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <Link href="#about" className="hover:text-sky-400 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-sky-400 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-sky-400 transition-colors">Projects</Link>
            <Link href="#experience" className="hover:text-sky-400 transition-colors">Experience</Link>
            <Link href="#contact" className="hover:text-sky-400 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/aldinosaid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:aldinosaid@gmail.com"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0d1322] px-6 py-6 flex flex-col gap-4 text-base font-medium">
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400">About</Link>
            <Link href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400">Skills</Link>
            <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400">Projects</Link>
            <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400">Experience</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-sky-400">Contact</Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[88vh] flex items-center justify-center px-6 relative">
          <div className="max-w-3xl mx-auto text-center py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              Senior Full Stack Developer • 6+ Years Experience
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Aldino Said
              </span>{" "}
              👋
            </h1>

            <p className="text-lg font-semibold text-slate-300 mb-2">
              Full Stack Developer & Systems Architect
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experienced Full Stack Developer with over 6 years of expertise in developing robust websites and enterprise applications. Adept in both frontend and backend engineering, CI/CD pipelines, version control, payment gateway solutions, and AI automation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4" /> View Projects
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 font-semibold text-sm hover:text-sky-400 hover:border-sky-500/30 transition-all"
              >
                <FileDown className="w-4 h-4" /> Download Resume
              </a>
            </div>

            <div className="flex justify-center items-center gap-4">
              <a
                href="https://github.com/aldinosaid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:-translate-y-1 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:aldinosaid@gmail.com"
                className="w-11 h-11 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:-translate-y-1 transition-all"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+6289695464262"
                className="w-11 h-11 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:-translate-y-1 transition-all"
                title="WhatsApp / Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-2 block">
                Professional Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-6">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Full Stack Engineer & Tech Specialist</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                  I am an experienced Full Stack Developer with over <strong>6 years of expertise</strong> in developing robust websites and applications. I have a strong background in both front-end and back-end development, CI/CD pipelines, version control, and unit testing. Adept at agile methodologies, debugging, and evaluating new technologies to solve complex problems efficiently.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                  <div className="text-center">
                    <span className="block text-2xl font-black text-sky-400">6+</span>
                    <span className="text-xs text-slate-400">Years Experience</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-black text-indigo-400">20+</span>
                    <span className="text-xs text-slate-400">Platforms Built</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-black text-emerald-400">Global</span>
                    <span className="text-xs text-slate-400">Clients Served</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-white">Education & Location</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-sky-400 font-semibold">2012 - 2016</span>
                        <h4 className="font-semibold text-sm text-slate-100">Technology University of Yogyakarta</h4>
                        <p className="text-xs text-slate-400">Bachelor of Informatics Engineering (S1)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-100">Location</h4>
                        <p className="text-xs text-slate-400">Tangerang Regency, Banten, Indonesia (Available for Remote / On-site)</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-slate-100">Languages</h4>
                        <p className="text-xs text-slate-400">Indonesian (Native/Fluent) • English (Intermediate)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-slate-950/40 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-2 block">
                Technical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills & Tech Stack</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/50">
                        {group.icon}
                      </div>
                      <h3 className="font-bold text-base text-slate-200">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/60 text-xs font-medium text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-2 block">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Key Projects & Innovation</h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto">
                Real-world engineering solutions spanning AI multimedia microservices, real-time event streaming, and global payment solutions.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {projects.map((proj, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-sky-500/30 overflow-hidden transition-all duration-300 p-8 grid lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/40 text-center">
                    <div className="p-4 rounded-2xl bg-slate-800/80 mb-4 border border-slate-700/60">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                  </div>

                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <p className="text-slate-300 text-sm mb-4 leading-relaxed font-medium">
                        {proj.desc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {proj.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {proj.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-sky-950/80 text-sky-300 border border-sky-800/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-800 text-xs font-semibold">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" /> Source Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Repositories from GitHub API */}
            <div className="rounded-2xl p-8 bg-slate-900/30 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <GithubIcon className="w-5 h-5 text-sky-400" /> Recent GitHub Repositories
                  </h3>
                  <p className="text-xs text-slate-400">Fetched in real-time via GitHub REST API</p>
                </div>
                <a
                  href="https://github.com/aldinosaid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-400 hover:underline flex items-center gap-1"
                >
                  View GitHub Profile <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {loadingRepos ? (
                <div className="text-center py-10 text-slate-400 text-sm">
                  Loading public repositories...
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-mono text-sm font-bold text-sky-400 mb-1 truncate">{repo.name}</h4>
                        <p className="text-slate-400 text-xs line-clamp-2 mb-4">
                          {repo.description || "No description provided."}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-[11px] text-slate-500">
                        {repo.language && (
                          <span className="flex items-center gap-1 text-slate-400 font-medium">
                            <span className="w-2 h-2 rounded-full bg-sky-400" />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" /> {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-slate-950/40 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-2 block">
                Career History
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Work Experience</h2>
            </div>

            <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0b0f19] border-2 border-sky-400" />
                  <span className="text-xs font-mono font-semibold text-sky-400 mb-1 block">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <h4 className="text-sm font-semibold text-indigo-300 mb-2">{exp.company}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((item, iIdx) => (
                      <span key={iIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase font-mono tracking-widest text-sky-400 font-bold mb-2 block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Let&apos;s Connect</h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto">
                Interested in working together, offering an opportunity, or discussing an exciting project? Feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="space-y-6 flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Email</span>
                    <a href="mailto:aldinosaid@gmail.com" className="text-sm font-medium hover:text-sky-400 transition-colors">
                      aldinosaid@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Phone / WhatsApp</span>
                    <a href="tel:+6289695464262" className="text-sm font-medium hover:text-emerald-400 transition-colors">
                      +62 89-6954-64262
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="text-sm font-medium text-slate-300">
                      Tangerang Regency, Banten, Indonesia
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">GitHub Profile</span>
                    <a href="https://github.com/aldinosaid" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-sky-400 transition-colors">
                      github.com/aldinosaid
                    </a>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent! This form is ready to be linked with Formspree or your email.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 mb-1.5 block">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write your message or project inquiry..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-sky-500 text-white font-semibold text-sm hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800/60 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-4">
        <p>&copy; {new Date().getFullYear()} Aldino Said. Full Stack Developer Portfolio.</p>
        <Link href="#home" className="hover:text-sky-400 flex items-center gap-1 transition-colors">
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </Link>
      </footer>
    </div>
  );
}
