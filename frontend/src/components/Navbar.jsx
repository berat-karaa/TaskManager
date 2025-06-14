import React, { useState,useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Zap,Settings, LogOut, ChevronDown, BookOpenCheck  } from 'lucide-react';

const Navbar = ({onLogout, user={}}) => {
    const menuref=useRef(null);
    const[menuOpen,SetMenuOpen]=useState(false);
    const navigate =useNavigate();

    useEffect(() => {

      const handleClickOutside=(event) => {
        if(menuref.current && !menuref.current.contains(event.target)){
          SetMenuOpen(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return() => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleMenuToggle = () => SetMenuOpen((prev) => !prev);

    const handleLogout=() => {
      SetMenuOpen(false);
      onLogout()
    }
return (
  <header className="sticky top-1 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700 font-sans">
    <div className="flex items-center justify-between px-4 py-3 md:px-6 max-w-0xl mx-3">
      {/* LOGO */}
      <div
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => navigate('/')}>
        <div
          className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br
            from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg group-hover:shadow-purple-300/50
            group-hover:scale-105 transition duration-300">
          <BookOpenCheck className="w-6 h-6 text-white" />
          <div
            className="absolute -bottom-1 w-3 h-3 bg-white rounded-full shadow-md animate-ping"
          />
        </div>
        {/* BRAND NAME */}
        <span className="text-2xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500
          to-indigo-500 bg-clip-text text-transparent tracking-wide">
          TaskManager
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* USER DROPDOWN */}
        <div ref={menuref} className="relative">
          <button
            onClick={handleMenuToggle}
            className="flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer hover:bg-purple-50 dark:hover:bg-gray-800
              transition-colors duration-300 border border-transparent hover:border-purple-200 dark:hover:border-gray-600">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="Avatar"
                  className="w-9 h-9 rounded-full shadow-sm"
                />
              ) : (
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full
                    bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white font-semibold shadow-md">
                  {user.name?.[0]?.toUpperCase() || 'U'}
                </div>
              )}
              <div className='absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400
              rounded-full border-2 border-white dark:border-gray-800 animate-pulse'/>
            </div>
            <div className='text-left hidden md:block'>
              <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>{user.name}</p>
              <p className='text-xs text-gray-500 dark:text-gray-400 font-normal'>{user.email}</p>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-300
            ${menuOpen ? 'rotate-180' : ''}`}/>
          </button>
          {menuOpen && (
              <ul className='absolute top-14 right-0 w-56 bg-white dark:bg-gray-800 rounded-2xl
              shadow-xl border border-purple-100 dark:border-gray-700 z-50 overflow-hidden animate-fadeIn cursor-pointer'>

                <li className='p-0.5'>
                  <button onClick={()=> {
                    SetMenuOpen(false)
                    navigate('/profile')
                  }}
                  className='flex w-full cursor-pointer
                  items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-700 dark:text-gray-300' role='menuitem'>
                    <Settings className='w-5 h-4 text-gray-700 dark:text-gray-300'/>
                    Hesap Ayarları
                  </button>
                </li>

                <li className='p-0.5'>
                  <button onClick={handleLogout} className='flex w-full cursor-pointer
                  items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-red-50 dark:hover:bg-red-900/50 transition text-red-600 dark:text-red-400'>
                    <LogOut className='w-5 h-4'/>
                    Hesaptan Çık
                  </button>
                </li>
              </ul>
          )}
        </div>
      </div>
    </div>
  </header>
);
}

export default Navbar;