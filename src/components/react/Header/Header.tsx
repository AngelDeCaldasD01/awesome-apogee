import { useState } from "react";
import "./Header.css";

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-teal-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-teal-400 text-4xl font-bold text-stroke font-body">Rick y Morty</div>
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-lime-550">Home</a>
          <a href="/character" className="text-lime-550">Characters</a>
          <a href="#" className="text-lime-550">Locations</a>
          <a href="#" className="text-lime-550">Episodes</a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-lime-950 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="mt-2 space-y-2">
            <a href="/" className="block text-lime-950">Home</a>
            <a href="/character" className="block text-lime-950">Character</a>
            <a href="#" className="block text-lime-950">Location</a>
            <a href="#" className="block text-lime-950">Episode</a>
          </nav>
        </div>
      )}
    </header>
  );
};