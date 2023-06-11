import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
// import DonutChart from "../components/DonutChart"
import { createEvaluation } from "../data/db/db-services"
import pdf from "../data/ΕΠΔ.pdf"
import { useNavigate } from "react-router-dom"
function Results() {

    const navigate = useNavigate()
    const { results, content, maturityLevels, surveyLabel,survey, dispatch } = useContext(SurveyContext)
    const [total, setTotal] = useState(0)
    const [level, setLevel] = useState({})
    const [isInitialRender, setIsInitialRender] = useState(true);

    useEffect(() => {
        if (results.length === 0) {
            navigate('/survey')
        } else {
            const { percentage, level } = calcResults(results.map(element => element.result))
            createEvaluation({survey, surveyLabel, percentage, level})
            setTotal(percentage)
            setLevel(level)
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!isInitialRender) {
            setLevel(calcMaturity(total));
        } else {
            setIsInitialRender(false);
        }
        // eslint-disable-next-line
    }, [maturityLevels])


    const calcResults = (results) => {
        const total = results.reduce((accumulator, currentValue) => accumulator + currentValue) * 20
        const percentage = Math.floor(total / results.length)

        return { percentage, level: calcMaturity(percentage) }
    }

    const calcMaturity = (percentage) => {
        let level
        if (percentage < 20) {
            level = maturityLevels[0]
        } else if (percentage < 40) {
            level = maturityLevels[1]
        } else if (percentage < 60) {
            level = maturityLevels[2]
        } else if (percentage < 80) {
            level = maturityLevels[3]
        } else {
            level = maturityLevels[4]
        }
        return level
    }

    const handleReset = ()=>{
        dispatch({
            type: 'RESET_SURVEY'
        })
        navigate('/survey')
    }

    return (
        <div className='results'>
            <div className="results__container">
                <div className="results__container-card mg-t-huge mg-b-big">
                    <div className="data mg-b-medium">
                        <div>
                            <h2 className="heading-primary mg-b-small "> {content.results_title}</h2>
                            <h4> {content.results_level} <span>{level.level}</span> </h4>
                            <p>{level.response}</p>
                        </div>
                        <div className="total">
                            <div className="total-inner">
                                {content.results_label} <br /> {total}%
                            </div>
                        </div>
                    </div>
                    {/* <div className="chart mg-b-medium">
                        <DonutChart total={total} />
                    </div> */}
                    <div className="">
                        <button className="btn btn-primary w-100"  onClick={handleReset}>Try New Survey</button>
                    </div>
                </div>
                <div className="results__container-help mg-b-big requirements">
                    <h3 className="mg-b-tiny">Requirements</h3>
                    <div className="requirements__inner">
                        {results.map((el, index) => (
                            el.requirements.length > 0 ? (
                                <div className="mg-b-medium" key={index}>
                                    <h4 className={el.result >= 4 ? "green" : "red"}>{el.question}</h4>
                                    <ol>
                                        {el.requirements.map((req, reqIndex) => (
                                            <li key={reqIndex}>{req}</li>
                                        ))}
                                    </ol>
                                </div>
                            ) : null
                        ))}

                    </div>
                    {/*<p className="mg-b-small">{content.results_help_link_text} <a className="pdf" href={pdf} download="Π3_Οδηγός_Εφαρμογής_v1.2.pdf">{content.results_help_link}.</a></p>
                    <h4 className="mg-b-tiny">{content.results_help_subtitle}</h4>
                    <div className="tools">
                        <a href="https://www.w3.org/WAI/ER/tools/" target="_blank" rel="noreferrer">Web Accessibility Evaluation Tools List</a>
                        <a href="https://www.w3.org/developers/tools/" target="_blank" rel="noreferrer">Developer Tools</a>
                        <a href="https://validator.w3.org/" target="_blank" rel="noreferrer">Markup Validator</a>
                        <a href="http://www.w3c.gr/wai/translations/wcag20.html" target="_blank" rel="noreferrer">Web Content Accessibility Guidelines</a>

                    </div> */}
                </div>
                <div className="results__container-help">
                    <h3 className="mg-b-tiny">{content.results_help_title}</h3>
                    <p className="mg-b-small">{content.results_help_link_text} <a className="pdf" href={pdf} download="Π3_Οδηγός_Εφαρμογής_v1.2.pdf">{content.results_help_link}.</a></p>
                    <h4 className="mg-b-tiny">{content.results_help_subtitle}</h4>
                    <div className="tools">
                        <a href="https://www.w3.org/WAI/ER/tools/" target="_blank" rel="noreferrer">Web Accessibility Evaluation Tools List</a>
                        <a href="https://www.w3.org/developers/tools/" target="_blank" rel="noreferrer">Developer Tools</a>
                        <a href="https://validator.w3.org/" target="_blank" rel="noreferrer">Markup Validator</a>
                        <a href="http://www.w3c.gr/wai/translations/wcag20.html" target="_blank" rel="noreferrer">Web Content Accessibility Guidelines</a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Results