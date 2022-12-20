import React, {Fragment} from 'react';

const DropDownIcon = ({isActive}) => {
    return (
        <Fragment>
            {isActive ?
                <span className="text-white bg-blue-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                     </svg>
                </span>
                :
                <span className="text-gray-400 bg-gray-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2" d="M18 12H6"/>
                </svg>
            </span>
            }
        </Fragment>
    );
};

export default DropDownIcon;