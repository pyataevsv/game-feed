export const SET_FILTER = 'SET_FILTER'
export const SET_WORD = 'SET_WORD'
export const SET_ORDER = 'SET_ORDER'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SET_IS_NOT_FETCHING = 'SET_IS_NOT_FETCHING'
export const ADD_ITEMS = 'ADD_ITEMS'
export const RESET_ITEMS = 'RESET_ITEMS'
export const SET_FETCHING_ERROR = 'SET_FETCHING_ERROR'

const page_size = 20
const ERA = '2000-01-01,2021-12-31'
const URL = 'https://api.rawg.io/api/games?'
let page = 1


export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}
export function setWord(word) {
    return {
        type: SET_WORD,
        word
    }
}
export function setOrder(order) {
    return {
        type: SET_ORDER,
        order
    }
}
export function setIsFetching() {
    return {
        type: SET_IS_FETCHING
    }
}
export function setIsNotFetching() {
    return {
        type: SET_IS_NOT_FETCHING
    }
}
export function addItems(items) {
    return {
        type: ADD_ITEMS,
        items
    }
}
export function resetItems(items) {
    return {
        type: RESET_ITEMS,
        items
    }
}
export function setFetchingError(error) {
    return {
        type: SET_FETCHING_ERROR,
        error
    }
}



////////////////////////////////////////       ASYNC ACTIONS


export function fetchItems({ reset = true, word, order, filter }) {
    if (reset) page = 1;

    if (word === undefined) word = null
    if (order === undefined) order = null
    if (filter === undefined) filter = null

    let requestUrl = URL + 'page_size=' + page_size + '&page=' + page + '&dates=' + ERA

    if (word) requestUrl = requestUrl + '&search=' + word
    if (order) requestUrl = requestUrl + '&ordering=' + order
    if (filter) requestUrl = requestUrl + '&platforms=' + filter


    return (dispatch) => {
        console.log('URL', requestUrl)
        dispatch(setOrder(order))
        dispatch(setWord(word))
        dispatch(setFilter(filter))
        dispatch(setIsFetching())
        dispatch(setFetchingError(null))
        fetch(requestUrl)
            .then(res => {
                if (!res.ok) { console.log(res); throw res.status }
                dispatch(setIsNotFetching())
                return res.json()
            })
            .then(res => {
                page++;
                if (reset) {
                    dispatch(resetItems(res.results))
                } else {
                    dispatch(addItems(res.results))
                }
            })
            .catch(e => {
                console.log('ERROR_CATCHED: ', e)
                dispatch(setFetchingError(e))
                dispatch(setIsNotFetching())
            })


    }

}


