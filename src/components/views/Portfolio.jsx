import React, { useEffect, useState } from 'react'
import AboutMe from './AboutMe/AboutMe'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import styles from './portfolio.module.css'
import Proyects from './Proyects/Proyects'
import Skills from './Skills/Skills'

const Portfolio = () => {

  const [posScroll,setPosScroll] = useState(0)
  

  const updateScrollPos = (e) => {
    setPosScroll(window.scrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll", updateScrollPos)
    return () => window.removeEventListener("scroll",updateScrollPos)
  },[])


 
  return (
    <div className={styles.portfolio}>
        <Nav />
        <AboutMe posScroll={posScroll}/>
        <Skills posScroll={posScroll}/>
        <Proyects posScroll={posScroll}/>
        <Footer/>
    </div>
  )
}

export default Portfolio