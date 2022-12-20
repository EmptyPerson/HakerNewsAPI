import {addNewsAction, setIsFetching} from "../store/reducerManageNews";

// export const fetchStory = async (id) => {
//
//     let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
//     let news = await response.json()
//
//     if (Object.keys(news).length > 0) {
//         newsList.push(news)
//     }
//     console.log(news)
//
//     // this.todos =  [...this.todos, ...news]
//     // runInAction(() => {
//     //     this.todos.push(news)
//     // })
//
//     // console.log(news)
// }


export const fetchNews = () => {

    return async (dispatch) => {
        dispatch(setIsFetching(true))
        try {
            let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')

            if (response.status === 200) {
                let returnedNewsArray = await response.json()

                if (!Array.isArray(returnedNewsArray)) {
                    throw new TypeError("Something with API. Incorrect returned data");
                }
                // let newsArray =  await returnedNewsArray.slice(0, 100)
                // dispatch(updateLastNewsAction(returnedNewsArray))
                const newsList = []

                for (let i of returnedNewsArray) {
                    if (newsList.length === 5) break; // count for News
                    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                    let news = await response.json()

                    if (Object.keys(news).length > 0) {
                        newsList.push(news)
                    }
                    console.log(news)

                    // this.todos =  [...this.todos, ...news]
                    // runInAction(() => {
                    //     this.todos.push(news)
                    // })

                    // console.log(news)
                }
                dispatch(addNewsAction(newsList))
                 // console.log(newsArray)


            } else {
                throw new Error(
                    `Error code: ${response.status}\nError message: ${response.statusText}                  `
                )
            }
        } catch(err) {
            console.log(err.message)
        }
    }
}