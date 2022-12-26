const defaultState = {
    news: [],
    isFetching: true,
    count: 5
}

const ADD_NEWS = "ADD_NEWS"
const ADD_ONES_NEWS = "ADD_ONES_NEWS"
const IS_FETCHING = "IS_FETCHING"
const CHANGE_COUNT = "CHANGE_COUNT"

export const reducerManageNews = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {...state, news: action.payload, isFetching: false}
        case ADD_ONES_NEWS:
            return {...state, news: [...state.news, action.payload]}
        case IS_FETCHING:
            return {...state, isFetching: action.payload}
        case CHANGE_COUNT:
            return {...state, count: action.payload}
        default:
            return state
    }

}

export const addNewsAction = (payload) => ({type: ADD_NEWS, payload: payload})
export const addOneNewsAction = (payload) => ({type: ADD_ONES_NEWS, payload: payload})
export const setIsFetching = (bool) => ({type: IS_FETCHING, payload: bool})
export const setCount = (payload) => ({type: CHANGE_COUNT, payload: payload})