import styles from './HeroStyles.module.css'
import heroImg from '../../assets/zz.png'
//import heroImg from '../../assets/hero-img.png'
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import RSM from '../../assets/rsm.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {

    //
    const { theme, toggleTheme } = useTheme();

    

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    return (
    <section id = "hero" className = {styles.container}>
        <div className = {styles.colorModeContainer}>
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
                onClick={toggleTheme}
            />
        </div>
        <div className ={styles.info}>
            <h1>
                Maisha 
                <br />
                Nawar
                </h1>
                <h2>Aspiring Data Engineer</h2>
                <span>
                    <a href="https://github.com/mnawar27?tab=repositories" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/maishanawar/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <p className={styles.description}>Result-driven and highly motivated Computer Science <br></br> graduate with a concentration in AI & Robotics</p>
                <a href={RSM} download>
                    <button className="hover">Resume</button>
                </a>
        </div>
    </section>
  );
}

export default Hero