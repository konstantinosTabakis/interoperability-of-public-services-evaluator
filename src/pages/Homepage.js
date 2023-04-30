import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import SurveyContext from "../context/SurveyContext"
import { useContext } from "react"

function Homepage() {
    const {content} =useContext(SurveyContext)

    return (
        <div className="homepage">
            <Header/>
            <div className="homepage__content">
                <h2 className="heading-primary centered mg-b-tiny">
                {content.homepage_title}
                </h2>
                <p className="homepage__content-text mg-b-small"> {content.homepage_text}</p>
                <div className="centered">
                    <Link to='/survey'><button className="btn btn-primary"> {content.homepage_cta}</button></Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Homepage