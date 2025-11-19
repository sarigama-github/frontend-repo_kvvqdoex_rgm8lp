import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Mengirim...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })

      if (res.ok) {
        setStatus('✅ Pesan terkirim. Terima kasih!')
        e.target.reset()
      } else {
        setStatus('❌ Gagal mengirim. Coba lagi.')
      }
    } catch (err) {
      setStatus('❌ Terjadi kesalahan jaringan')
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Kontak</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="name" placeholder="Nama" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
          <input name="email" type="email" placeholder="Email" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
          <textarea name="message" rows="4" placeholder="Pesan" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400" />
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Kirim</button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
