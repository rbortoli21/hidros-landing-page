

export const Footer = () => {
  return (
    <footer className="py-8 gap-9 flex flex-col items-center w-full px-4 md:px-8 bg-gray-50">
      <div
        className="max-w-[1280px] flex flex-col md:flex-row justify-between items-start gap-8 border-t md:border-t-0 border-gray-10 pt-10 md:pt-2"
      >
        <div className="flex flex-col gap-6">
          <a href="https://folhastech.com" >
            <img width={180} height={32} src="https://www.folhastech.com/_image?href=%2F_astro%2Flogo._S8Q9qX4.svg" alt="Logo" />
          </a><a href="/" >
            <img width={180} height={32} src="/logo.jpg" alt="Logo" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-[200px] lg:gap-[300px]">
          <div className="flex flex-col gap-4">
            <section className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Contato:</h3>
              <ul className="flex flex-col gap-4 font-semibold">
                <li>
                  <a href="tel:+554498724121">(44) 9872-4121</a>
                </li>
                <li>
                  <a href="mailto:contato@folhastech.com">contato@folhastech.com</a>
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h3 className="font-bold">Nos acompanhe pelas redes:</h3>
              <ul className="flex gap-4 font-semibold">
                <li>
                  <a
                    href="https://www.instagram.com/folhastech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="https://www.folhastech.com/_image?href=%2F_astro%2Finstagram.i2hLK6-w.svg" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <section>
            <ul className="flex flex-col gap-4 font-semibold">
              <li>
                <a href="/">Ínicio</a>
              </li>
              <li>
                <a href="/" >Sobre o Hidros</a>
              </li>
              <li>
                <a href="/#planos" >Preços</a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <p className="font-semibold">Copyright © Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


