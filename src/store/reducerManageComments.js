

const defaultState = {
    comments: [],
    obj: {}
}

const ADD_COMMENTS = "ADD_COMMENTS"
const ADD_COMMENTS_OBJ = "ADD_COMMENTS_OBJ"

export const reducerManageComments = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return {...state, comments: action.payload}
        case ADD_COMMENTS_OBJ:
            return {...state, obj: action.payload}
        default:
            return state
    }

}

export const addCommentsAction = (payload) => ({type: ADD_COMMENTS, payload: payload})
export const addCommentsActionObj = (payload) => ({type: ADD_COMMENTS_OBJ, payload: payload})
// export const updateLastNewsAction = (payload) => ({type: UPDATE_LAST_NEWS, payload: payload})