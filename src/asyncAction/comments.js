import {addCommentsAction, addIsFetching} from "../store/reducerManageComments";


export const fetchComments = (id) => {
    return async (dispatch) => {
        dispatch(addIsFetching(true))
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

        if (response.status === 200) {
            const story = await response.json()
            const newsListComments = await fetchCommentFromStory(story.kids)
            dispatch(addCommentsAction(newsListComments))
        } else {
            throw new Error(
                `Error code: ${response.status}\nError message: ${response.statusText}                  `
            )
        }
    }
}


export const fetchCommentFromStory = async (commentsListID) => {
    let comments = []

    if (commentsListID && commentsListID.length > 0)
        await Promise.all(commentsListID.map(async (ID) => {
                const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ID}.json`)
                const comment = await response.json()

                if (comment && "kids" in comment && comment.kids.length > 0) {
                    comment["kidsObj"] = await fetchCommentFromStory(comment.kids)
                    comment["isActive"] = false
                    comments.push(comment)
                } else {
                    comments.push(comment)

                }
            }
        ))

    return comments
}






