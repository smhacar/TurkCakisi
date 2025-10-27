// pages/WatchPage.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchVideo } from '../../api'
import VideoPlayer from '../../components/video/VideoPlayer'

const WatchPage = () => {
  const { id } = useParams()
  const [video, setVideo] = useState(null)

  useEffect(() => {
    fetchVideo(id).then(res => setVideo(res.data))
  }, [id])

  if (!video) return <div className="text-center mt-5">Yükleniyor...</div>

  return (
    <div className="container mt-5">
      {video.m3u8_url}
      <VideoPlayer src={`http://localhost:8000${video.m3u8_url}`} />
      <h3>{video.title}</h3>
      <p className="text-muted">{video.description}</p>
    </div>
  )
}

export default WatchPage
