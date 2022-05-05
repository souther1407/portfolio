import React from 'react'
import ButtonIcon from '../../generics/ButtonIcon/ButtonIcon'
import styles from './nav.module.css'
import {FaUserCircle} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {BsFillBriefcaseFill} from "react-icons/bs"

const Nav = () => {
  return (
    <nav className={styles.nav}>
        <ButtonIcon text="About me" icon={<FaUserCircle fontSize="32px"/>} className={styles.btnAboutMe}/>
        <ButtonIcon text="Skills" icon={<AiFillStar fontSize="32px"/>} className={styles.btnSkills}/>
        <ButtonIcon text="Proyects" icon={<BsFillBriefcaseFill fontSize="32px"/>} className={styles.btnProyects}/>
    </nav>
  )
}

export default Nav