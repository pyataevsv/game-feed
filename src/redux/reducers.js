//const { combineReducers } = require("redux")
import * as actions from './actions'
import { combineReducers } from 'redux'


const iniState = {
    items: [],
    filter: null,
    searchWord: null,
    order: null,
    isFetching: false,
    fetchingError: { status: null, }
}

const rootReducer = combineReducers({
    filter: filterReducer,
    searchWord: searchWordReducer,
    order: orderReducer,
    isFetching: fetchingReducer,
    items: itemsReducer,
    fetchingError: fetchingErrorReducer
})

export default rootReducer

function filterReducer(state = iniState.filter, action) {
    if (action.type === actions.SET_FILTER) {
        return action.filter
    }
    return state
}
function searchWordReducer(state = iniState.searchWord, action) {
    console.log('ACTION', action)
    if (action.type === actions.SET_WORD) {
        return action.word
    }
    return state
}
function orderReducer(state = iniState.order, action) {
    if (action.type === actions.SET_ORDER) {
        return action.order
    }
    return state
}
function fetchingReducer(state = iniState.isFetching, action) {
    switch (action.type) {
        case actions.SET_IS_FETCHING:
            return true
        case actions.SET_IS_NOT_FETCHING:
            return false
        default:
            return state
    }
}
function itemsReducer(state = iniState.items, action) {

    switch (action.type) {
        case actions.ADD_ITEMS:
            return state.concat(action.items)
        case actions.RESET_ITEMS:
            return action.items

        default:
            return state
    }
}
function fetchingErrorReducer(state = iniState.fetchingError, action) {

    if (action.type === actions.SET_FETCHING_ERROR) {
        return action.error
    }
    return state
}
