import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import styles from './portfolio.module.css'
import Skills from './Skills/Skills'

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
        <Nav />
        <AboutMe />
        <Skills />
        <Footer/>
    </div>
  )
}

export default Portfolio