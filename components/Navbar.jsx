import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('white')
        setTextColor('#000')
      } else {
        setColor('transparent')
        setTextColor('white')
      }
    };
    window.addEventListener('scroll', changeColor);
  }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Capture</h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile */}
        <div className="block sm:hidden z-10" onClick={toggleMenu}>
          {showMenu ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{color: `${textColor}`}} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            showMenu
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li onClick={toggleMenu} className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <AiOutlineClose size={20} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
