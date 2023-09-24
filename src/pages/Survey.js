import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
import InputList from "../components/InputList"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import PageIndication from "../components/PageIndication"
import { toast } from 'react-toastify'

function Survey() {
    const navigate = useNavigate()
    const { questions, numberOfPages, questionsPerPage, results, content, survey } = useContext(SurveyContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [displayQuestions, setDisplayQuestions] = useState([])

    useEffect(() => {
        if(!survey){
            navigate('/select')
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (currentPage > 0) setDisplayQuestions(questions.filter((el, index) => index + 1 <= currentPage * questionsPerPage && index + 1 > (currentPage - 1) * questionsPerPage))
        // eslint-disable-next-line
    }, [currentPage])



    const handleSubmit = () => {
        if (results.length === questions.length) {
            navigate('/results')
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            toast.error('Please answer all questions', {
                position: toast.POSITION.TOP_CENTER
            })
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
            toast.error('Please answer all questions', {
                position: toast.POSITION.TOP_CENTER
            })
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
                <h2 className="heading-primary centered mg-b-medium mg-t-medium"> {survey !== null ? (
                    survey
                ) : (
                    content.survey_title
                )}  </h2>

                    <div className="survey__container-inner">
                        <div className="mg-b-small">
                            <PageIndication currentPage={currentPage} numberOfPages={numberOfPages}/>
                        </div>

                        <InputList questions={displayQuestions} currentPage={currentPage} />
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