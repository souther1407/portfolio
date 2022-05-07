import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import styles from './portfolio.module.css'
import Proyects from './Proyects/Proyects'
import Skills from './Skills/Skills'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
        <Nav />
        <AboutMe />
        <Skills />
        <Proyects />
        <Footer/>
    </div>
  )
}

export default Portfolio