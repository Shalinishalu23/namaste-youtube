import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utility/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [seachParam] = useSearchParams()
    console.log('param', seachParam.get("v"))
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='flex flex-col'>
            <div className='px-5'>
                <iframe
                    width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + seachParam.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe></div>
                <CommentContainer />
        </div>
    )
}

export default WatchPage