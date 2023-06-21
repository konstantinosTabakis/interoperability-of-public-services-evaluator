import { useContext, useEffect, useState } from "react"
import SurveyContext from "../context/SurveyContext"
import InputList from "../components/InputList"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { getAllSurveys } from "../data/db/db-services"
import PageIndication from "../components/PageIndication"
import { toast } from 'react-toastify'

function Survey() {
    const navigate = useNavigate()
    const { questions, numberOfPages, questionsPerPage, results, content, dispatch, survey } = useContext(SurveyContext)

    const [currentPage, setCurrentPage] = useState(questions.length > 0 ? 1 : 0)
    const [displayQuestions, setDisplayQuestions] = useState([])

    const [surveys, setSurveys] = useState([])
    const [selectedSurvey, setSelectedSurvey] = useState(null)

    const [identification, setIdentification] = useState({
        name: '',
        role: '',
        email: '',
        catalogue: '',
        description: '',
        sector: '',
        target: '',
        admin_level: '',
    })

    const { name, role, email, catalogue, description, sector, target, admin_level } = identification

    const handleIdentification = (e) => {
        setIdentification((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))

    }

    useEffect(() => {
        // if(currentPage>0) setDisplayQuestions(questions.filter((el) => el.id <= currentPage * questionsPerPage && el.id > (currentPage - 1) * questionsPerPage))
        if (currentPage > 0) setDisplayQuestions(questions.filter((el, index) => index + 1 <= currentPage * questionsPerPage && index + 1 > (currentPage - 1) * questionsPerPage))
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

    const handleChangeSelected = (e) => {
        setSelectedSurvey(e.target.value)
    }

    const handleSurveySelection = () => {
        const survey = surveys.filter((el) => el.id === selectedSurvey)[0]
        dispatch({
            type: 'SET_SURVEY',
            name: survey.name,
            label: survey.label,
            questions: survey.questions,
            identification: {
                ...(name !== '' && {name}),
                ...(role !== '' && {role}),
                ...(email !== '' && {email}),
                ...(catalogue !== '' && {catalogue}),
                ...(description !== '' && {description}),
                ...(sector !== '' && {sector}),
                ...(target !== '' && {target}),
                ...(admin_level !== '' && {admin_level})
            }

        })
        nextPage()
    }

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

                {currentPage === 0 ? (
                    <div className="survey__container-inner card">
                        <div className="identification mg-b-big">
                            <h3 className="heading-secondary centered mg-b-medium">Service Identification</h3>
                            {/* <label htmlFor="name">Please provide your name:</label>
                        <input type="text" id="name" className="input-basic mg-b-small w-100" />
                        <label htmlFor="email">Please provide your email address:</label>
                        <input type="text" id="email" className="input-basic mg-b-small w-100" />
                        <label htmlFor="phone">Please provide your phone number:</label>
                        <input type="text" id="phone" className="input-basic mg-b-small w-100" /> */}
                            {/* <label htmlFor="service-name">A digital public service is a digital service rendered in the public interest.
What is the name of the service that you provide to the end users (citizens, businesses or other public administrations)?</label> */}
                            <label htmlFor="name" >Please provide the name of the service:</label>
                            <input type="text" id="name" className="input-basic mg-b-small mg-t-tiny w-100" value={name} onChange={handleIdentification} />
                            <label htmlFor="role">Please provide your role in the organisation providing the service:</label>
                            <input type="text" id="role" className="input-basic mg-b-small mg-t-tiny w-100" value={role} onChange={handleIdentification} />
                            <label htmlFor="email">Please specify the email address of the provided service:</label>
                            <input type="email" id="email" className="input-basic mg-b-small mg-t-tiny w-100" value={email} onChange={handleIdentification} />
                            <label htmlFor="catalogue">Please provide the public service catalogue name and URI, if it is applicable for the digital public service.</label>
                            <textarea id="catalogue" className="input-basic mg-b-small mg-t-tiny w-100" value={catalogue} onChange={handleIdentification} />
                            <label htmlFor="description">Please give a brief description of the service.</label>
                            <textarea id="description" className="input-basic mg-b-small mg-t-tiny w-100" value={description} onChange={handleIdentification} />
                            {/* <label htmlFor="">Which tier of public administration is primarily responsible for providing the service?</label>
                        <select   className="input-basic mg-b-small w-100" >
                            <option value="">N/A</option>
                            <option value="international">International Public Administration</option>
                            <option value="central">Central Public Administration</option>
                            <option value="regional">Regional Public Administration</option>
                            <option value="local">Local Public Administration</option>
                            <option value="other">Other Legal Entity</option>
                        </select> */}

                            <label htmlFor="sector">Please indicate in which sector is the service provided. </label>
                            <select id="sector" className="input-basic mg-b-small mg-t-tiny w-100" onChange={handleIdentification} >
                                <option value="">N/A</option>
                                <option value="Education">Education</option>
                                <option value="Public Health">Public Health</option>
                                <option value="Public Safety">Public Safety</option>
                                <option value="Justice">Justice</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Social Services">Social Services</option>
                                <option value="Economy/Financial">Economy/Financial</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="target">What is the end user group to whom the service is delivered? </label>
                            <select id="target" className="input-basic mg-b-small mg-t-tiny w-100" onChange={handleIdentification} >
                                <option value="">N/A</option>
                                <option value="A2A">Public Administrations (A2A)</option>
                                <option value="A2C">Citizens (A2C)</option>
                                <option value="A2B">Businesses (A2B)</option>
                            </select>
                            <label htmlFor="admin_level">At what administrative level is the service provided ? </label>
                            <select id="admin_level" className="input-basic mg-b-small mg-t-tiny w-100" onChange={handleIdentification} >
                                <option value="">N/A</option>
                                <option value="local">Local (e.g. city, municipality)</option>
                                <option value="regional">Regional</option>
                                <option value="national">National</option>
                                <option value="european">European</option>
                                <option value="international">International</option>
                            </select>
                            {/* <label htmlFor="">Are the solutions provided by a Directorate-General of the European Commission?</label>
                        <div><input type="radio" name="EC" id="EC-yes" /> <label htmlFor="EC-yes">Yes</label></div>
                        <div><input type="radio" name="EC" id="EC-no" /> <label htmlFor="EC-no">No</label></div> */}



                            {/* <label htmlFor="">How does the service deliver the outcome towards the end user group?</label>
                        <input type="radio" name="delivery" id="" />
                        <input type="radio" name="delivery" id="" />
                        <input type="radio" name="delivery" id="" /> */}

                        </div>


                        <h3 className="heading-secondary centered mg-b-medium">Select Survey</h3>
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
                )}
            </div>
        </div>
    )
}

export default Survey