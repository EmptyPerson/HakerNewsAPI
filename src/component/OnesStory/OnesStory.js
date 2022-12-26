import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {makeDateFormat} from "../../utils/dateFormatter";

const OnesStory = ({IdStory}) => {


    const story = useSelector(state => state.managerNews.news.find((item) =>
        item.id === IdStory
    ))

    return (
        <div className="flex items-center justify-between w-full p-8">
            {IdStory && story ?
                <Fragment>
                    <div className="flex flex-wrap shrink-5">
                        <h1 className="font-semibold text-gray-700 dark:text-white">
                            {`Author: ${story.by}`}
                        </h1>
                        <p className="w-full text-gray-700 dark:text-white">
                            {`Date: ${makeDateFormat(story.time)}`}
                        </p>
                        <p className="w-full text-gray-700 dark:text-white">
                            {`Comments number: ${(story.descendants)}`}
                        </p>
                    </div>
                    <div style={{wordWrap: "break-word", wordBreak: "break-word"}} className="flex shrink-4">
                        <a className="text-gray-300 dark:text-white"
                           href={story.url} target="_blank"
                           rel="noreferrer">{`Source: ${story.url}`}
                        </a>
                    </div>
                </Fragment>
                : <h1 className="font-semibold text-gray-700 dark:text-white">
                    Incorrect ID story in URL. Please check URL.
                </h1>
            }
        </div>
    );
};

export default OnesStory;