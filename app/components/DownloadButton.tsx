'use client'

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Jason_Xu.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button className="download-btn" onClick={handleDownload}>
      [.pdf]
    </button>
  )
}
