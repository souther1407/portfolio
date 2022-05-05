import React from 'react'
import styles from './aboutMe.module.css'

const AboutMe = ({className}) => {
  return (
    <div className={`${styles.aboutMe}` }>
        <h1>About Me</h1>
        <div className={styles.profileAndDesc}>
            <div>
                <img className={styles.img} src='https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'/>
            </div>   
            <p>"Soy el full estak, me gusta programar y pasarla bien
                 ayudando y todos los que pueda :D, este texto es 
                 excesivamente e innecesariamente largo para determinar.."</p>
        </div>
    </div>
  )
}

export default AboutMe