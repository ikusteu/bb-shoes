import styles from './banner.module.css'

const Banner = (props) => (
    <section className={styles.sliderFrame}>
        {
        (props.type === "carousel" 
        && (
            <img src='/images/slider_temp.jpg' />
        )) ||  /*switch video or carousel*/
        (props.type === "video"
        && (
            <video autoPlay loop muted>
                <source src={props.src} type="video/mp4" />
            </video>
        ))
        }
    </section>
);

export default Banner;