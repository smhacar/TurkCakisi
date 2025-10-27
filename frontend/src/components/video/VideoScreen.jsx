import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

const VideoScreen = ({ video }) => {
  const videoRef = useRef()

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(video.m3u8_url)
      hls.attachMedia(videoRef.current)
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = video.m3u8_url
    }
  }, [video.m3u8_url])

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Video Player */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-700 mb-6">
          <video
            ref={videoRef}
            controls
            className="w-full h-full bg-black"
            poster="/thumbnail.jpg" // Opsiyonel
          />
        </div>

        {/* Video Info */}
        <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
        <p className="text-gray-400 text-sm mb-4">{video.description}</p>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between border-t border-b border-gray-700 py-3 mb-6">
          <span className="text-sm text-gray-400">Yayınlanma tarihi: {new Date(video.created_at).toLocaleDateString()}</span>
          <button className="text-blue-500 hover:underline">Beğen (♥)</button>
        </div>

        {/* Comment Section (placeholder) */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Yorumlar</h2>
          <textarea
            placeholder="Yorum yaz..."
            className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-sm text-white mb-4 resize-none"
            rows={3}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">Gönder</button>
        </div>
      </div>
    </div>
  )
}

export default VideoScreen
