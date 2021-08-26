import image from './assets/image 1.jpg'
import GitHub from './github-white.png';
import Website from './website-white.png';
import styles from './Projects.module.css';


function Card(props) {
  
    return (
     
  <div className={styles.card}>
  <div className={styles.cardBody}>


    <div className={styles.imageOverlay}>
    <img className={styles.imageOverlayImg} src={image} alt="landscape" />
      <div className={styles.imageOverlayDescription}>

        <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="GitHub Icon" /> 
        </a>

        <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
        <img src={Website} alt="liveSite Icon" /> 
        </a> 
       
      </div>
    </div>

      <h2 className={styles.cardTitle}>{props.heading}</h2>
      <p className={styles.cardDescription}>{props.description}</p>
  </div>
 
 <button className={styles.cardButton} onClick={props.onClick}>More Information</button>
 

</div>
    
    );
  }
  
  export default Card;
  