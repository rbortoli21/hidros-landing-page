import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white mt-3">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <a href="#home">
          <img src="/logo.jpg" alt="logo" className="w-32 sm:w-48" />
        </a>
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row w-full sm:w-auto mt-4 sm:mt-0`}>
        <ul className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-10 items-center text-teal-950">
          <li><a href="#home" className="hover:text-teal-600">Home</a></li>
          <li><a href="#depoimentos" className="hover:text-teal-600">Depoimentos</a></li>
          <li><a href="#planos" className="hover:text-teal-600">Planos</a></li>
          <li><a href="#contato" className="hover:text-teal-600">Contato</a></li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0 sm:ml-4">
          <button className="text-teal-500 font-bold py-2 px-4 rounded-xl hover:bg-teal-100">
            Login
          </button>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};
