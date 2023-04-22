import Footer from "./Footer"
import Header from "./Header"
import { Link } from "react-router-dom"
function Homepage() {
    return (
        <div className="homepage">
            <Header/>
            <div className="homepage__content">
                <h2 className="heading-primary centered mg-b-tiny">
                Interoperability of Public Services Evaluator
                </h2>
                <p className="homepage__content-text mg-b-small"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cum rem deserunt quaerat autem saepe.</p>
                <div className="centered">
                    <Link to='/survey'><button className="btn btn-primary"> Start Survey</button></Link>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Homepage