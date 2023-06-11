import { createContext, useReducer } from "react"
import SurveyReducer from "./SurveyReducer"
import translations from "../translations/translations"

const SurveyContext= createContext()

export const SurveyProvider = ({ children }) => {


    const initialState = {
        language: 'en',
        content: translations.en.content,
        maturityLevels: translations.en.maturityLevels,
        survey: null,
        surveyLabel: null,
        questions: [],
        // numberOfPages:Math.ceil(translations.en.questions.length/questionsPerPage),
        numberOfPages: null,
        questionsPerPage: parseInt(process.env.REACT_APP_QUESTIONS_PER_PAGE),
        results: []
    }

    const [state, dispatch] = useReducer(SurveyReducer, initialState)

    return <SurveyContext.Provider value={{ ...state, dispatch }}>
        {children}
    </SurveyContext.Provider>

}

export default SurveyContext