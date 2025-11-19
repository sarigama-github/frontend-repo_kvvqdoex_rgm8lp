import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.25),rgba(2,6,23,0))]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Halo, saya Mahasiswa Informatika
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Siap Berkontribusi di Dunia Teknologi
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-slate-300 leading-relaxed"
          >
            Saya membangun aplikasi web yang bersih, cepat, dan mudah digunakan.
            Portofolio ini menampilkan proyek-proyek terbaik saya, lengkap dengan deskripsi singkat dan teknologi yang digunakan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">Lihat Proyek</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/20 text-slate-200 hover:border-white/40 transition-colors">Hubungi Saya</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 p-4">
            <div className="w-full h-full rounded-xl bg-slate-900/60 grid place-items-center">
              <div className="text-center p-6">
                <p className="text-sm text-blue-200/80 mb-2">Fokus Utama</p>
                <h3 className="text-2xl font-bold text-white">Frontend • Backend • UI/UX</h3>
                <p className="mt-3 text-slate-300 text-sm">React, Tailwind, FastAPI, MongoDB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
