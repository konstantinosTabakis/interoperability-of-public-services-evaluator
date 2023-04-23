import Header from "./Header"
import Footer from "./Footer"
import SurveyContext from "../context/SurveyContext"
import { useContext } from "react"

function About() {

    const {content}= useContext(SurveyContext)
    return (
        <div className="about">
            <Header/>
            <div className="about__content">
                <h2 className="heading-primary mg-b-small">{content.about_heading} </h2>
                <p className="mg-b-small">{content.about_par1} </p>
                <p className="mg-b-small">{content.about_par2} </p>
                <p className="mg-b-small">{content.about_par3} <a href="https://www.linkedin.com/in/konstantinos-tabakis/" target="_blank" >Linkedin.</a> </p>
                <p>{content.about_par4}  </p>
                <div className="about__content-btn-area mg-t-medium">
                    <button className="btn btn-secondary">{content.about_btn1}</button>
                    <button className="btn btn-primary">{content.about_btn2}</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About