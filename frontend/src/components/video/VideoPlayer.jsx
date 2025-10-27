// components/VideoPlayer.jsx
import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const VideoPlayer = ({ src }) => {
  const videoRef = useRef()

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(videoRef.current)
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src
    }
  }, [src])

  return (
    <div className="ratio ratio-16x9 mb-4">
      <video ref={videoRef} controls className="w-100 bg-dark rounded" />
    </div>
  )
}

export default VideoPlayer
