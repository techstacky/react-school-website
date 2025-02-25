import React from 'react'
import './VideoPlayer.css'
import student_video from '../../assets/student_video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`video-player ${playState ? '':'hide'}`} >
        <video src={student_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
