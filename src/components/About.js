import Header from "./Header"
import Footer from "./Footer"
function About() {
    return (
        <div className="about">
            <Header/>
            <div className="about__content">
                <h2 className="heading-primary">About</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil voluptates, quaerat nostrum ad repudiandae recusandae et natus voluptatem nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil voluptates, quaerat nostrum ad repudiandae recusandae et natus voluptatem nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil voluptates, quaerat nostrum ad repudiandae recusandae et natus voluptatem nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil voluptates, quaerat nostrum ad repudiandae recusandae et natus voluptatem nisi.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil voluptates, quaerat nostrum ad repudiandae recusandae et natus voluptatem nisi.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, voluptas fugit sed dolores ab possimus nihil recusandae soluta quo, assumenda nobis? Soluta recusandae consequuntur facilis pariatur veritatis! Ab, incidunt dolorem?</p>
                <div className="about__content-btn-area mg-t-small">
                    <button className="btn btn-secondary">Home</button>
                    <button className="btn btn-primary">Start Survey</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About