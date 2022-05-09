import React from "react"
import styles from './footer.module.css'
import ButtonIcon from "../../generics/ButtonIcon/ButtonIcon"
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from "react-icons/ai"
const Footer = () =>{

    return (
        <footer className={styles.footer}>
            <a href="https://www.linkedin.com/in/eric-alfredo-casanova/" target={"_blank"}>
                <ButtonIcon text="My linkedln" icon={<i><div></div><AiFillLinkedin /></i>} className={styles.btnLinkedln}/>
            </a>
            <a href="https://github.com/souther1407" target={"_blank"}>
                <ButtonIcon text="My github" icon={<AiFillGithub />} className={styles.btnGithub}/>
            </a>
            <a href="mailto:eac_92@hotmail.es">
                <ButtonIcon text="My email" icon={<AiOutlineMail />} className={styles.btnEmail}/>
            </a>
        </footer>
    )
}

export default Footer