import React from "react"
import styles from './footer.module.css'
import ButtonIcon from "../../generics/ButtonIcon/ButtonIcon"
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from "react-icons/ai"
const Footer = () =>{

    return (
        <footer className={styles.footer}>
            <ButtonIcon text="My linkedln" icon={<i><div></div><AiFillLinkedin /></i>} className={styles.btnLinkedln}/>
            <ButtonIcon text="My github" icon={<AiFillGithub />} className={styles.btnGithub}/>
            <ButtonIcon text="My email" icon={<AiOutlineMail />} className={styles.btnEmail}/>
        </footer>
    )
}

export default Footer