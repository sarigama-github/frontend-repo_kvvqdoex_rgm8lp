import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript / TypeScript', level: 'Lanjutan' },
  { name: 'React + Vite', level: 'Lanjutan' },
  { name: 'Tailwind CSS', level: 'Lanjutan' },
  { name: 'FastAPI (Python)', level: 'Menengah' },
  { name: 'MongoDB', level: 'Menengah' },
  { name: 'Git & Github', level: 'Menengah' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Keahlian</h2>
        <p className="text-slate-300 max-w-2xl">Ringkasan teknologi yang saya kuasai untuk membangun aplikasi modern dan mudah di-maintain.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-xl border border-white/10 bg-slate-900/60 p-5"
            >
              <p className="text-white font-medium">{s.name}</p>
              <p className="text-sm text-slate-300">{s.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
