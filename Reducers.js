import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import UsersReducer from './src/redux/users/reducers/usersReducer'
// import StandardsReducer from './redux/standards/reducers/standardsReducer'
// import PermissionsReducer from './redux/permissions/reducers/permissionsReducer'

const rootReducer = combineReducers({
    dashboard: () => ({}),
    form: formReducer,
    Users: UsersReducer,
    // Standards: StandardsReducer,
    // Roles: PermissionsReducer,
})

export default rootReducer