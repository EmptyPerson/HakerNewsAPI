import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchItemDel} from "../../asyncAction/comments";

const Test = ({match}) => {
    const comment = useSelector(state => state.managerComments)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItemDel(match.params.id))
    },[])
    return (
        <div>
            {console.log(comment)}
            {console.log(match.params.id)}
            {comment.obj.by}
        </div>
    );
};

export default Test;