import React,{useEffect,useState} from 'react'
import ProyectCard from '../../generics/ProyectCard/ProyectCard'
import styles from './proyects.module.css'

import imgRecipes from "../../../public/img/Food-App.png"
import imgCryptoDashboard from "../../../public/img/CryptoDashboard.png"
import imgSoyHostel from "../../../public/img/soyHostel.png"

import {DiJavascript1,DiReact} from "react-icons/di"
import {SiTypescript,SiExpress,SiSequelize,SiPostgresql} from "react-icons/si"

const Proyects = ({ posScroll }) => {

  //  -------------------------------- APP recipies --------------------------------------------
  const titleAppRecipies = "Recipies App"
  const descAppRecipies = `App based on a set of recipies than you can filter them by category ( vegan, vegetarian, etc) and name.
  Also you can sort them alphabetically both ascendent and descendent and create  a new recipy :D`
  const techsAppRecipies = [
     { name:"JavaScript", icon: <DiJavascript1 />, style: styles.skillJS},
     { name:"ReactJS", icon: <DiReact />, style: styles.skillRJ},
     { name:"ExpressJS", icon: <SiExpress />, style: styles.skillEX},
     { name:"Sequelize", icon: <SiSequelize />, style: styles.skillSequelize},
  ]
  const linkGithub = "https://github.com/souther1407/Proyecto-Comidas"




  // --------------------------------- APP cryptoDashboard ---------------------------------------
  const titleAppCryptoDashboard = "CryptoDashboard App"
  const descAppCryptoDashboard = "A simple app that shows the diferent prices of cryptocurrencies, in real time"
  const techAppCryptoDashboard = [
    { name:"ReactJS", icon: <DiReact />, style: styles.skillRJ},
  ]
  const linkGithubCrytoDashboard = "https://github.com/souther1407/cryptoDashboard"
  const linkDeployCrytoDashboard = "https://prueba1407.000webhostapp.com/"




  // ---------------------------------- Soy hostel ------------------------------------------------
  const titleSoyHostel = "Hostel app"
  const descSoyHostel = `A very complete app that lets you create bookings to a hostel (cheap hotel),
  as well as, sign up with diferent roles (client, recepcionist and admin), create rooms with prices,
  store history from your clients, etc`
  const techSoyHostel = [
     { name:"JavaScript", icon: <DiJavascript1 />, style: styles.skillJS},
     { name:"ReactJS", icon: <DiReact />, style: styles.skillRJ},
     { name:"ExpressJS", icon: <SiExpress />, style: styles.skillEX},
     { name:"Postgres", icon: <SiPostgresql />, style: styles.skillPG},
     { name:"Sequelize", icon: <SiSequelize />, style: styles.skillSequelize},
  ]

  const linkGithubSoyHostel = "https://github.com/souther1407/Back-End-PF"
  const linkDeploySoyHostel = "https://soyhostel.com"


  
  
  const [aboutMeHeight,setAboutMeHeight] = useState(0)
  const [skillsHeight,setSkillsHeight] = useState(0)
  useEffect(() => {
    setAboutMeHeight(document.getElementById("AboutMe").offsetHeight)
    setSkillsHeight(document.getElementById("Skills").offsetHeight)
  },[])

  return (
    <div id='Proyects'
     className={`${styles.proyects} ${posScroll > aboutMeHeight+skillsHeight ? styles.iluminar : ""}`}>
        <h1>Proyects</h1>
        <div className={styles.listProyects}>

        <ProyectCard 
            title={titleSoyHostel}
            desc={descSoyHostel}
            img={imgSoyHostel}
            techs={techSoyHostel}
            link={linkGithubSoyHostel}
            linkStyle={styles.gitHub}
            deployLink={linkDeploySoyHostel}
            deployLinkStyle={styles.deploy}
          />
          
          <ProyectCard
             title={titleAppRecipies}
             desc={descAppRecipies}
             img={imgRecipes}
             techs={techsAppRecipies}
             link={linkGithub}
             linkStyle={styles.gitHub}
             
          />

          <ProyectCard 
            title={titleAppCryptoDashboard}
            desc={descAppCryptoDashboard}
            img={imgCryptoDashboard}
            techs={techAppCryptoDashboard}
            link={linkGithubCrytoDashboard}
            linkStyle={styles.gitHub}
            deployLink={linkDeployCrytoDashboard}
            deployLinkStyle={styles.deploy}
          />

          

        </div>
    </div>
  )
}

export default Proyects