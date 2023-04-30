import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
import InputList from "../components/InputList"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Survey() {
    const navigate= useNavigate()
    const { questions, numberOfPages, questionsPerPage, results, content } = useContext(SurveyContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [displayQuestions, setDisplayQuestions] = useState([])

    useEffect(() => {
        setDisplayQuestions(questions.filter((el) => el.id <= currentPage * questionsPerPage && el.id > (currentPage - 1) * questionsPerPage))
    }, [questions, currentPage, questionsPerPage])

    const handleSubmit = () => {
        if (results.length === questions.length) {
            navigate('/results')
        } else {
            alert('answer all questions')
        }
    }

    const previousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
    const nextPage = () => {
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
            <div className="arrow-circle left" onClick={previousPage}  > <button><BsChevronLeft tabIndex={0} /></button>  </div>
            <div className="arrow-circle right" onClick={nextPage}  > <button><BsChevronRight tabIndex={0} /></button>  </div>
            <div className="survey__container">
                <h2 className="heading-primary centered mg-b-big mg-t-huge">{content.survey_title} </h2>
                <div className="survey__container-inner">
                    <InputList questions={displayQuestions} />
                    {/* {questions.map((el) => (
                        <Input key={el.id} item={el} />
                    ))} */}
                    {currentPage === numberOfPages && 
                        <div className="btn-area mg-t-medium">
                            <button className="btn btn-primary" onClick={handleSubmit}>{content.survey_cta}</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Survey