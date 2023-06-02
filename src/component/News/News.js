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
    const news = useSelector(state => state.managerNews.news)
    const isFetching = useSelector(state => state.managerNews.isFetching)
    const [isAutoUpdate, setIsAutoUpdate] = useState(false)
    const countNews = useSelector(state => state.managerNews.count)
    const setCountNews = setCount

    useEffect(() => {
        dispatch(fetchNews(countNews))
    }, [countNews, dispatch])

    useEffect(() => {
        if (isAutoUpdate) {
            const timer = setInterval(() => {
                dispatch(fetchNews(countNews))
            }, 60000);
            // clearing interval
            return () => clearInterval(timer);
        }
    }, [isAutoUpdate, countNews, dispatch])


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
                {news.length && !isFetching > 0 ?
                    <section>
                        <div className="stories-wrapper">{news.map(story => (
                            <div className="story" key={story.id}>
                                <h2>{story.title}</h2>
                                <ul>
                                    <li>{`Author: ${story.by}`}</li>
                                    <li id="123">
                                        <NavLink
                                            onClick={() => setIsAutoUpdate(false)}
                                            className="comments-link"
                                            to={`/story/${story.id}`}
                                        >Show more</NavLink>
                                    </li>
                                </ul>
                                <p>{`Rating: ${story.score}`}</p>
                                <p>{`Date: ${makeDateFormat(story.time)}`}</p>
                                <p>{`Comments number: ${(story.descendants)}`}</p>
                            </div>
                        ))}
                        </div>
                    </section>
                    :
                    <div className="spinner"></div>
                }
            </div>
        </Fragment>
    );
};

export default News;