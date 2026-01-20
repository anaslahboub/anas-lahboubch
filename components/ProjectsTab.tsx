import { FiFolder, FiCode, FiUsers, FiClock, FiExternalLink } from "react-icons/fi"
import styles from "./ProjectsTab.module.css"

type ProjectsTabProps = {
  architectureProjects: Array<{
    id: string
    title: string
    stack: string
    description: string
  }>
  portfolioProjects: Array<{
    id: number
    title: string
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
  }>
}

export default function ProjectsTab({ architectureProjects, portfolioProjects }: ProjectsTabProps) {
  const allProjects = [
    ...architectureProjects.map((p) => ({
      id: p.id,
      title: p.title,
      stack: p.stack,
      description: p.description,
      type: "architecture" as const,
      liveUrl: undefined,
      githubUrl: undefined,
    })),
    ...portfolioProjects.map((p) => ({
      id: p.id,
      title: p.title,
      stack: p.technologies.join(" · "),
      description: p.description,
      type: "portfolio" as const,
      liveUrl: p.liveUrl,
      githubUrl: p.githubUrl,
    })),
  ]

  return (
    <div className="tab-projects">
      <h2 className="tab-section-title">Projects</h2>

      <div className={styles.projectsShowcaseGrid}>
        {allProjects.map((project, index) => (
          <div key={project.id} className={`${styles.projectShowcaseCard} glass-panel`}>
            <div className={styles.showcaseFolder3d}>
              <div className={styles.folder3dTab}>
                <div className={styles.folderTabAccent} />
              </div>
              <div className={styles.folder3dBody}>
                <div className={styles.folderShine} />
                <div className={styles.folderContentPreview}>
                  <div className={styles.folderLine} style={{ width: "70%" }} />
                  <div className={styles.folderLine} style={{ width: "85%" }} />
                  <div className={styles.folderLine} style={{ width: "60%" }} />
                </div>
              </div>
              <FiFolder className={styles.folderIconOverlay} />
              {/* Floating particles around folder */}
              <div
                className={styles.folderParticle}
                style={{ top: "10%", left: "15%", animationDelay: "0s" }}
              />
              <div
                className={styles.folderParticle}
                style={{ top: "70%", right: "20%", animationDelay: "0.7s" }}
              />
              <div
                className={styles.folderParticle}
                style={{ bottom: "15%", left: "25%", animationDelay: "1.4s" }}
              />
            </div>

            <div className={styles.showcaseContent}>
              <div className={styles.showcaseHeader}>
                <h3 className={styles.showcaseTitle}>{project.title}</h3>
                <div className={styles.showcaseBadge}>
                  {project.type === "architecture" ? (
                    <>
                      <FiCode className={styles.badgeIcon} />
                      <span>Architecture</span>
                    </>
                  ) : (
                    <>
                      <FiUsers className={styles.badgeIcon} />
                      <span>Portfolio</span>
                    </>
                  )}
                </div>
              </div>

              <div className={styles.showcaseStack}>
                <FiClock className={styles.stackIcon} />
                <span>{project.stack}</span>
              </div>

              <p className={styles.showcaseDescription}>{project.description}</p>

              {project.githubUrl && project.githubUrl !== "#" ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.showcaseOpenBtn}
                >
                  <span>View Project</span>
                  <FiExternalLink className={styles.btnIcon} />
                  <div className={styles.btnGlow} />
                </a>
              ) : (
                <button className={styles.showcaseOpenBtn} disabled>
                  <span>View Project</span>
                  <FiExternalLink className={styles.btnIcon} />
                  <div className={styles.btnGlow} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
