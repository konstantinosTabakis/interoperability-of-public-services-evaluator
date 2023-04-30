import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
// import Input from "../components/Input"
import InputList from "../components/InputList"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

function Survey() {
    const { questions, numberOfPages, questionsPerPage, results } = useContext(SurveyContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [displayQuestions, setDisplayQuestions] = useState([])

    useEffect(() => {
        setDisplayQuestions(questions.filter((el) => el.id <= currentPage * questionsPerPage && el.id > (currentPage - 1) * questionsPerPage))
    }, [questions, currentPage])

    const handleSubmit = () => {
        if (results.length === questions.length) {
            alert('Submit')
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
                <h2 className="heading-primary centered mg-b-big mg-t-huge">Interoperability of Public Services Evaluator</h2>
                <div className="survey__container-inner">
                    <InputList questions={displayQuestions} />
                    {/* {questions.map((el) => (
                        <Input key={el.id} item={el} />
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default Survey