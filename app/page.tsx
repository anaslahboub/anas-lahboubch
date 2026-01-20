"use client"

import type React from "react"

import { useCallback, useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import {
  SiSpringboot,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiJavascript,
  SiKeycloak,
  SiRedis,
  SiTailwindcss,
  SiNestjs,
  SiGraphql,
  SiTypeorm,
  SiSonarqube,
  SiStripe,
  SiTerraform,
  SiKubernetes,
  SiAnsible,
  SiAwsamplify,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FiHome, FiGrid, FiFolder } from "react-icons/fi"
import { MdSchool, MdEmojiEvents } from "react-icons/md"
import SkillsTab from "../components/SkillsTab"
import ProjectsTab from "../components/ProjectsTab"

type DesktopTab = "home" | "skills" | "projects" | "certifications" | "education"

export const skills = [
  {
    id: "java",
    label: "Java 17/21",
    Icon: FaJava,
    brandColor: "#ED8B00",
  },
  {
    id: "spring-boot",
    label: "Spring Boot 3.x",
    Icon: SiSpringboot,
    brandColor: "#6DB33F",
  },
  {
    id: "docker",
    label: "Docker & Compose",
    Icon: SiDocker,
    brandColor: "#2496ED",
  },
  {
    id: "react",
    label: "React 18",
    Icon: SiReact,
    brandColor: "#61DAFB",
  },
  {
    id: "next",
    label: "Next.js 14/15",
    Icon: SiNextdotjs,
    brandColor: "#FFFFFF",
  },
  {
    id: "angular",
    label: "Angular 20",
    Icon: SiAngular,
    brandColor: "#DD0031",
  },
  {
    id: "ts",
    label: "TypeScript",
    Icon: SiTypescript,
    brandColor: "#3178C6",
  },
  {
    id: "js",
    label: "JavaScript",
    Icon: SiJavascript,
    brandColor: "#F7DF1E",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    Icon: SiPostgresql,
    brandColor: "#4169E1",
  },
  {
    id: "mysql",
    label: "MySQL / MariaDB",
    Icon: SiMysql,
    brandColor: "#4479A1",
  },
  {
    id: "mongo",
    label: "MongoDB",
    Icon: SiMongodb,
    brandColor: "#47A248",
  },
  {
    id: "php",
    label: "PHP",
    Icon: SiPhp,
    brandColor: "#777BB4",
  },
  {
    id: "spring-cloud",
    label: "Spring Cloud (Config / Gateway / Eureka)",
    Icon: SiSpringboot,
    brandColor: "#6DB33F",
  },
  {
    id: "keycloak",
    label: "Keycloak Identity",
    Icon: SiKeycloak,
    brandColor: "#324152",
  },
  {
    id: "redis",
    label: "Redis Cache",
    Icon: SiRedis,
    brandColor: "#DC382D",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    Icon: SiTailwindcss,
    brandColor: "#06B6D4",
  },
  {
    id: "nestjs",
    label: "NestJS 10",
    Icon: SiNestjs,
    brandColor: "#E0234E",
  },
  {
    id: "graphql",
    label: "GraphQL Server",
    Icon: SiGraphql,
    brandColor: "#E10098",
  },
  {
    id: "typeorm",
    label: "TypeORM (PostgreSQL)",
    Icon: SiTypeorm,
    brandColor: "#FE0902",
  },
  {
    id: "sonarqube",
    label: "SonarQube (Code Quality)",
    Icon: SiSonarqube,
    brandColor: "#4E9BCD",
  },
  {
    id: "stripe",
    label: "Stripe Payments",
    Icon: SiStripe,
    brandColor: "#626CD9",
  },
  {
    id: "terraform",
    label: "Terraform",
    Icon: SiTerraform,
    brandColor: "#7B42F6",
  },
  {
    id: "kubernetes",
    label: "Kubernetes",
    Icon: SiKubernetes,
    brandColor: "#326CE5",
  },
  {
    id: "ansible",
    label: "Ansible",
    Icon: SiAnsible,
    brandColor: "#EE0000",
  },
  {
    id: "aws",
    label: "AWS (Cloud & DevOps)",
    Icon: SiAwsamplify,
    brandColor: "#FF9900",
  },
]

export const architectureProjects = [
  {
    id: "chat-platform",
    title: "Chat Microservices Application",
    stack: "Spring Boot 3.5 · Angular 20 · PostgreSQL · Keycloak · Redis · Docker",
    description:
      "Application de messagerie en temps réel avec microservices (Chat, Group, Post). Inclut OAuth2/Keycloak, WebSocket, et interface Angular moderne.",
  },
  {
    id: "tms",
    title: "TMS - Transport Management System",
    stack: "Spring Boot · React · MySQL",
    description:
      "Système de gestion de transport pour la planification des trajets, la gestion des chauffeurs et le suivi des flottes.",
  },
  {
    id: "ecommerce-ms",
    title: "E‑commerce Microservices",
    stack: "NestJS · MongoDB · PostgreSQL · RabbitMQ",
    description:
      "Architecture microservices pour e‑commerce avec catalogue produits, commandes et paiements découplés.",
  },
]

export const certifications = [
  {
    title: "Oracle Certified Associate Java Programmer",
    issuer: "Oracle University",
    date: "July 2025",
    skills: ["Java SE 8", "OOP", "JVM"],
    icon: MdEmojiEvents,
    color: "#EF4444",
    image: "/certification1.png",
  },
  {
    title: "Oracle Certified Associate Java Programmer SE 17",
    issuer: "Oracle University",
    date: "January 2026",
    skills: ["Java SE 17", "OOP", "Functional Programming", "Modules"],
    icon: MdEmojiEvents,
    color: "#1E40AF",
    image: "/certification1.png",
  },
]

export const education = [
  {
    degree: "Diplôme d'Ingénieur Logiciel",
    school: "ENSA Agadir (École Nationale Supérieure d'Arts et Métiers)",
    period: "2021 - 2026",
    description: "Programme d'ingénierie informatique complet couvrant les architectures logicielles, les systèmes distribués, et les technologies cloud.",
    icon: MdSchool,
    color: "#3B82F6",
    status: "En cours (5ème année)",
    image: "/ensa.png",
  },
]

export const portfolioProjects = [
  
  {
    id: 2,
    title: "Spectateur Spring Batch - Système de Gestion des Entrées",
    description:
      "Application Spring Batch robuste pour le traitement par lots des entrées de spectateurs dans un stade. Lit des données XML/JSON, valide, transforme et calcule automatiquement des statistiques détaillées sur la fréquentation. Implémente plusieurs design patterns (Strategy, Composite, Factory, Observer).",
    technologies: ["Spring Boot 3", "Spring Batch 5", "JPA", "Hibernate", "JAXB", "Jackson", "H2/PostgreSQL", "Docker", "Lombok"],
    image: "/project-batch.png",
    liveUrl: "https://github.com/anaslahboub/spectateur-spring-batch",
    githubUrl: "https://github.com/anaslahboub/spectateur-spring-batch",
    featured: false,
    situation:
      "Besoin de traiter de gros volumes de données d'entrées de spectateurs provenant de multiples sources (XML, JSON) avec validation métier et génération de statistiques analytiques",
    action:
      "Développement d'une solution Spring Batch avec architecture multi-couches, implémentation de design patterns (Strategy pour validation, Composite pour règles métier, Factory pour création d'objets), et calcul automatique de statistiques",
    result:
      "Traitement automatisé toutes les 10 minutes avec gestion des erreurs, génération de 125+ statistiques (distribution par nationalité, types de tickets, affluence par tribune), et respect des principes SOLID",
  },
  {
    id: 3,
    title: "Backend Agile App",
    description:
      "Application de gestion de sprints et tâches avec API sécurisée. Système complet de suivi de projet avec authentification et gestion des rôles.",
    technologies: ["Spring Boot", "JPA", "MySQL", "JWT", "Spring Security", "Swagger"],
    image: "/methodeAgile.jpg",
    liveUrl: "https://github.com/anaslahboub/AgilApplication",
    githubUrl: "https://github.com/anaslahboub/AgilApplication",
    featured: false,
    situation: "Gestion efficace des projets agiles et des équipes",
    action: "Développement d'une API REST complète avec Spring Boot",
    result: "Système de gestion performant avec authentification JWT",
  },
  {
    id: 4,
    title: "Gestion de Pharmacie",
    description:
      "Application web pour la gestion des stocks et ventes en pharmacie. Interface moderne avec React et backend robuste en JavaEE.",
    technologies: ["React.js", "JavaEE", "MySQL", "Bootstrap"],
    image: "/pharmacie.png",
    liveUrl: "https://github.com/anaslahboub/pharmacie_project",
    githubUrl: "https://github.com/anaslahboub/pharmacie_project",
    featured: false,
    situation: "Digitalisation de la gestion pharmaceutique",
    action: "Développement d'une solution complète de gestion",
    result: "Application web moderne pour optimiser les opérations",
  },
  {
    id: 5,
    title: "Portfolio Personnel",
    description:
      "Site portfolio moderne et responsive développé avec Next.js et CSS. Design épuré avec animations fluides et navigation intuitive.",
    technologies: ["Next.js", "CSS", "TypeScript", "Vercel"],
    image: "/portfolio.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    situation: "Présentation professionnelle de mes compétences",
    action: "Création d'un portfolio moderne avec Next.js",
    result: "Site responsive avec animations et design moderne",
  },
  {
    id: 6,
    title: "Gestion des Stages à l'ENSA Agadir",
    description:
      "Plateforme digitale pour la gestion des stages des étudiants de l'ENSA Agadir. Le système permet aux étudiants de trouver des offres de stage, aux entreprises de poster des annonces, et aux administrateurs de suivre le processus de stage.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    image: "/project-web.png",
    liveUrl: "https://github.com/anaslahboub/mon-premier-project-web-",
    githubUrl: "https://github.com/anaslahboub/mon-premier-project-web-",
    featured: false,
    situation:
      "Manque de centralisation dans la gestion des stages à l'ENSA Agadir, avec des processus manuels et peu efficaces",
    action:
      "Développement d'une plateforme web complète avec trois interfaces (étudiants, entreprises, administrateurs) et mise en place d'un système de matching entre offres et demandes",
    result:
      "Optimisation du processus de stage avec réduction du temps de traitement des demandes de 60% et meilleure visibilité pour les entreprises",
  },
  {
    id: 7,
    title: "Gestion de Cabinet Dentaire",
    description:
      "Application desktop développée avec JavaFX pour la gestion complète d'un cabinet dentaire. Les fonctionnalités incluent la prise de rendez-vous, la gestion des dossiers patients, le suivi des traitements et la facturation.",
    technologies: ["JavaFX", "Java", "MySQL", "SceneBuilder"],
    image: "/project-java.png",
    liveUrl: "https://github.com/anaslahboub/project-javaFX",
    githubUrl: "https://github.com/anaslahboub/project-javaFX",
    featured: false,
    situation:
      "Gestion papier des dossiers patients et des rendez-vous dans un cabinet dentaire, entraînant des erreurs et une perte de temps",
    action:
      "Conception et développement d'une application desktop intuitive avec JavaFX, intégrant toutes les fonctionnalités nécessaires à la gestion quotidienne d'un cabinet",
    result:
      "Digitalisation complète des processus avec réduction des erreurs de 75% et gain de temps estimé à 2 heures par jour pour le personnel",
  },
  
]

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
}

const formatTime = (date: Date) =>
  date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })

type ScreenState = "lock" | "login" | "desktop"

export default function Home() {
  const [screen, setScreen] = useState<ScreenState>("lock")
  const [activeTab, setActiveTab] = useState<DesktopTab>("home")
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    // Initialise l'heure uniquement côté client pour éviter un rendu différent entre serveur et client
    const initialNow = new Date()
    setNow(initialNow)

    const interval = setInterval(() => setNow(new Date()), 1000 * 30)
    return () => clearInterval(interval)
  }, [])

  const dateText = useMemo(() => (now ? formatDate(now) : ""), [now])
  const timeText = useMemo(() => (now ? formatTime(now) : ""), [now])

  const unlock = useCallback(() => {
    if (screen === "lock") {
      setScreen("login")
      setTimeout(() => setScreen("desktop"), 900)
    }
  }, [screen])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (screen === "lock") {
        event.preventDefault()
        unlock()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [screen, unlock])

  return (
    <div className="os-root">
      <AnimatePresence initial={false}>
        {screen === "lock" && (
          <motion.div
            key="lock"
            className="lock-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
            }}
            onClick={unlock}
          >
            <div className="lock-overlay" />
            <div className="lock-content">
              <div className="lock-date">{dateText}</div>
              <div className="lock-time">{timeText}</div>
              <div className="lock-hint">
                <span className="lock-chevron">˄</span>
                Click or press any key to unlock
              </div>
            </div>
          </motion.div>
        )}

        {screen === "login" && (
          <motion.div
            key="login"
            className="login-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="login-card glass-panel">
              <div className="login-avatar">
                <img src="/profile.png" alt="Anas Lahboub" />
              </div>
              <div className="login-name">Anas Lahboub</div>
              <div className="login-caption">Software Engineering Student — ENSA Agadir</div>
            </div>
          </motion.div>
        )}

        {screen === "desktop" && (
          <motion.div key="desktop" className="desktop" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <aside className="sidebar-modern glass-panel">
              <div className="sidebar-header">
                <div className="sidebar-avatar-modern">
                  <img src="/profile.png" alt="Anas" />
                </div>
                <div className="sidebar-user-info">
                  <div className="sidebar-user-name">Anas</div>
                  <div className="sidebar-user-status">Available</div>
                </div>
              </div>

              <nav className="sidebar-nav-modern">
                <NavButton
                  icon={<FiHome />}
                  label="Home"
                  active={activeTab === "home"}
                  onClick={() => setActiveTab("home")}
                />
                <NavButton
                  icon={<FiGrid />}
                  label="Skills"
                  active={activeTab === "skills"}
                  onClick={() => setActiveTab("skills")}
                />
                <NavButton
                  icon={<FiFolder />}
                  label="Projects"
                  active={activeTab === "projects"}
                  onClick={() => setActiveTab("projects")}
                />
                <NavButton
                  icon={<MdEmojiEvents />}
                  label="Certifications"
                  active={activeTab === "certifications"}
                  onClick={() => setActiveTab("certifications")}
                />
                <NavButton
                  icon={<MdSchool />}
                  label="Education"
                  active={activeTab === "education"}
                  onClick={() => setActiveTab("education")}
                />
              </nav>
            </aside>

            <main className="desktop-main">
              <section className="window glass-panel">
                <header className="window-header">
                  <div className="window-title">
                    {activeTab === "home" && "Welcome"}
                    {activeTab === "skills" && "Skills"}
                    {activeTab === "projects" && "Projects"}
                    {activeTab === "certifications" && "Certifications"}
                    {activeTab === "education" && "Education"}
                  </div>
                  <div className="window-actions">
                    <button className="dot dot-yellow" aria-label="Minimize" />
                    <button className="dot dot-green" aria-label="Maximize" />
                    <button className="dot dot-red" aria-label="Close" />
                  </div>
                </header>

                <div className="window-body">
                  {activeTab === "home" && <HomeTab />}
                  {activeTab === "skills" && <SkillsTab skills={skills} />}
                  {activeTab === "projects" && (
                    <ProjectsTab architectureProjects={architectureProjects} portfolioProjects={portfolioProjects} />
                  )}
                  {activeTab === "certifications" && <CertificationsTab />}
                  {activeTab === "education" && <EducationTab />}
                </div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

type NavButtonProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

function NavButton({ icon, label, active, onClick }: NavButtonProps) {
  return (
    <button onClick={onClick} className={clsx("nav-button", active && "nav-button-active")}>
      <span className="nav-button-icon">{icon}</span>
      <span className="nav-button-label">{label}</span>
      {active && <motion.div className="nav-button-indicator" layoutId="active-tab" />}
    </button>
  )
}

function HomeTab() {
  return (
    <div className="tab-home-container">
      <div className="home-hero-section">
        <div className="home-hero-left">
          <p className="home-greeting">Hello, I&apos;m</p>
          <h1 className="home-hero-title">
            Anas Lahboub,{" "}
            <span className="home-highlight">Java/Spring  &amp; Full Stack Engineer</span>
          </h1>
          <p className="home-hero-subtitle">Software Engineering student at ENSA Agadir</p>
          <p className="home-hero-description">
            5th year Software Engineering student at ENSA Agadir, currently looking for a PFE internship starting
            February 2025. I design scalable backends in Java/Spring and craft modern web experiences with React and
            Next.js.
          </p>
          <div className="home-hero-cta">
            <button className="btn-primary">View Projects</button>
            <a className="btn-secondary" href="/cv.pdf" download>
              Download CV
            </a>
          </div>
        </div>
        <div className="home-hero-right">
          <div className="home-profile-card-large glass-panel">
            <div className="home-profile-avatar-large">
              <img src="/profile.png" alt="Anas Lahboub" />
            </div>
            <div className="home-profile-details">
              <h2 className="home-profile-name">Anas Lahboub</h2>
              <p className="home-profile-role">Java/Spring Developer &amp; Full Stack Engineer</p>
              <p className="home-profile-school">5th year Software Engineering — ENSA Agadir</p>
              <div className="home-profile-location">
                <span>📍</span>
                <span>Taroudant, Morocco</span>
              </div>
              <a className="home-profile-email" href="mailto:anas.lahboub@edu.uiz.ac.ma">
                anas.lahboub@edu.uiz.ac.ma
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="home-about-section">
        <h2 className="home-section-title">About Me</h2>
        <div className="home-about-content">
          <p className="home-about-paragraph">
            I am a Software Engineering student in my 5th year at ENSA Agadir with a strong focus on backend
            architectures and modern web applications. I enjoy designing clean domain models, robust APIs, and intuitive
            user interfaces.
          </p>
          <p className="home-about-paragraph">
            I am particularly interested in internships where I can work on large-scale systems, microservices, and
            secure authentication flows using technologies like Spring Boot, Keycloak, and modern frontend frameworks.
          </p>
        </div>
      </div>
    </div>
  )
}

function CertificationsTab() {
  return (
    <div className="tab-certifications-container">
      <h2 className="tab-section-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon
          return (
            <div key={index} className="certification-card glass-panel">
              <div className="certification-header">
                <div className="certification-icon" style={{ backgroundColor: cert.color }}>
                  <IconComponent size={32} color="white" />
                </div>
                <div className="certification-meta">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                </div>
              </div>
              {cert.image && (
                <div className="certification-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
              )}
              <div className="certification-content">
                <p className="certification-date">{cert.date}</p>
                <div className="certification-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EducationTab() {
  return (
    <div className="tab-education-container">
      <h2 className="tab-section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => {
          const IconComponent = edu.icon
          return (
            <div key={index} className="education-card glass-panel">
              <div className="education-icon" style={{ backgroundColor: edu.color }}>
                <IconComponent size={32} color="white" />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-status">{edu.status}</p>
                <p className="education-description">{edu.description}</p>
              </div>
              {edu.image && (
                <div className="education-image">
                  <img src={edu.image} alt={edu.school} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
