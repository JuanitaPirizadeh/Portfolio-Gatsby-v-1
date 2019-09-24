import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'



export default () => (
<Layout>
    <SimpleHero>
        <Banner
            title="Juanita Pirizadeh"
            info="An aspiring front end developer bla bla bla check ut out yaaall"
            >
                <Link to="/projects" className="btn-white">
                    Check out my projects
                </Link>
            </Banner>
    </SimpleHero>
    <About />
    <Services />
</Layout>
)