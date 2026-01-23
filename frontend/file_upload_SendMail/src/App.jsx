import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  // const [email, setEmail] = useState({ to: '', subject: '', text: '' })

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null)
      return
    }
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  async function handleUpload(e) {
    e.preventDefault()
    if (!file) return
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await axios.post('http://localhost:5002/file-upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log('upload response', res.data)
      alert('Upload successful')
    } catch (err) {
      console.error(err)
      alert('Upload failed')
    }
  }

  return (
    <div className="app-root">
      <main className="card">
        <h1 className="title">File Upload and Send Mail</h1>

        <form className="upload" onSubmit={handleUpload} aria-label="Upload form">
          <label className="file-field">
            <span className="visually-hidden">Choose file</span>
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files && e.target.files[0] || null)} />
          </label>
          <button className="btn" onClick={handleUpload}>Upload File</button>
        </form>

        <section className="preview">
          {previewUrl ? (
            <figure>
              <img src={previewUrl} alt="Preview" />
              <figcaption>{file.name}</figcaption>
            </figure>
          ) : (
            <p className="muted">No image uploaded yet.</p>
          )}
        </section>

        {/* <form className="email" onSubmit={handleSend} aria-label="Send email form">
          <h2 className="subtitle">Send Email</h2>
          <div className="row">
            <input
              type="email"
              placeholder="To"
              value={email.to}
              onChange={(e) => setEmail({ ...email, to: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={email.subject}
              onChange={(e) => setEmail({ ...email, subject: e.target.value })}
            />
            <button className="btn" type="submit">Send Email</button>
          </div>
          <textarea
            placeholder="Message"
            value={email.text}
            onChange={(e) => setEmail({ ...email, text: e.target.value })}
            rows={4}
          />
        </form> */}
        
      </main>
    </div>
  )
}

export default App
