import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from "../../images/me.png"


const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="me" />
            <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
            <div className={styles.imgcontainer}>
            <img src={img} alt="about"></img>

            </div>

            </article>
            <article className={styles.aboutInfo}>
                <h4>Get to know me</h4>
                <p>Bla bla bla
                </p>
                <p>dalksjdlakjdalskfjöalfjaölfjaälsfaälfkaldkaädk</p>
                <button type="button"
                className="btn-primary">
                    Read more
                </button>


            </article>
            </div>
        </section>
            
    )
}

export default About
