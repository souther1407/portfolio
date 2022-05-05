import React from 'react'
import styles from './skillCard.module.css'

const SkillCard = ({ icon, text, className }) => {
  return (
    <div className={`${styles.skillCard} ${className}`}>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default SkillCard