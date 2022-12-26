import React, {Fragment} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addIsActionComment} from "../../store/reducerManageComments";
import DropDownIcon from "./DropDownIcon";


const Tree = ({comments}) => {
    const isActive = useSelector(state => state.managerComments.isActive)
    // const [showNested, setShowNested] = useState({})
    // const toggleNested = (name) => {
    //     setShowNested({...showNested, [name]: !showNested[name]})
    // }
    const dispatch = useDispatch()

    return (

        <Fragment>
            {comments && comments.length > 0 ?
                <Fragment>
                    <ul className="py-2 w-full rounded-t-lg">
                        {comments.map((item) => {
                            const flag = "kidsObj" in item && item.kidsObj.length > 0

                            return (
                                <div className="flex w-full" key={item.id}>
                                    {flag ?
                                        <Fragment key={Date.now()}>
                                            <button
                                                onClick={() =>
                                                    dispatch(addIsActionComment(item.id))
                                                }
                                                className="flex p-4"
                                            >
                                                <DropDownIcon isActive={!isActive[item.id]}/>
                                            </button>
                                        </Fragment> : null
                                    }
                                    {item.text ? <li className="dark:text-white mt-4" key={item.id}>
                                        <div style={{wordWrap: "break-word", wordBreak: "break-word"}}
                                             className="flex w-ful items-start  text-justify">{!flag ?
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 my-1 mx-4"
                                                     viewBox="24 24 512 512">
                                                    <path fill="#ffffff"
                                                          d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"/>
                                                </svg>
                                            </div>
                                            : null
                                        } {item.by + ":  " + item.text}
                                        </div>
                                        {flag && isActive[item.id] ?
                                            <Fragment>
                                                <div><Tree comments={item.kidsObj}/></div>
                                            </Fragment>
                                            : null}
                                    </li> : null}
                                </div>
                            )
                        })}
                    </ul>
                </Fragment>
                : <h1 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">Not comments yet</h1>
            }
        </Fragment>

    )
}

export default Tree