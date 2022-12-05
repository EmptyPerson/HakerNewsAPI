import React, {Fragment, useEffect, useState} from 'react'
import "./TreeComments.css"
import {useDispatch, useSelector} from "react-redux";
import Tree from "./Tree";
import {fetchComments} from "../../asyncAction/comments";
import {addCommentsAction} from "../../store/reducerManageComments";
import {fetchNews} from "../../asyncAction/news";


const TreeComments = ({match}) => {
    // console.log(match)

    const [isChange, setChange] = useState(false)
    const StoryID = match.params.id
    const dispatch = useDispatch()
    const comments = useSelector(state => state.managerComments.comments)
    console.log(comments)
    useEffect(() => {
        dispatch(fetchComments(8863)) //
    }, [dispatch])


    return (

        <Fragment>
            <button onClick={() => setChange(!isChange)}>change</button>
            {/*{comments.length > 0 ? comments[0].by: "Nothing"}*/}
            <Tree comments={comments}/>
        </Fragment>

    )
}

export default TreeComments