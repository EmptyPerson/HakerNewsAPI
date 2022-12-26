import {addNewsAction, setIsFetching} from "../store/reducerManageNews";


export const fetchNews = (countNews = 5) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))

        try {
            let response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')

            if (response.status === 200) {
                let returnedNewsArray = await response.json()
                if (!Array.isArray(returnedNewsArray)) {
                    throw new TypeError("Something with API. Incorrect returned data");
                }

                const newsList = []

                for (let i of returnedNewsArray) {
                    if (newsList.length === countNews) break; // count for News
                    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                    let news = await response.json()

                    if (Object.keys(news).length > 0) {
                        newsList.push(news)
                    }
                }
                dispatch(addNewsAction(newsList))
            } else {
                throw new Error(
                    `Error code: ${response.status}\nError message: ${response.statusText}                  `
                )
            }
        } catch (err) {
            console.log(err.message)
        }
    }
}