import React,{useEffect,useState} from 'react'
import styles from './skills.module.css'
import SkillCard from "../../generics/SkillCard/SkillCard"
import {IoLogoJavascript} from "react-icons/io"
import {SiTypescript,SiPostgresql,SiExpress,SiNestjs,SiSequelize} from "react-icons/si"
import {DiReact,DiCss3Full} from "react-icons/di"
import {FaNodeJs} from "react-icons/fa"
import {AiFillHtml5,AiFillGithub} from "react-icons/ai"

const Skills = ({posScroll}) => {
  const [height,setHeight] = useState(0)
  const [aboutMeHeight,setAboutMeHeight] = useState(0)

  const setHeights = () => {
    setAboutMeHeight(document.getElementById("AboutMe").offsetHeight)
    setHeight(document.getElementById("Skills").offsetHeight)
  }

  useEffect(() => {
    setHeights()
    window.addEventListener("resize", setHeights)
    return () => window.removeEventListener("resize",setHeights)
  },[])
  
  return (
    <div id='Skills' 
    className={`${styles.skills} ${posScroll > aboutMeHeight && posScroll < aboutMeHeight+height ? styles.iluminar : "" }`}>
        <h1>Skills</h1>
        <div className={styles.skillCardContainer}>
            <SkillCard text="JavaScript" icon={<IoLogoJavascript />} className={styles.skillJS}/>
            <SkillCard text="TypeScript" icon={<SiTypescript />} className={styles.skillTS}/>
            <SkillCard text="ReactJS" icon={<DiReact />} className={styles.skillRJ}/>
            <SkillCard text="Postgres" icon={<SiPostgresql />} className={styles.skillPG}/>
            <SkillCard text="NodeJS" icon={<FaNodeJs />} className={styles.skillNJS}/>
            <SkillCard text="ExpressJS" icon={<SiExpress />} className={styles.skillEX}/>
            <SkillCard text="NestJS" icon={<SiNestjs />} className={styles.skillNEST}/>
            <SkillCard text="Github" icon={<AiFillGithub />} className={styles.skillGH}/>
            <SkillCard text="HTML" icon={<AiFillHtml5 />} className={styles.skillHTML}/>
            <SkillCard text="CSS" icon={<DiCss3Full />} className={styles.skillCSS}/>
            <SkillCard text="Sequelize" icon={<SiSequelize />} className={styles.skillSequelize}/>
        </div>
    </div>
  )
}

export default Skills