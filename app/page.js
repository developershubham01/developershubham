"use client";

import { useEffect, useState } from "react";
import ProfileBadge from "../components/ProfileBadge";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SplitText from "../components/SplitText";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "AI Resume Analyzer & Job Matcher",
    type: "Flagship SaaS",
    description:
      "A resume intelligence platform that analyzes resumes against job descriptions, surfaces missing skills, and delivers ATS-focused insights with an AI-powered workflow.",
    points: [
      "Built with FastAPI, React, Google Gemini API, and Supabase PostgreSQL.",
      "Implemented resume parsing using PyMuPDF and python-docx for structured extraction.",
      "Designed a scalable deployment flow across Vercel and Render.",
    ],
    tags: ["FastAPI", "React", "Gemini API", "PostgreSQL"],
    liveLink: "https://resumescanwala.vercel.app/",
  },
  {
    title: "RecoverX",
    type: "Windows Desktop App",
    description:
      "A professional data recovery tool with a modern interface, secure recovery workflow, and smooth scanning experience for Windows users.",
    points: [
      "Developed with Python, Tkinter, Pillow, and multithreading.",
      "Added quick scan, deep scan, preview, filtering, sorting, and CSV export.",
      "Kept the interface responsive during long-running scan operations.",
    ],
    tags: ["Python", "Tkinter", "Pillow", "Multithreading"],
  },
  {
    title: "AI Summarizer Pro",
    type: "Web Application",
    description:
      "A fast summarization tool for long-form content and URLs, built to deliver useful summaries through a streamlined and responsive user interface.",
    points: [
      "Created with React and Vite for speed-focused frontend delivery.",
      "Integrated RapidAPI to automate summarization workflows.",
      "Focused on lightweight interactions and smooth usability across screens.",
    ],
    tags: ["React", "Vite", "JavaScript", "RapidAPI"],
    liveLink: "https://ai-summarizerpro.vercel.app/",
  },
  {
    title: "GitHub Account Finder",
    type: "Developer Tool",
    description:
      "A lightweight GitHub profile discovery app that helps users search developers instantly and inspect profile details in a simple, fast interface.",
    points: [
      "Uses the GitHub Search API to find matching usernames in real time.",
      "Fetches detailed profile information including avatar, followers, following, and profile links.",
      "Built as a clean frontend-first utility with HTML, CSS, and TypeScript.",
    ],
    tags: ["TypeScript", "HTML", "CSS", "GitHub API"],
    liveLink: "https://github-account-finder-nine.vercel.app/",
    repoLink: "https://github.com/developershubham01/Github-account-finder",
  },
  {
    title: "CyberIntelligence360",
    type: "Cybersecurity Platform",
    description:
      "A modern platform for exploring OSINT, ethical hacking, and security research tools with a strong focus on discoverability, learning, and clean UX.",
    points: [
      "Organizes cybersecurity resources for learners, researchers, investigators, and ethical hackers.",
      "Built with React, Tailwind CSS, React Router, Framer Motion, Lucide React, and React Icons.",
      "Designed as a responsive, educational, and community-driven security tools experience.",
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    liveLink: "https://cyberintelligence360.vercel.app/",
    repoLink: "https://github.com/developershubham01/cyberintelligence360",
  },
];

const skillGroups = [
  {
    title: "Core Languages",
    items: ["Python","Java","C/C++", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive UI",
      "JSX",
    ],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "API Integration",
      "Authentication",
      "Backend Architecture",
      "AI Integrations",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Supabase", "Database Design", "Query Optimization"],
  },
  {
    title: "Deployment & Tools",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "Railway",
      "Deployment Workflows",
    ],
  },
];

const highlights = [
  {
    value: "9.73",
    label: "BSc IT CGPA",
  },
  {
    value: "3",
    label: "Major shipped projects",
  },
  {
    value: "AI",
    label: "Product-focused integrations",
  },
];

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "IBM",
    link: "https://www.credly.com/badges/ba94d585-335d-422a-9e6d-ff28c34af400/public_url",
  },
  {
    title: "Web Development",
    issuer: "IBM",
    link: "https://www.credly.com/badges/c74e9951-90b7-4b03-8d1e-498f71d4eddc/public_url",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/9d5ae9e55981",
  },
  {
    title: "Generative AI",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=596DAD9E688123E4D70C79E0E413C31ABFC522A519BD01774ABFF4C2FE163C24",
  },
  {
    title: "OCI Certified Developer",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5CDE2D9E25A6974038E7C94CE968B4780C6CF86AB3FD5067FB56783270ABD108",
  },
  {
    title: "Google Cloud Arcade Novice Achiever",
    issuer: "Google Cloud",
    link: "https://www.linkedin.com/posts/shubham-sharma395_googlecloud-cloudcomputing-googlecloudskillsboost-activity-7398250463114067968-UYxR",
  },
];

const focusAreas = [
  "FastAPI APIs",
  "React Interfaces",
  "AI Workflows",
  "PostgreSQL Systems",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFocusIndex((value) => (value + 1) % focusAreas.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <ProfileBadge size="small" className="brand-mark" />
            <span className="brand-copy">
              <strong>Shubham Sharma</strong>
              <small>Python Full Stack Developer</small>
            </span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal="up">
              <p className="eyebrow">Mumbai, India | Full stack and AI product builder</p>
              <h1>
                <SplitText
                  as="span"
                  className="hero-title-line"
                  text="Building polished"
                />
                <SplitText
                  as="span"
                  className="hero-title-line hero-title-accent"
                  text="digital products"
                  delay={34}
                />
                <SplitText
                  as="span"
                  className="hero-title-line"
                  text="with Python, React,"
                  delay={26}
                />
                <SplitText
                  as="span"
                  className="hero-title-line hero-title-muted"
                  text="and scalable backend systems."
                  delay={20}
                />
              </h1>
              <p className="hero-text">
                I create responsive web experiences, backend services, and
                AI-integrated workflows that feel clean for users and reliable in
                production.
              </p>

              <div className="hero-proof" data-reveal="up">
                <span>FastAPI architecture</span>
                <span>AI product workflows</span>
                <span>Responsive UI systems</span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore Projects
                </a>
                <a className="button button-secondary" href="#contact">
                  Hire Me
                </a>
              </div>

              
            </div>

            <div className="hero-panel" data-reveal="left">
              <article className="surface-card hero-card-main">
                <p className="card-label">Current Focus</p>
                <h2>{focusAreas[focusIndex % focusAreas.length]}</h2>
                <p>
                  Focused on building performant products with smooth interfaces,
                  well-structured APIs, and deployment-ready architecture.
                </p>
              </article>

              <div className="hero-stats">
                {highlights.map((item) => (
                  <article className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container section-heading" data-reveal="up">
            <p className="eyebrow">About</p>
            <h2>
              <SplitText
                as="span"
                className="section-title-line"
                text="Turning ideas into fast, useful,"
                segmentBy="words"
                delay={70}
              />
              <SplitText
                as="span"
                className="section-title-line"
                text="and production-ready experiences."
                segmentBy="words"
                delay={80}
              />
            </h2>
            <p>
              I'm an aspiring Python Full Stack Developer with hands-on
              experience building scalable web applications using FastAPI,
              React.js, PostgreSQL, and AI services. My focus is practical:
              strong backend logic, clean frontend delivery, and thoughtful user
              experience.
            </p>
          </div>

          <div className="container about-grid">
            <article className="surface-card about-story" data-reveal="up">
              <h3>What I bring to projects</h3>
              <p>
                I enjoy building software end to end, from API design and data
                modeling to responsive interfaces and deployment. I care about
                clean architecture, readable code, and products that solve real
                user problems.
              </p>
              <p>
                My stack includes FastAPI, React.js, PostgreSQL, Supabase,
                Vercel, Render, Railway, and AI integrations such as Google
                Gemini API.
              </p>
              <div className="about-metrics">
                <div>
                  <strong>Backend to frontend</strong>
                  <span>Comfortable owning the full product surface.</span>
                </div>
                <div>
                  <strong>Deployment aware</strong>
                  <span>Used real hosting stacks instead of local-only demos.</span>
                </div>
              </div>
            </article>

            <div className="about-highlights">
              <article className="surface-card highlight-card" data-reveal="up">
                <span className="highlight-index">01</span>
                <h3>Backend Architecture</h3>
                <p>
                  Designing RESTful APIs, parsing flows, and reliable logic for
                  scalable app behavior.
                </p>
              </article>

              <article className="surface-card highlight-card" data-reveal="up">
                <span className="highlight-index">02</span>
                <h3>Frontend Execution</h3>
                <p>
                  Creating responsive interfaces with strong layout, hierarchy,
                  and smooth cross-device interactions.
                </p>
              </article>

              <article className="surface-card highlight-card" data-reveal="up">
                <span className="highlight-index">03</span>
                <h3>Deployment Mindset</h3>
                <p>
                  Shipping projects with real hosting, persistence, and product
                  polish rather than stopping at prototypes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container section-heading" data-reveal="up">
            <p className="eyebrow">Projects</p>
            <h2>
              <SplitText
                as="span"
                className="section-title-line"
                text="Selected work that blends"
                segmentBy="words"
                delay={68}
              />
              <SplitText
                as="span"
                className="section-title-line"
                text="functionality, scale, and user value."
                segmentBy="words"
                delay={78}
              />
            </h2>
            <p>
              These projects show how I approach product quality across desktop
              applications, AI-integrated services, and modern web experiences.
            </p>
          </div>

          <div className="container projects-grid">
            {projects.map((project) => (
              <article
                className={`surface-card project-card ${
                  project.title.includes("Resume") ? "featured-project" : ""
                }`}
                key={project.title}
                data-reveal="up"
              >
                <div className="project-topline">
                  <span className="project-badge">{project.type}</span>
                  <div className="project-links">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        Live Preview
                      </a>
                    ) : null}
                    {project.repoLink ? (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link secondary"
                      >
                        GitHub Repo
                      </a>
                    ) : null}
                    {!project.liveLink && !project.repoLink ? (
                      <span className="project-year">In Depth Build</span>
                    ) : null}
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="chip-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container section-heading" data-reveal="up">
            <p className="eyebrow">Technical Skills</p>
            <h2>
              <SplitText
                as="span"
                className="section-title-line"
                text="Tools I use to build, launch,"
                segmentBy="words"
                delay={66}
              />
              <SplitText
                as="span"
                className="section-title-line"
                text="and improve modern applications."
                segmentBy="words"
                delay={76}
              />
            </h2>
          </div>

          <div className="container skills-grid">
            {skillGroups.map((group) => (
              <article className="surface-card skill-group" key={group.title} data-reveal="up">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container section-heading" data-reveal="up">
            <p className="eyebrow">Certifications</p>
            <h2>
              <SplitText
                as="span"
                className="section-title-line"
                text="Verified learning across AI,"
                segmentBy="words"
                delay={64}
              />
              <SplitText
                as="span"
                className="section-title-line"
                text="cloud, web development, and SQL."
                segmentBy="words"
                delay={74}
              />
            </h2>
            <p>
              These certifications reflect hands-on learning across modern software
              development, AI tools, cloud platforms, and backend fundamentals.
            </p>
          </div>

          <div className="container certifications-grid">
            {certifications.map((certification) => (
              <a
                key={certification.title}
                className="surface-card certification-card"
                href={certification.link}
                target="_blank"
                rel="noreferrer"
                data-reveal="up"
              >
                <span className="certification-kicker">Credential</span>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                <span className="certification-link">View Certificate</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-card surface-card" data-reveal="up">
              <p className="eyebrow">Contact</p>
              <h2>
                <SplitText
                  as="span"
                  className="section-title-line"
                  text="Let's create a product"
                  segmentBy="words"
                  delay={72}
                />
                <SplitText
                  as="span"
                  className="section-title-line"
                  text="that looks sharp and performs even better."
                  segmentBy="words"
                  delay={82}
                />
              </h2>
              <p>
                If you're hiring for a full stack role, building a product, or
                need someone who can contribute across frontend and backend, I'd
                love to connect.
              </p>

              <a
                className="button button-primary"
                href="mailto:shubhamsharma200599@gmail.com"
              >
                Start a Conversation
              </a>
            </div>

            <div className="contact-stack" data-reveal="left">
              <a
                className="surface-card contact-item"
                href="mailto:shubhamsharma200599@gmail.com"
              >
                <span className="contact-label">Email</span>
                <strong>shubhamsharma200599@gmail.com</strong>
                <small>Best for job opportunities and project discussions</small>
              </a>

              <a className="surface-card contact-item" href="tel:+919695127889">
                <span className="contact-label">Phone</span>
                <strong>+91 9695127889</strong>
                <small>Available for direct conversation and quick follow-ups</small>
              </a>

              <a
                className="surface-card contact-item"
                href="https://github.com/developershubham01"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">GitHub</span>
                <strong>github.com/developershubham01</strong>
                <small>Explore repositories, experiments, and shipped work</small>
              </a>

              <a
                className="surface-card contact-item"
                href="https://www.linkedin.com/in/shubham-sharma395/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">LinkedIn</span>
                <strong>shubham-sharma395</strong>
                <small>Connect professionally and follow my latest updates</small>
              </a>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTopButton />
    </div>
  );
}
