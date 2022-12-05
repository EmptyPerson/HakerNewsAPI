import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const OnesStory = () => {

    const dispatch = useDispatch()
    const comments = useSelector(state =>  state.managerComments.comments)

    return (
        <div>
            {comments.length > 0 ?
            comments.map( (comment)=> (<h1>{comment.by + " " + comment.text}</h1>))
                : (<h1>Nothing</h1>)
            }
        </div>
    );
};

export default OnesStory;