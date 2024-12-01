import styles from './ProjectsStyles.module.css'
import scd from '../../assets/scd.png'
import shp from '../../assets/shp.png'
import fit from '../../assets/fit.png'
import zp from '../../assets/zsphere.png'

import ProjectCard from '../../common/ProjectCard';
function Projects() {
  return (
    <section id = 'projects' className = {styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={scd} 
            link="https://ud-cisc275-f21.github.io/ud-cis-scheduler-team-7/"
            h3 = "UD Scheduler"
            p = "Class Scheduling Website"
            />
        
            <ProjectCard 
            src={shp} 
            link="https://mnawar27.github.io/react-shopping-cart/"
            h3 = "My Shopping Cart"
            p = "Shopping Website"
            />

            <ProjectCard 
            src={fit} 
            link="https://mnawar27.github.io/fitness-app/"
            h3 = "Your Fitness, Your Way"
            p = "fitness quiz testing"
            />

            <ProjectCard 
            src={zp} 
            link="https://github.com/HappyPythons/CircusCircus"
            h3 = "ZipSphere"
            p = "Zipcode Wilmington Forum"
            />

            
        </div>
    </section>
);
}

export default Projects