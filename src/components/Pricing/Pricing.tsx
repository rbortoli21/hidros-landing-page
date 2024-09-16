export const Pricing = () => {
  return (
    <section id="planos" className="bg-gray-50 py-16 px-4 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha o plano que melhor se encaixa a voce</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Basic Plan */}
            <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pequeno produtor</h3>
                <p className="text-3xl font-bold mb-6">$9.99<span className="text-sm font-normal">/mo</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    10GB Storage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    1 User
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 mt-auto"> Escolher Plano</button>
            </div>

            {/* Pro Plan (Recommended) */}
            <div className="w-full md:w-1/3 p-8 bg-teal-50 border-b md:border-b-0 md:border-r border-gray-200 relative flex flex-col">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl">Mais vendido!</div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-teal-700">Medio produtor</h3>
                <p className="text-3xl font-bold mb-6 text-teal-700">$19.99<span className="text-sm font-normal">/mo</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    50GB Storage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    5 Users
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Priority Support
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 bg-teal-600 text-white rounded hover:bg-teal-700 transition duration-200 mt-auto"> Escolher Plano</button>
            </div>

            {/* Enterprise Plan */}
            <div className="w-full md:w-1/3 p-8 flex flex-col">
              <div>
                <h3 className="text-xl font-semibold mb-4">Grande produtor</h3>
                <p className="text-3xl font-bold mb-6">$39.99<span className="text-sm font-normal">/mo</span></p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    100GB Storage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited Users
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    24/7 Support
                  </li>
                </ul>
              </div>
              <button className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 mt-auto"> Escolher Plano</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
