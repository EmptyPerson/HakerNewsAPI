

const defaultState = {
    news: [],
    isFetching: true
}

const ADD_NEWS = "ADD_NEWS"
const ADD_ONES_NEWS = "ADD_ONES_NEWS"
const IS_FETCHING = "IS_UPDATE"

export const reducerManageNews = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {...state, news: action.payload, isFetching: false}
        case ADD_ONES_NEWS:
            return {...state, news: [...state.news, action.payload]}
        case IS_FETCHING:
            return {...state, isFetching: action.payload}
        default:
            return state
    }

}

export const addNewsAction = (payload) => ({type: ADD_NEWS, payload: payload})
export const addOneNewsAction = (payload) => ({type: ADD_ONES_NEWS, payload: payload})
export const setIsFetching = (bool) => ({type: IS_FETCHING, payload: bool})