import React, {Fragment} from 'react';
import ButtonUpdate from "../ButtonUpdate/ButtonUpdate";
import {useDispatch} from "react-redux";
import {addIsNotActive} from "../../store/reducerManageComments";


const Navbar = ({
                    title,
                    updateFetch,
                    idComment = null,
                    back,
                    isAutoUpdate,
                    setIsAutoUpdate,
                    countNews,
                    setCountNews,
                    isFetching
                }) => {
    const dispatch = useDispatch()

    return (
        <Fragment>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">

                    <p className="text-xl text-white pr-2 font-semibold lg:mb-4">{title}</p>
                    {!idComment ?
                        <div className="flex flex-wrap mr-4">
                            <label htmlFor="customRange2" className="form-label">Number of post: {countNews} </label>
                            <input
                                disabled={isFetching}
                                type="range"
                                className="
                                      w-full
                                      h-6
                                      p-0
                                      bg-transparent
                                      focus:outline-none focus:ring-0 focus:shadow-none
                                      sm:mb-4
                                         "
                                min="1"
                                max="150"
                                id="customRange2"
                                list="tickmarks"
                                value={countNews}
                                onChange={(e) =>
                                    dispatch(setCountNews(Number(e.target.value)))
                                }
                            />
                        </div> : null}
                    <div className="flex">
                        <div className="flex mr-4">
                            <input onChange={() => setIsAutoUpdate(!isAutoUpdate)}
                                   type="checkbox"
                                   id="choose-me"
                                   className="peer hidden"/>
                            <label htmlFor="choose-me"
                                   className="select-none cursor-pointer rounded-lg border-2 border-brightBlue
                                    py-2 px-2 font-bold text-gray-200 transition-colors duration-200 ease-in-out
                                    peer-checked:bg-brightBlue peer-checked:border-gray-200 dark:hover:text-white
                                    hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-transparentBlue ">
                                Auto update </label>
                        </div>
                        <ButtonUpdate countNews={countNews} idComment={idComment} update={updateFetch}/>
                        {back ? <button type="button"
                                        onClick={() => {
                                            setIsAutoUpdate(false)
                                            dispatch(addIsNotActive())
                                            back()
                                        }}
                                        className="p-3 mr-4 font-medium text-white
                                        focus:outline-none bg-white rounded-full
                                        border border-gray-200 hover:bg-gray-100 hover:text-blue-700
                                        focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
                                        dark:bg-brightBlue dark:text-white dark:border-gray-600
                                        dark:hover:text-white dark:hover:bg-transparentBlue">
                            Back
                        </button> : null}
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;