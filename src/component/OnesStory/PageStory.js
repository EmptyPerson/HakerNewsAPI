import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Tree from "./Tree";
import {fetchComments} from "../../asyncAction/comments";
import Navbar from "../Navbar/Navbar";
import OnesStory from "./OnesStory";
import {addIsNotActive} from "../../store/reducerManageComments";


const PageStory = ({match, history}) => {
    const IdStory = Number(match.params.id)
    const Story = useSelector(state => state.managerNews.news.find((item) =>
        item.id === IdStory
    ))
    const [isAutoUpdate, setIsAutoUpdate] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(state => state.managerComments)

    useEffect(() => {
        dispatch(fetchComments(IdStory))
    }, [dispatch, IdStory])

    useEffect(() => {
        if (isAutoUpdate) {
            const timer = setInterval(() => {
                dispatch(fetchComments(IdStory))
                dispatch(addIsNotActive())
            }, 60000);
            return () => clearInterval(timer);
        }
    }, [isAutoUpdate, IdStory, dispatch])

    return (
        <div className="h-screen bg-white dark:bg-gray-900">
            <Navbar title="More information about ones interesting story"
                    idComment={IdStory}
                    updateFetch={fetchComments} back={history.goBack}
                    isAutoUpdate={isAutoUpdate}
                    setIsAutoUpdate={setIsAutoUpdate}>
            </Navbar>
            <section className="bg-white dark:bg-gray-900">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
                        {Story.title}
                    </h1>
                    <div className="mt-12 space-y-8">
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            <OnesStory IdStory={IdStory}/>
                            <hr className="border-gray-200 dark:border-gray-700"></hr>
                            <div className="p-4">
                                {!comments.isFetching ? <Tree comments={comments.comments}/>
                                    :
                                    <div className="relative h-12 ">
                                        <div
                                            // style={{top: "auto", left: "auto", right: "auto", position: "relative"}}
                                             className="spinner">

                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageStory