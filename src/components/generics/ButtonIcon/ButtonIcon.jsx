import React from 'react'
import styles from './buttonIcon.module.css'
const ButtonIcon = ({text,icon,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
        {icon}
        <span>{text}</span>
    </button>
  )
}

export default ButtonIcon