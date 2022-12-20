import React, {useEffect, useState} from 'react';
import {
    fetchCommentCurrantStory,
    fetchCommentFromStory,
    showActionSheetWithOptionsAsync
} from "../../asyncAction/comments";




const Comments = ({match}) => {
    const [comments, setComments] = useState([])
    console.log(match)

    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        // const promA = fetchCommentCurrantStory(8863)
        //
        // console.log(promA)
        async function fetchData() {
            // You can await here
            const listComments = await fetchCommentFromStory([match] , setComments);
            // ...
            // setComments(listComments)
        }
        fetchData()
        // fetchData().then(result => setComments(prevState => result));
    }, [match.params.id])

    return (

        <div>
            <p>Hello word</p>
            {/*<button onClick={() => setIsLoad(!isLoad)}>changeLoad</button>*/}
            <button onClick={() => console.log(comments)}>Show comments</button>
            {console.log(comments)}
            <p>{comments}</p>
            {comments.length> 0 ? comments[0].id : null}
        </div>
    );
};

export default Comments;