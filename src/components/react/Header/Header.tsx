import { useState } from "react";

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-lime-400 p-4 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lime-950 text-2xl font-bold">Mi Sitio</div>
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="text-lime-950">Home</a>
          <a href="/character" className="text-lime-950">Character</a>
          <a href="#" className="text-lime-950">Location</a>
          <a href="#" className="text-lime-950">Episode</a>
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