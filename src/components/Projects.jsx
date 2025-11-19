import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown } from 'lucide-react'

const projects = [
  {
    title: 'Sistem Manajemen Tugas',
    description:
      'Aplikasi web untuk mengelola tugas kuliah dengan fitur kategori, deadline, dan filter status.',
    tech: ['React', 'Tailwind', 'FastAPI', 'MongoDB'],
    repo: 'https://github.com/',
    demo: '#',
    details: {
      peran: 'Full‑stack (Frontend & Backend)',
      periode: '2024',
      tantangan:
        'Menyediakan antarmuka yang ringan namun powerful untuk manajemen tugas multi-mata kuliah dengan sinkronisasi lintas perangkat.',
      solusi:
        'Membangun arsitektur komponen yang modular, API terstruktur, dan desain responsif yang nyaman di mobile/desktop.',
      fitur: [
        'Kategori & label kustom',
        'Filter status & pencarian cepat',
        'Deadline dengan highlight warna',
        'Penyimpanan terintegrasi backend',
      ],
      hasil: 'Waktu input tugas berkurang ~40% dan lebih mudah memprioritaskan pekerjaan mingguan.',
    },
  },
  {
    title: 'Portal Artikel Teknologi',
    description:
      'Platform sederhana untuk menulis dan membaca artikel seputar pemrograman dan AI.',
    tech: ['Vite', 'React', 'Framer Motion'],
    repo: 'https://github.com/',
    demo: '#',
    details: {
      peran: 'Frontend',
      periode: '2024',
      tantangan:
        'Membuat pengalaman membaca yang nyaman dengan performa tinggi dan animasi halus.',
      solusi:
        'Optimasi rendering komponen, code-splitting, dan animasi mikro untuk transisi.',
      fitur: ['Editor markdown ringan', 'Dark mode', 'Tag & arsip', 'Animasi kartu'],
      hasil: 'Bounce rate turun dan waktu baca per sesi meningkat.',
    },
  },
  {
    title: 'Aplikasi Catatan Cepat',
    description:
      'Catatan ringan berbasis web dengan penyimpanan lokal dan interface minimalis.',
    tech: ['React', 'Tailwind'],
    repo: 'https://github.com/',
    demo: '#',
    details: {
      peran: 'Frontend',
      periode: '2023',
      tantangan: 'Membuat UI super cepat dan intuitif tanpa distraksi.',
      solusi: 'Desain minimal, keyboard shortcut, dan arsitektur state sederhana.',
      fitur: ['Pencarian instan', 'Folder & pin', 'Impor/Ekspor'],
      hasil: 'Meningkatkan kecepatan pencatatan ide selagi belajar/kuliah.',
    },
  },
]

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Proyek Unggulan</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const isOpen = openIndex === i
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group rounded-xl border border-white/10 bg-slate-900/60 hover:border-white/20 hover:bg-slate-900/80 transition-colors overflow-hidden"
              >
                {/* Media */}
                <div className="aspect-video w-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-b border-white/10" />

                {/* Body */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.description}</p>

                  {/* Tech chips */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-white/10 text-blue-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
                    >
                      <Github size={18} /> Kode
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-slate-200 hover:text-white"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                    <button
                      onClick={() => toggle(i)}
                      className="ml-auto inline-flex items-center gap-2 text-slate-200 hover:text-white text-sm"
                      aria-expanded={isOpen}
                      aria-controls={`details-${i}`}
                    >
                      Lihat detail
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                  </div>

                  {/* Details expandable */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`details-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 rounded-lg border border-white/10 bg-slate-800/50 p-4">
                          <div className="grid gap-3 text-sm text-slate-200">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                              <span className="text-slate-400 w-28 shrink-0">Peran</span>
                              <span className="font-medium">{p.details.peran}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                              <span className="text-slate-400 w-28 shrink-0">Periode</span>
                              <span className="font-medium">{p.details.periode}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-slate-400">Tantangan</span>
                              <p className="mt-1 text-slate-300">{p.details.tantangan}</p>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-slate-400">Solusi</span>
                              <p className="mt-1 text-slate-300">{p.details.solusi}</p>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-slate-400">Fitur kunci</span>
                              <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {p.details.fitur.map((f) => (
                                  <li key={f} className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <span className="text-slate-300">{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-slate-400">Dampak/Hasil</span>
                              <p className="mt-1 text-slate-300">{p.details.hasil}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
