const SurveyReducer = (state, action) => {
    switch (action.type) {
        // case 'SET_THEME':

        //     return{
        //         ...state,
        //         theme: action.payload,
        //     }
        case 'SET_LANGUAGE':

            return {
                ...state,
                language: action.language,
                content: action.content,
                questions: action.questions
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

        // case 'SET_QUESTIONS':

        //     return{
        //         ...state,
        //         questions: action.payload,
        //     }

        default:
            return state
    }
}

export default SurveyReducer