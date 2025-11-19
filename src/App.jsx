import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Portofolio Mahasiswa Informatika</p>
            <div className="flex items-center gap-4">
              <a href="/test" className="hover:text-white">Cek Koneksi Backend</a>
              <a href="#home" className="hover:text-white">Kembali ke Atas</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
