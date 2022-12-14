import React from 'react';
import {useDispatch} from "react-redux";
import {addIsNotActive} from "../../store/reducerManageComments";

const ButtonUpdate = ({countNews = null, update, idComment = null}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex mr-4">
            <button onClick={() => {
                if (countNews) {
                    dispatch(update(countNews))
                }
                if (idComment) {
                    dispatch(update(idComment))
                    dispatch(addIsNotActive())
                }
            }}>
                <svg className="w-12 h-12" height="512" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs12"/>
                    <g id="g3508">
                        <rect height="512" id="rect2987"
                              style={{fill: "#3b81f5", fillOpacity: 1, fillRule: "nonzero", stroke: "none"}} width="512"
                              x="0" y="0"/>
                        <path
                            d="m 136.45307,373.778 c -8.24,0 -14.93773,-6.72447 -14.93773,-14.98671 V 236.72885 l -65.515728,-0.0311 89.017988,-97.44018 89.05347,97.47128 h -65.60454 v 89.9335 h 70.44454 L 285.0712,373.778 H 136.45307 z M 456.00039,275.3067 H 390.46253 V 153.20869 c 0,-8.26223 -6.70227,-14.98669 -14.93786,-14.98669 H 226.93772 l 46.12896,47.11564 h 70.43571 v 89.9335 l -65.56452,0.0356 89.04453,97.45352 89.01799,-97.45352 z"
                            id="Retweet" style={{fill: "#ffffff", fillOpacity: 1}}/>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default ButtonUpdate;