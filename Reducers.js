import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UsersReducer from './src/redux/users/reducers/usersReducer'
import CompaniesReducer from './src/redux/companies/reducers/companiesReducer'
import StandardsReducer from './src/redux/standards/reducers/standardsReducer'
// import PermissionsReducer from './redux/permissions/reducers/permissionsReducer'

const rootReducer = combineReducers({
    dashboard: () => ({}),
    form: formReducer,
    Users: UsersReducer,
    Companies: CompaniesReducer,
    Standards: StandardsReducer,
    // Roles: PermissionsReducer,
})

export default rootReducer