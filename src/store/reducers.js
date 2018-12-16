// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import {reducer as search} from 'components/common/search'
import {reducer as home} from 'pages/home'
import {reducer as location} from 'components/common/location'

export default combineReducers({
    search,
    home,
    location
})