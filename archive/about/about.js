import styles from './about.module.css';

const aboutText = [
    "BB Shoes is a brand of shoes, boots and belts made in workshop Cipele Zlatko located in the hearth of Zagreb in Croatia.",
    "BB Shoes are handmade shoes made in small series which guaratees quality, durability and exclusivity.",
    "With more than 20 models and 50 colors BB Shoes can meet any style you want. All upper parts are made out of finest Italian leathers which are then handlasted onto one out of 12 types of lasts. They are finished with a sole which comes in many varieties regarding colors, materials and methodes of construction.",
    "BB Shoes can be made by measure and that makes them perfect not only in size, but in appearance as well because you can choose the model, materials, colors, sole construction and last. That way you can get yourself a perfect pair made just for you."
];

const About = () => (
    <section className={styles.aboutSection}>
        
        <div className={`bb-border ${styles.videoContainer}`}>
            <video autoPlay loop muted>
                <source src="/images/Video_temp.mp4" type="video/mp4" />
            </video> 
        </div>
        
        <div className={styles.about}>
            <h1>About Us</h1>
            {aboutText.map(p => (
                <p key={aboutText.indexOf(p)}>{p}</p>
            ))}
        </div>
    
    </section>
);    
    
export default About;