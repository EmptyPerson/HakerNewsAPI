import React, {useEffect, useState} from 'react'
import "./TreeComments.css"
import {useDispatch, useSelector} from "react-redux";
import Tree from "./Tree";
import {fetchComments} from "../../asyncAction/comments";
import Navbar from "../Navbar/Navbar";
import OnesStory from "./OnesStory";
import {addIsNotActive} from "../../store/reducerManageComments";


const PageStory = ({match, history}) => {
    console.log(match)
    const IdStory = match.params.id
    const Story = useSelector(state => state.managerNews.news.find((item) =>
        item.id == IdStory
    ))
    const [isAutoUpdate, setIsAutoUpdate] = useState(false)
    const dispatch = useDispatch()
    const comments = useSelector(state => state.managerComments)
    console.log(comments)
    console.log(match.params.id)
    // NEED to use UseRef
    useEffect(() => {
        dispatch(fetchComments(IdStory)) // IdStory  2921983
    }, [dispatch])

    useEffect(() => {
        if (isAutoUpdate) {
            const timer = setInterval(() => {
                dispatch(fetchComments(IdStory))
                dispatch(addIsNotActive())
            }, 10000);
            // clearing interval
            return () => clearInterval(timer);
        }
    }, [isAutoUpdate])

    return (

        <div className="h-screen bg-white dark:bg-gray-900">
            <Navbar title="More information about ones interesting story" idComment={IdStory}
                    updateFetch={fetchComments} back={history.goBack} isAutoUpdate={isAutoUpdate}
                    setIsAutoUpdate={setIsAutoUpdate}></Navbar>
            <section className="bg-white dark:bg-gray-900">


                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">{Story.title}</h1>

                    <div className="mt-12 space-y-8">
                        <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                            {/*    <button className="flex items-center justify-between w-full p-8">*/}
                            {/*        <h1 className="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>*/}

                            {/*        <span className="text-white bg-blue-500 rounded-full">*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"*/}
                            {/*         stroke="currentColor">*/}
                            {/*        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                            {/*    </svg>*/}
                            {/*</span>*/}
                            {/*    </button>*/}
                            <OnesStory IdStory={IdStory}/>

                            <hr className="border-gray-200 dark:border-gray-700"></hr>

                            {/*<p className="p-8 text-sm text-gray-500 dark:text-gray-300">*/}
                            {/*    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,*/}
                            {/*    fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere*/}
                            {/*    dolorum veniam quia pariatur obcaecati illo ducimus?*/}
                            {/*</p>*/}
                            <div className="p-4">
                                {!comments.isFetching ? <Tree comments={comments.comments}/>
                                    : <div className="flex items-center justify-center">
                                        <div style={{top: "auto", left: "auto", right: "auto", position: "static"}}
                                             className="spinner flex"></div>
                                    </div>}
                            </div>

                        </div>

                        {/*<div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">*/}
                        {/*    <button className="flex items-center justify-between w-full p-8">*/}
                        {/*        <h1 className="font-semibold text-gray-700 dark:text-white">Is the cost of the*/}
                        {/*            appoinment covered by private health insurance?</h1>*/}

                        {/*        <span className="text-white bg-blue-500 rounded-full">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"*/}
                        {/*         stroke="currentColor">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                        {/*    </svg>*/}
                        {/*</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*<div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">*/}
                        {/*    <button className="flex items-center justify-between w-full p-8">*/}
                        {/*        <h1 className="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>*/}

                        {/*        <span className="text-white bg-blue-500 rounded-full">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"*/}
                        {/*         stroke="currentColor">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                        {/*    </svg>*/}
                        {/*</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*<div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">*/}
                        {/*    <button className="flex items-center justify-between w-full p-8">*/}
                        {/*        <h1 className="font-semibold text-gray-700 dark:text-white">What are your opening*/}
                        {/*            house?</h1>*/}

                        {/*        <span className="text-white bg-blue-500 rounded-full">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"*/}
                        {/*         stroke="currentColor">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                        {/*    </svg>*/}
                        {/*</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        {/*<div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">*/}
                        {/*    <button className="flex items-center justify-between w-full p-8">*/}
                        {/*        <h1 className="font-semibold text-gray-700 dark:text-white">What can i expect at my*/}
                        {/*            first consultation?</h1>*/}

                        {/*        <span className="text-white bg-blue-500 rounded-full">*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"*/}
                        {/*         stroke="currentColor">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                        {/*              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>*/}
                        {/*    </svg>*/}
                        {/*</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            {/*<button onClick={() => setChange(!isChange)}>change</button>*/}
            {/*{comments.length > 0 ? comments[0].by: "Nothing"}*/}
            {/*<div className="flex justify-center">*/}
            {/*<div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">*/}
            {/*<Tree__ comments={comments.comments}/>*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>

    )
}

export default PageStory