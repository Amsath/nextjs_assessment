"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Showcase",
    "Docs",
    "Blog",
    "Analytics",
    "Commerce",
    "Templates",
    "Enterprise",
  ];

  return (
    <nav className="border-b px-4 py-3 flex items-center justify-between relative">
      {/* Brand */}
      <a href="/" className="text-xl font-bold text-blue-600">AEON</a>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-sm text-gray-700">
        {menuItems.map(item => (
          <a key={item} href="/" className="text-gray-700 hover:text-blue-600">{item}</a>
        ))}
      </div>

      {/* Desktop Search */}
      <input
        type="text"
        placeholder="Search documentation..."
        className="hidden md:block border border-gray-300 rounded-md px-2 py-1 text-sm"
      />

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t px-4 py-2 md:hidden z-50 shadow-md">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full border border-gray-300 rounded-md px-2 py-1 mb-3 text-sm"
          />
          <div className="flex flex-col space-y-2 text-sm text-gray-700">
            {menuItems.map(item => (
              <a key={item} href="/" className="text-gray-700 hover:text-blue-600">{item}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;