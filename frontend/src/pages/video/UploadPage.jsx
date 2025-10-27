// pages/UploadPage.jsx
import { useState } from 'react'
import { uploadVideo } from '../../api'

const UploadPage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('video_file', file)

    try {
      await uploadVideo(formData)
      setMessage('✔️ Video yüklendi ve dönüştürülüyor.')
    } catch {
      setMessage('❌ Yükleme sırasında hata oluştu.')
    }
  }

  return (
    <div className="container mt-5">
      <h2>🎞️ Video Yükleme Paneli</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Başlık</label>
          <input type="text" className="form-control" required value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Açıklama</label>
          <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Video Dosyası</label>
          <input type="file" className="form-control" required accept="video/*" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">Yükle</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  )
}

export default UploadPage
