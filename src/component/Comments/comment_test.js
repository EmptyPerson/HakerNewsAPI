import React, {useEffect, useState} from 'react';
import {
    fetchCommentCurrantStory,
    fetchCommentFromStory, fetchCommentFromStoryTest,
    showActionSheetWithOptionsAsync
} from "../../asyncAction/comments";

const useAllData = () => {

    const [comment, setComments] = useState([]);


    useEffect(() => {
        const dataFetch = async () => {
            // waiting for allthethings in parallel
            const result = (
                await Promise.all([
                    fetchCommentFromStoryTest([33581599])
                ])
            ).map((r) => r);

            // and waiting a bit more - fetch API is cumbersome
            const [commentsResult] = await Promise.all(
                result
            );

            // when the data is ready, save it to state

            setComments(commentsResult);
        };

        dataFetch();
    }, []);

    return { comment }
};




const Comments = ({match}) => {

    const { comment} = useAllData()
    // show loading state while waiting for all the data
    if (comment.length == 0 ) return 'loading';

    // const [comments, setComments] = useState([])
    console.log(match.params.id)

    // const [isLoad, setIsLoad] = useState(false)

    // useEffect(() => {
    //     // const promA = fetchCommentCurrantStory(8863)
    //     //
    //     // console.log(promA)
    //     async function fetchData() {
    //         // You can await here
    //         const listComments = await fetchCommentFromStory([33581599]);
    //         // ...
    //         return listComments
    //     }
    //     fetchData().then(result => setComments(result));
    // }, [])

    return (

        <div>
            <p>Hello word</p>
            <button onClick={() => console.log(comment)}> show</button>
            <div>{comment}</div>
            {/*<button onClick={() => setIsLoad(!isLoad)}>changeLoad</button>*/}
            {/*<button onClick={() => console.log(comment)}>Show comments</button>*/}
            {console.log(comment)}
            {/*<p>{comment}</p>*/}
            {/*{comments.length> 0 ? comments[0].id : null}*/}
        </div>
    );
};

export default Comments;