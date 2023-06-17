import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
import InputList from "../components/InputList"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { getAllSurveys } from "../data/db/db-services"

function Survey() {
    const navigate = useNavigate()
    const { questions, numberOfPages, questionsPerPage, results, content, dispatch } = useContext(SurveyContext)

    const [currentPage, setCurrentPage] = useState(questions.length > 0 ? 1 : 0)
    const [displayQuestions, setDisplayQuestions] = useState([])

    const [surveys, setSurveys] = useState([])
    const [selectedSurvey,setSelectedSurvey]= useState(null)
   
    useEffect(() => {
        // if(currentPage>0) setDisplayQuestions(questions.filter((el) => el.id <= currentPage * questionsPerPage && el.id > (currentPage - 1) * questionsPerPage))
        if(currentPage>0) setDisplayQuestions(questions.filter((el,index) => index +1 <= currentPage * questionsPerPage && index +1 > (currentPage - 1) * questionsPerPage))
        // eslint-disable-next-line
    }, [currentPage])

    useEffect(() => {
        const fetchSurveys = async () => {
            const surveys = await getAllSurveys()
            setSelectedSurvey(surveys[0].id)
            setSurveys(surveys)
        }
        fetchSurveys()
        // eslint-disable-next-line
    }, [])

    const handleChangeSelected = (e) =>{
        setSelectedSurvey(e.target.value)
    }

    const handleSurveySelection = ()=>{
        const survey = surveys.filter((el)=> el.id === selectedSurvey)[0]
        dispatch({
            type: 'SET_SURVEY', 
            name: survey.name,
            label: survey.label,
            questions: survey.questions
        })
        nextPage()
    }

    const handleSubmit = () => {
        if (results.length === questions.length) {
            navigate('/results')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('answer all questions')
        }
    }

    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (currentPage === numberOfPages) {
            handleSubmit()
        } else if (results.length >= currentPage * questionsPerPage) {
            setCurrentPage(currentPage + 1)
        } else {
            alert('answer all questions')
        }
    }

    return (
        <div className="survey">
            {currentPage > 0 && (
                <>
                    <div className="arrow-circle left" onClick={previousPage}  > <button><BsChevronLeft tabIndex={0} /></button>  </div>
                    <div className="arrow-circle right" onClick={nextPage}  > <button><BsChevronRight tabIndex={0} /></button>  </div>
                </>
            )}
            <div className="survey__container">
                <h2 className="heading-primary centered mg-b-big mg-t-huge">{content.survey_title}  </h2>

                {currentPage === 0 ? (
                    <div className="survey__container-inner card">
                        <h3 className="heading-secondary centered mg-b-small">Select Survey</h3>
                        <select id="" className="input-basic mg-b-small w-100" onChange={handleChangeSelected}>
                            {surveys.map((el) => (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            ))}
                        </select>
                        <h3 className="mg-b-small">Survey descriptions:</h3>
                        <div className="descriptions">
                            {surveys.map((el) => (
                                <div key={el.id} className="mg-b-small">
                                    <h5>{el.name}</h5>
                                    <p>{el.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-primary w-100" onClick={handleSurveySelection}>Start Survey</button>
                    </div>

                ) : (

                    <div className="survey__container-inner">

                        <InputList questions={displayQuestions} currentPage={currentPage} />
                        {currentPage === numberOfPages &&
                            <div className="btn-area mg-t-medium">
                                <button className="btn btn-primary" onClick={handleSubmit}>{content.survey_cta}</button>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Survey