import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addOneNewsAction} from "../../store/reducerManageNews";
import {fetchNews} from "../../asyncAction/news";
import "./News.css"
import {Link, NavLink} from "react-router-dom";
import {addCommentsAction} from "../../store/reducerManageComments";
import {
    dispatchComments,
    fetchCommentFromSItem,
    fetchCommentFromSItem_, fetchCommentFromSItemRedux,
    fetchCommentFromStory,
    fetchComments, fetchItemDel, recursiveSequentialFetch
} from "../../asyncAction/comments";
import TreeComments from "../OnesStory/TreeComments";


const News = () => {
    const dispatch = useDispatch()
    const [news, store] = useSelector(state => [state.managerNews.news , state.managerNews])
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [storyID, setStoryId] = useState()
    const [comments, setComments] = useState()
    const commentss = useSelector(state => state.managerComments)

    const addNews = (name) => {
        const onesNews = {
            id: Date.now(),
            by: name
        }
        dispatch(addOneNewsAction(onesNews))
    }

    const makeDateFormat = (unixDate) => {
        const date = new Date(unixDate * 1000)

        // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        const formattedTime = `${day}/${month}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

        return formattedTime

        // return date.getDate()+
        //     "/"+(date.getMonth()+1)+
        //     "/"+date.getFullYear()+
        //     " "+date.getHours()+
        //     ":"+date.getMinutes()+
        //     ":"+date.getSeconds()
    }

    function getComments()  {
         console.log(this.by)
        dispatch(addCommentsAction)
    }

    function gets()  {

         return fetchComments.bind(storyID)
    }

    useEffect(() => {

            setIsLoading(true)
            dispatch(fetchNews())
            setIsLoading(false)

            console.log("dispatch")



    }, [])

    // useEffect(() => {
    //     gets()
    // }, [isComment])
    // useEffect(() => {
    //     dispatch(gets())
    // }, [storyID, dispatch])
    return (

        <div className="container">
            <button onClick={async () => {

                const comments = await fetchCommentFromStory([2921983])
                setComments(comments)

            }}>Comments</button>
            {/*<button onClick={() => addNews(prompt())}>addNews</button>*/}
            {/*<button onClick={() => console.log(store)}>showStore</button>*/}
            <button onClick={() => dispatch(fetchNews())}>showStore</button>
            <button onClick={() => setIsUpdate(!isUpdate)}>Update</button>r
            <button onClick={() => console.log(commentss)}>Show comment store</button>
            {/*{commentss.length > 0 ? <TreeComments  props = {commentss}/>: null}*/}
            {news.length && !isLoading > 0 ?
                <section>
                    {/*<a href="https://roadhomezn.web.app" className="project-link" target="_blank" rel="noreferrer">*/}
                    <div className="stories-wrapper">{news.map(story => (

                        <div className="story" key={story.id}>
                            <h2>{story.title}</h2>
                            <ul>
                                <li>{`Author: ${story.by}`}</li>
                                <li><NavLink
                                    // onClick= {() => gets.bind(story.id)}
                                    // onClick= {() => setStoryId(story.id)}
                                    //story.id
                                    // onClick= {  (e) =>   {
                                    //
                                    //      dispatch(fetchComments(2921983))
                                    //     // dispatch(fetchCommentFromSItemRedux(2921983))
                                    //
                                    // }}
                                    // onClick= {() => setIsComment(!isComment)}
                                          className="comments-link" to={`/story/${story.id}`}>Show more</NavLink></li>
                                <li><NavLink
                                    // onClick= {() => gets.bind(story.id)}
                                    // onClick= {() => setStoryId(story.id)}
                                    //story.id
                                    // onClick= {  (e) =>   {
                                    //
                                    //     // dispatch(dispatchComments(2921983))
                                    //     dispatch(fetchItemDel(2921983))
                                    //     // dispatch(fetchCommentFromSItemRedux(2921983))
                                    //
                                    // }}
                                    // onClick= {() => setIsComment(!isComment)}
                                    className="comments-link" to={`/${story.id}`}>Comment test</NavLink></li>
                                {/*<a className="comments-link" href="">Go to comments</a>*/}
                            </ul>
                            <p>{`Rating: ${story.score}`}</p>
                            <p>{`Date: ${makeDateFormat(story.time)}`}</p>
                            <button onClick={() => dispatch(fetchComments(2921983))}>FetchComments</button>
                            <button onClick={() => dispatch(dispatchComments(2921983))}>FetchCommentsTEst</button>
                         
                            <button onClick={() => fetchCommentFromSItem(2921983).then( data => console.log(data))}>FetchItem</button>
                            {/*<button onClick={async () => {const comment = await fetchCommentFromSItem_(2921983)*/}
                            {/*console.log(comment)*/}
                            {/*}}>FetchItem</button>*/}
                        </div>

                        //     <div className="stories">
                        //     <div className="story_logo">
                        //         <h2 className='story_name'>{story.title}</h2>
                        //     </div>
                        //     <div className="story_content">
                        //         <div className="story_cat">category: website</div>
                        //         <div className="story_title">
                        //             HOTEL
                        //             <div className="story_data">2022</div>
                        //         </div>
                        //     </div>
                        //
                        // </div>
                    ))}
                    </div>
                    {/*{news.map(story => (<div  key={story.id} >{story.by}</div>))}*/}
                    {/*</a>*/}
                </section>

                :
                <div className="spinner"></div>
            }

        </div>
    );
};

export default News;