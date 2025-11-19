import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tentang Saya</h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-300 leading-relaxed"
        >
          Saya adalah mahasiswa Informatika yang antusias membangun produk digital. Saya menyukai proses merancang antarmuka yang rapi sekaligus membangun backend yang efisien. Fokus saya pada pengalaman pengguna, performa, dan code quality.
        </motion.p>
      </div>
    </section>
  )
}
