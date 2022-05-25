import React from 'react'
import ButtonIcon from '../../generics/ButtonIcon/ButtonIcon'
import styles from './nav.module.css'
import {FaUserCircle} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import {BsFillBriefcaseFill} from "react-icons/bs"

const Nav = () => {

  const handleClick = (nombre) => { 
    console.log(nombre)
    const target = document.getElementById(nombre); 
    target.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <nav className={styles.nav}>
     
        <ButtonIcon text="About me" name="AboutMe" icon={<FaUserCircle fontSize="32px"/>} className={styles.btnAboutMe} onClick={() =>handleClick("AboutMe")}/>
      
      
        <ButtonIcon text="Skills" name="Skills" icon={<AiFillStar fontSize="32px"/>} className={styles.btnSkills} onClick={() =>handleClick("Skills")}/>
     
      
        <ButtonIcon text="Projects" name="Projects" icon={<BsFillBriefcaseFill fontSize="32px"/>} className={styles.btnProyects} onClick={() =>handleClick("Projects")}/>
      
    </nav>
  )
}

export default Nav