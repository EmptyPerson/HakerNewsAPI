const defaultState = {
    comments: [],
    obj: {},
    isActive: {},
    isFetching: true

}

const ADD_COMMENTS = "ADD_COMMENTS"
const ADD_COMMENTS_OBJ = "ADD_COMMENTS_OBJ"
const ISACTIVE = "ISACTIVE"
const ISFETCHING = "ISFETCHING"
const ISNOTACTIVE = "ISNOTACTIVE"

export const reducerManageComments = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMMENTS:
            return {...state, comments: action.payload, isFetching: false}
        case ADD_COMMENTS_OBJ:
            return {...state, obj: action.payload}
        case ISACTIVE:
            return {...state, isActive: {...state.isActive, [action.payload]: !state.isActive[action.payload]}}
        case ISNOTACTIVE:
            return {...state, isActive: {}}
        case ISFETCHING:
            return {...state, isFetching: action.payload}
        default:
            return state
    }

}

export const addCommentsAction = (payload) => ({type: ADD_COMMENTS, payload: payload})
export const addCommentsActionObj = (payload) => ({type: ADD_COMMENTS_OBJ, payload: payload})
export const addIsActionComment = (payload) => ({type: ISACTIVE, payload: payload})
export const addIsFetching = (payload) => ({type: ISFETCHING, payload: payload})
export const addIsNotActive = () => ({type: ISNOTACTIVE})
// export const updateLastNewsAction = (payload) => ({type: UPDATE_LAST_NEWS, payload: payload})