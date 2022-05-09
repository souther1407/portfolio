import React from 'react'
import ButtonIcon from '../../generics/ButtonIcon/ButtonIcon'
import styles from './nav.module.css'
import {FaUserCircle} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {BsFillBriefcaseFill} from "react-icons/bs"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a href='#AboutMe'>
        <ButtonIcon text="About me" icon={<FaUserCircle fontSize="32px"/>} className={styles.btnAboutMe}/>
      </a>
      <a href='#Skills'>
        <ButtonIcon text="Skills" icon={<AiFillStar fontSize="32px"/>} className={styles.btnSkills}/>

      </a>
      <a href='#Proyects'>
        <ButtonIcon text="Proyects" icon={<BsFillBriefcaseFill fontSize="32px"/>} className={styles.btnProyects}/>
      </a>
    </nav>
  )
}

export default Nav