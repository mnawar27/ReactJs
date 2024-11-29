import styles from './HeroStyles.module.css'
import heroImg from '../../assets/zz.png'
//import heroImg from '../../assets/hero-img.png'
import themeIcon from "../../assets/sun.svg"
import githubIcon from "../../assets/github-light.svg"
import linkedinIcon from "../../assets/linkedin-light.svg"
import RSM from '../../assets/rsm.pdf'

function Hero() {
  return (
    <section id = "hero" classNmae = {styles.container}>
        <div classNmae = {styles.colorModeContainer}>
            <img 
                className = {styles.hero} 
                src={heroImg} 
                alt="Profile Picture of Maisha Nawar" 
                style={{ width: "300px", height: "auto" }}
            />
            <img 
                className = {styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
            />
        </div>
        <div classNmae ={styles.info}>
            <h1>
                Maisha 
                <br />
                Nawar
                </h1>
                <h2>Data Engineer</h2>
                <span>
                    <a href="https://github.com/mnawar27?tab=repositories" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/maishanawar/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p>Result-driven and highly motivated Computer Science <br></br> graduate with a concentration in AI & Robotics</p>
                <a href={RSM} download>
                    <button className="hover">Resume</button>
                </a>
        </div>
    </section>
  );
}

export default Hero