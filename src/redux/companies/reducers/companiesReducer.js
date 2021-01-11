const INITIAL_STATE = { listCompanies: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COMPANIES_FETCHED':
            return { ...state, listCompanies: action.payload.data }
        default:
            return state
    }
}