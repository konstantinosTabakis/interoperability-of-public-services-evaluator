import { useContext, useState, useEffect } from "react";
import SurveyContext from "../context/SurveyContext"
import { useNavigate } from "react-router-dom"
import { getAllSurveys } from "../data/db/db-services"
import { useParams } from 'react-router-dom';

function SelectSurvey() {
    const navigate = useNavigate()
    const { dispatch } = useContext(SurveyContext)

    const [selectedSurveyId, setSelectedSurveyId] = useState('')
    const [surveys, setSurveys] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const fetchSurveys = async () => {
            const surveys = await getAllSurveys()
            const selected = surveys.filter((el) => el.id === id)
            if (selected.length > 0) {
                setSelectedSurveyId(selected[0].id)
            } else {
                setSelectedSurveyId(surveys[0].id)
            }
            setSurveys(surveys)
        }
        fetchSurveys()
        // eslint-disable-next-line
    }, [])

    // Form Handling 

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

    const handleChangeSelected = (e) => {
        setSelectedSurveyId(e.target.value)
    }

    const handleSurveySelection = () => {
        const survey = surveys.filter((el) => el.id === selectedSurveyId)[0]
        dispatch({
            type: 'SET_SURVEY',
            name: survey.name,
            label: survey.label,
            questions: survey.questions,
            identification: {
                ...(name !== '' && { name }),
                ...(role !== '' && { role }),
                ...(email !== '' && { email }),
                ...(catalogue !== '' && { catalogue }),
                ...(description !== '' && { description }),
                ...(sector !== '' && { sector }),
                ...(target !== '' && { target }),
                ...(admin_level !== '' && { admin_level })
            }

        })

        navigate(`/survey`)
    }


    // ************************************* 

    return (
        <div className="select-survey">
            <div className="survey__container">
                {/* <h2 className="heading-primary centered mg-b-medium mg-t-medium"> Interoperability of Public Services Evaluator </h2> */}


                <div className="survey__container-inner card  mg-t-huge">
                    <div className="identification mg-b-big">
                        <h3 className="heading-secondary centered mg-b-medium">Service Identification</h3>

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


                    </div>


                    <h3 className="heading-secondary centered mg-b-medium">Select Survey</h3>
                    <select id="" className="input-basic mg-b-small w-100" value={selectedSurveyId} onChange={handleChangeSelected}>
                        {surveys.map((el) => (
                            <option key={el.id} value={el.id}>{el.name} </option>
                        ))}
                    </select>
                    <h3 className="mg-b-small">Survey descriptions:</h3>
                    <div className="descriptions">
                        {surveys.map((el) => (
                            <div key={el.id} className="mg-b-small">
                                <h5 className={el.id === selectedSurveyId ? 'highlight' : ''}>{el.name}</h5>
                                <small>{el.label}</small>
                                <p>{el.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary w-100" onClick={handleSurveySelection}>Start Survey</button>
                </div>

            </div>
        </div>
    );
}

export default SelectSurvey;