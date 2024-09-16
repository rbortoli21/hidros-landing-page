import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Reviews } from './components/Reviews'

function App() {
  return (
    <main className='relative flex flex-col justify-center mx-auto bg-white gap-6 overflow-clip'>
      <div className='absolute top-80 lg:top-40 left-3 lg:left-10 w-48 h-44  bg-teal-200 flex justify-center items-center drop-shadow rounded-lg'>
      </div>

      <div className='absolute top-[55vh] left-[75vw] w-80 h-60  bg-teal-200 flex justify-center items-center drop-shadow rounded-lg'>
      </div>

      <div className='absolute top-[105vh] left-10 w-96 h-60  bg-teal-200 flex justify-center items-center drop-shadow rounded-lg'>
      </div>

      <div className='absolute top-[120vh] lg:top-[140vh] left-[78vw] w-96 h-64 bg-teal-200 flex justify-center items-center drop-shadow rounded-lg'>
      </div>

      <div className="z-10  flex-col justify-center max-w-[1280px] mx-auto">
        <Header />
        <Hero />
      </div>

      <div className='flex flex-col gap-8 mx-auto z-10'>
        <Reviews />
        <Pricing />

        <section id="contato" className="bg-gray-50 py-16 px-4 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Junte-se a nós</h2>
            <p className="text-gray-600 mb-6">Cadastre seu email para receber novidades sobre descontos e novos produtos !!</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-grow px-4 py-2 rounded-md border-2 border-teal-500 focus:outline-none focus:border-teal-500 text-teal-800 placeholder-teal-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-300 ease-in-out"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

export default App
