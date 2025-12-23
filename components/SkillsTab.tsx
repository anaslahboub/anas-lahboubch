import type React from "react"
import type { skills as skillsSource } from "../app/page"
import styles from "./SkillsTab.module.css"

type Skill = (typeof skillsSource)[number]

type SkillsTabProps = {
  skills: Skill[]
}

export default function SkillsTab({ skills }: SkillsTabProps) {
  return (
    <div className="tab-skills">
      <h2 className="tab-section-title">Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`${styles.skillTile} glass-panel`}
            style={{ "--brand": skill.brandColor } as React.CSSProperties}
          >
            <div className={styles.skillIcon}>
              <skill.Icon size={32} />
            </div>
            <div className={styles.skillLabel}>{skill.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
