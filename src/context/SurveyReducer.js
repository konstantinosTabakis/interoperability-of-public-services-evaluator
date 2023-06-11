const SurveyReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':

            return {
                ...state,
                language: action.language,
                content: action.content,
                // questions: action.questions,
                maturityLevels: action.maturityLevels
            }
        case 'ADD_RESULT':
            return {
                ...state,
                results: [...state.results, action.payload]
            }
        case 'EDIT_RESULTS':
            const updatedResult = action.payload
            const updatedResults = state.results.map((result) => {
                if (result.id === updatedResult.id) {
                    return updatedResult
                }
                return result
            });
            return {
                ...state,
                results: updatedResults,
            }

        case 'SET_SURVEY':

            return{
                ...state,
                survey: action.name,
                surveyLabel: action.label,
                questions: action.questions,
                numberOfPages: Math.ceil(action.questions.length/ parseInt(process.env.REACT_APP_QUESTIONS_PER_PAGE))
            }
        case 'RESET_SURVEY':

            return{
                ...state,
                survey: null,
                surveyLabel: null,
                questions: [],
                numberOfPages: null,
                results: []
            }

        default:
            return state
    }
}

export default SurveyReducer