import React from 'react'
import styles from './proyectCard.module.css'
import SkillCard from "../SkillCard/SkillCard"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import {AiFillGithub} from "react-icons/ai"
import {BiWorld} from "react-icons/bi"

const ProyectCard = ({ title, desc, img, techs, link, linkStyle,deployLink,deployLinkStyle }) => {
  return (
    <div className={styles.proyectCard}>

      <div className={styles.proyectImg}>
        <img src={img} />
      </div>
      <div className={styles.proyectInfo}>
        <h2>{title}</h2>

      

        <p>{desc}</p>

       

        <div className={styles.proyectTechs}>
            {
              techs?.map(t => <SkillCard icon={t.icon} text={t.name} className={t.style} />)
            }
        </div>


        <div className={styles.links}>
           <a href={link} target={'_blank'}>
             <ButtonIcon text="Github's repository" icon={<AiFillGithub  fontSize="32px" />} className={linkStyle}/>
           </a>
           {
             deployLink ? 
                <a href={deployLink} target={'_blank'}>
                  <ButtonIcon text="Deploy link" icon={<BiWorld  fontSize="32px" />} className={deployLinkStyle}/>
                </a>
              : null
           }
        </div>

      </div>
    </div>
  )
}

export default ProyectCard