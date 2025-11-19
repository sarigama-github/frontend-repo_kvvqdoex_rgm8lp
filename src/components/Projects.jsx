import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const sampleProjects = [
  {
    title: 'Sistem Manajemen Tugas',
    description:
      'Aplikasi web untuk mengelola tugas kuliah dengan fitur kategori, deadline, dan filter status.',
    tech: ['React', 'Tailwind', 'FastAPI', 'MongoDB'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portal Artikel Teknologi',
    description:
      'Platform sederhana untuk menulis dan membaca artikel seputar pemrograman dan AI.',
    tech: ['Vite', 'React', 'Framer Motion'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Aplikasi Catatan Cepat',
    description:
      'Catatan ringan berbasis web dengan penyimpanan lokal dan interface minimalis.',
    tech: ['React', 'Tailwind'],
    repo: 'https://github.com/',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Proyek Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:border-white/20 hover:bg-slate-900/80 transition-colors"
            >
              <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-blue-200">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <a href={p.repo} target="_blank" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
                  <Github size={18} /> Kode
                </a>
                <a href={p.demo} target="_blank" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
