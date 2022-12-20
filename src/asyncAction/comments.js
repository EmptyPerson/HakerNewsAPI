import {addCommentsAction, addCommentsActionObj, addIsFetching} from "../store/reducerManageComments";



export const fetchComments = (id) => {
    return async (dispatch) => {
        dispatch(addIsFetching(true))
        // try {
        //  we have to get fresh comments because one of chance for get not all comments if we take old array of comments from news
        // need fresh array of comments
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

        if (response.status === 200) {
            const story = await response.json()
            const newsListComments = await fetchCommentFromStory(story.kids)
            console.log(newsListComments)
             dispatch(addCommentsAction(newsListComments))

        } else {
            throw new Error(
                `Error code: ${response.status}\nError message: ${response.statusText}                  `
            )
        }
        // } catch (err) {
        //     console.log(err.message)
        // }

        // this.todos =  [...this.todos, ...news]
        // runInAction(() => {
        //     this.todos.push(news)
        // })

        // console.log(news)
    }
}
export function showActionSheetWithOptionsAsync(ArrayIDs) {
    return new Promise(resolve => {
        // resolve is a function, it can be supplied as callback parameter
        fetchCommentFromStory(ArrayIDs, resolve);
    });
}

export const fetchCommentFromStory = async (commentsListID) => {
    let comments = []

    if (commentsListID && commentsListID.length > 0)
     await Promise.all(commentsListID.map(async (ID) => {

        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ID}.json`)
        const comment = await response.json()
        // console.log(ID)
        if (comment && "kids" in comment && comment.kids.length > 0) {
            comment["kidsObj"]= await fetchCommentFromStory(comment.kids)
            comment["isActive"] = false
            comments.push(comment)
        } else {
            comments.push(comment)

        }
    }
    ))


    // console.log(comments)
    // setC(comments)
     return comments
}



export const fetchCommentCurrantStory = async (id, setComments) => {

    // try {
    //  we have to get fresh comments because one of chance for get not all comments if we take old array of comments from news
    // need fresh array of comments
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

    if (response.status === 200) {
        const story = await response.json()
        // story.kids = undefined;
         const newsListComments = await fetchCommentFromStory([33581599])
        // console.log(newsListComments)
        // setComments(newsListComments)
        return newsListComments




    } else {
        throw new Error(
            `Error code: ${response.status}\nError message: ${response.statusText}                  `
        )
    }
    // } catch (err) {
    //     console.log(err.message)
    // }

    // this.todos =  [...this.todos, ...news]
    // runInAction(() => {
    //     this.todos.push(news)
    // })

    // console.log(news)

}


export const fetchItem = async (id) => {

        // try {
        //  we have to get fresh comments because one of chance for get not all comments if we take old array of comments from news
        // need fresh array of comments
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

        if (response.status === 200) {
            const item = await response.json()
            return item


        } else {
            throw new Error(
                `Error code: ${response.status}\nError message: ${response.statusText}                  `
            )
        }


}




export const fetchCommentFromSItem = async (id) => {


        let comments = []
        const  comment = await fetchItem(id)
    console.log(comment)
        if (comment && "kids" in comment && comment.kids.length > 0) {
            comment.kids.map(async (item) => {
                console.log(item)
                comment["kidsObj"]= await fetchCommentFromSItem(item)
                comment["isActive"] = false
                comments.push(comment)
            })

        } else {
            comments.push(comment)
            // return comments
        }

    return comments
}




export const fetchCommentFromSItem_ = async (id) => {


    // let comments = []
    const  comment = await fetchItem(id)

    // console.log(comment)
    if (comment && "kids" in comment && comment.kids.length > 0) {
        comment["kidsObj"] = []
        comment["kidsObj"] =  await Promise.all(comment.kids.map((item) => {
            // console.log(item)
            fetchCommentFromSItem_(item)
           // comment["kidsObj"].push(fetchCommentFromSItem_(item))
            // comments.push(comment)
        }))

    }

    return comment
}

export const dispatchComments = (id) => {
   return async(dispatch) => {
       const comment = await fetchCommentFromSItem_(id)
       dispatch(addCommentsActionObj(comment))
   }

}

// export const fetchCommentFromSItemRedux = async (id) => {
//
//     return async (dispatch) => {
//         // let comments = []
//         const comment = await fetchItem(id)
//
//         // console.log(comment)
//         if (comment && "kids" in comment && comment.kids.length > 0) {
//             comment["kidsObj"] = []
//             comment.kids.map(async (item) => {
//                 // console.log(item)
//
//                 comment["kidsObj"].push(await fetchCommentFromSItem_(item))
//                 // comments.push(comment)
//             })
//
//         }
//
//         dispatch(addCommentsAction(comment))
//
//     }
// }

//
// async function fetchPages({ id }) {
//     let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
//     let req = await fetch(url);
//     let json = await req.json();
//     return json;
// }
//
// export async function recursiveSequentialFetch({ page, data, maxCalls }) {
//     let json = await fetchPages({ page });
//
//     data.push(json);
//
//     console.log("Sequential Fetch", page, data);
//
//     if (page < maxCalls && json && "kids" in json && json.kids.length > 0) {
//         return recursiveSequentialFetch({ page: page + 1, data, maxCalls});
//     } else {
//         return { page, data, maxCalls };
//     }
// }




export const fetchItemDel =  (id) => {
    return async (dispatch) =>
    {
        // try {
        //  we have to get fresh comments because one of chance for get not all comments if we take old array of comments from news
        // need fresh array of comments
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

        if (response.status === 200) {
            const item = await response.json()
            dispatch(addCommentsActionObj(item))


        } else {
            throw new Error(
                `Error code: ${response.status}\nError message: ${response.statusText}                  `
            )
        }
    }


}


