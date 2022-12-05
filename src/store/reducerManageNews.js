

const defaultState = {
    news: [],
    // idLastNews: []
}

const ADD_NEWS = "ADD_NEWS"
const ADD_ONES_NEWS = "ADD_ONES_NEWS"
// const UPDATE_LAST_NEWS = "UPDATE_LAST_NEWS"

export const reducerManageNews = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {...state, news: action.payload}
        case ADD_ONES_NEWS:
            return {...state, news: [...state.news, action.payload]}
        // case UPDATE_LAST_NEWS:
        //     return {...state, idLastNews: action.payload}
        default:
            return state
    }

}

export const addNewsAction = (payload) => ({type: ADD_NEWS, payload: payload})
export const addOneNewsAction = (payload) => ({type: ADD_ONES_NEWS, payload: payload})
// export const updateLastNewsAction = (payload) => ({type: UPDATE_LAST_NEWS, payload: payload})