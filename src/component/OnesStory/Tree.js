import React, {Fragment, useState} from 'react'


const Tree = ({comments}) => {
    // console.log(comments)
    // const [isActive, setIsActive] = useState(false)

    return (

        <Fragment>
            {comments.length > 0 ?
                <Fragment>
                    <button onClick={() => console.log(comments)}> Show comment</button>
                    {/*<button onClick={() => setIsActive(!isActive)}> test</button>*/}
                    <ul className="sidebar-list">
                        <li className={`parent parent-`}>

                            <ul className="child">

                                {comments.map(item =>
                                    // {console.log(item)}

                                    (<div key={item.id} >
                                        {item.text? <li>{item.text}</li> : null}
                                        {"kidsObj" in item && item.kidsObj.length > 0 ?
                                            <Tree comments={item.kidsObj}/>
                                            : null}
                                    </div>)
                                )}
                                {/*{comments.map(item => "deleted"  in item?*/}
                                {/*    null : <li key={item.id}>{item.text}</li>)}*/}
                            </ul>
                        </li>
                    </ul>
                </Fragment> : null
            }
        </Fragment>

    )
}

export default Tree