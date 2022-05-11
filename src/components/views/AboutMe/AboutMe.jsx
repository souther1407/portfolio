import React, { useEffect,useState } from 'react'
import styles from './aboutMe.module.css'
import fotoPerfil from "../../../public/img/fotito.jpg"

const AboutMe = ({posScroll}) => {

  const [height,setHeight] = useState(0)

  useEffect(() => {
    setHeight(document.getElementById("AboutMe").offsetHeight)
  },[])
  
  return (
    <div id="AboutMe" className={`${styles.aboutMe} ${posScroll <= height ? styles.iluminar : ""}` }>
        <h1>About Me</h1>
        <div className={styles.profileAndDesc}>
            <p>"Hi, I'm Eric, I'm a Full Stack Developer with experience focused on Back end,<br></br>
               please, enjoy my portfolio,
              I made it with love :P"</p>
        </div>
    </div>
  )
}

export default AboutMe