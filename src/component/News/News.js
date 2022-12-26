import React, {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../store/reducerManageNews";
import {fetchNews} from "../../asyncAction/news";
import "./News.css"
import {NavLink} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {makeDateFormat} from "../../utils/dateFormatter";


const News = () => {
    const dispatch = useDispatch()
    const [news, store] = useSelector(state => [state.managerNews.news, state.managerNews])
    const isFetching = useSelector(state => state.managerNews.isFetching)
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [storyID, setStoryId] = useState()
    const [comments, setComments] = useState()
    const [isAutoUpdate, setIsAutoUpdate] = useState(false)
    const commentss = useSelector(state => state.managerComments)
    // const [countNews, setCountNews] = useState(5)
    const countNews = useSelector(state => state.managerNews.count)
    const setCountNews = setCount
    // useEffect(() => {
    //     dispatch(fetchNews(countNews))
    // }, [countNews])

    useEffect(() => {

        dispatch(fetchNews(countNews))
    }, [isUpdate, countNews])
    //
    //
    //
    useEffect(() => {
        if (isAutoUpdate) {
            const timer = setInterval(() => {
                dispatch(fetchNews(countNews))
            }, 10000);
            // clearing interval
            return () => clearInterval(timer);
        }
    }, [isAutoUpdate, countNews])


    // useEffect(() => {
    //
    //
    //     dispatch(fetchNews(countNews))
    //     setIsLoading(!isLoading)
    //
    //     console.log("dispatch" + isLoading)
    //
    //
    //
    // }, [isUpdate])

    // useEffect(() => {
    //     gets()
    // }, [isComment])
    // useEffect(() => {
    //     dispatch(gets())
    // }, [storyID, dispatch])
    return (
        <Fragment>
            <Navbar title="One hundred latest hacker news"
                    updateFetch={fetchNews}
                    isAutoUpdate={isAutoUpdate}
                    setIsAutoUpdate={setIsAutoUpdate}
                    countNews={countNews}
                    setCountNews={setCountNews}
                    isFetching={isFetching}
            />
            <div className="container">
                {/*<button onClick={async () => {*/}

                {/*    const comments = await fetchCommentFromStory([2921983])*/}
                {/*    setComments(comments)*/}

                {/*}}>Comments</button>*/}
                {/*/!*<button onClick={() => addNews(prompt())}>addNews</button>*!/*/}
                {/*/!*<button onClick={() => console.log(store)}>showStore</button>*!/*/}
                {/*<button onClick={() => dispatch(fetchNews(countNews))}>showStore</button>*/}
                {/*<button onClick={ () => {*/}
                {/*    // setIsUpdate(!isUpdate)*/}
                {/*    dispatch(fetchNews(countNews))*/}
                {/*}*/}
                {/*    }>*/}
                {/*    <img className="h-5 w-5" src='upadateIcon.svg'></img>*/}
                {/*</button>*/}
                {/*<button onClick={() => console.log(commentss)}>Show comment store</button>*/}
                {/*{commentss.length > 0 ? <PageStory  props = {commentss}/>: null}*/}
                {news.length && !isFetching > 0 ?
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
                                        onClick={() => setIsAutoUpdate(false)}
                                        className="comments-link" to={`/story/${story.id}`
                                    }>Show more</NavLink></li>
                                    {/*<li><NavLink*/}
                                    {/*    // onClick= {() => gets.bind(story.id)}*/}
                                    {/*    // onClick= {() => setStoryId(story.id)}*/}
                                    {/*    //story.id*/}
                                    {/*    // onClick= {  (e) =>   {*/}
                                    {/*    //*/}
                                    {/*    //     // dispatch(dispatchComments(2921983))*/}
                                    {/*    //     dispatch(fetchItemDel(2921983))*/}
                                    {/*    //     // dispatch(fetchCommentFromSItemRedux(2921983))*/}
                                    {/*    //*/}
                                    {/*    // }}*/}
                                    {/*    // onClick= {() => setIsComment(!isComment)}*/}
                                    {/*    className="comments-link" to={`/${story.id}`}>Comment test</NavLink></li>*/}
                                    {/*<a className="comments-link" href="">Go to comments</a>*/}
                                </ul>
                                <p>{`Rating: ${story.score}`}</p>
                                <p>{`Date: ${makeDateFormat(story.time)}`}</p>
                                <p>{`Comments number: ${(story.descendants)}`}</p>
                                {/*<button onClick={() => dispatch(fetchComments(2921983))}>FetchComments</button>*/}
                                {/*<button onClick={() => dispatch(dispatchComments(2921983))}>FetchCommentsTEst</button>*/}

                                {/*<button onClick={() => fetchCommentFromSItem(2921983).then( data => console.log(data))}>FetchItem</button>*/}
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
        </Fragment>
    );
};

export default News;