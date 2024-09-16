export const Hero = () => {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Cansado do monitoramento manual de suas estufas ?
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Com o Hidros, voce tem um monitoramento completo e em tempo real de suas estufas
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="bg-teal-500 text-white drop-shadow p-3 rounded-xl font-bold">
                Contrate agora
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/hidrop.jpg"
              alt="Hero Image"
              width={550}
              height={550}
              className="aspect-square overflow-hidden rounded-xl object-cover object-center drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
