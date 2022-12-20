import React, {Fragment} from 'react';
import ButtonUpdate from "../ButtonUpdate/ButtonUpdate";


const Navbar = ({title, updateFetch, idComment, back, isAutoUpdate, setIsAutoUpdate}) => {

    return (
        <Fragment>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">

                        <p className="text-xl text-white pr-2 font-semibold">{title}</p>
                    <div className="flex mr-4">
                        <div className="flex mr-4">
                            <input onChange={()=> setIsAutoUpdate(!isAutoUpdate)
                            } type="checkbox" id="choose-me" className="peer hidden"/>
                            <label htmlFor="choose-me" className="select-none cursor-pointer rounded-lg border-2 border-brightBlue
                                    py-3 px-4 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-brightBlue peer-checked:border-gray-200 ">
                                Auto update </label>
                        </div>
                        {back? <button type="button"
                                onClick={() => {
                                    setIsAutoUpdate(false)
                                    back()}}
                                className="p-3 mr-4 font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-brightBlue dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-transparentBlue">
                            Back
                        </button>: null}
                            <ButtonUpdate idComment = {idComment} update = {updateFetch}/>
                    </div>
                        {/*<ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a className="nav-link text-white" href="#">Dashboard</a>*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a*/}
                        {/*            className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"*/}
                        {/*            href="#"*/}
                        {/*        >Team</a*/}
                        {/*        >*/}
                        {/*    </li>*/}
                        {/*    <li className="nav-item">*/}
                        {/*        <a*/}
                        {/*            className="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"*/}
                        {/*            href="#"*/}
                        {/*        >Projects</a*/}
                        {/*        >*/}
                        {/*    </li>*/}
                        {/*</ul>*/}



                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;