import React, { useState } from 'react'
import { cafeAssets } from '../utils/assets'
import { Menu as MenuIcon, X, Calendar, UtensilsCrossed, Info, Home as HomeIcon, Star, Camera, Instagram, Facebook } from 'lucide-react'

export default function Header({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'about', label: 'About Us', icon: Info },
  ]

  const handleNavClick = (pageId) => {
    setActivePage(pageId)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-[99990] bg-cafe-espresso-950/95 backdrop-blur-md border-b border-white/10 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none cursor-pointer shrink-0"
        >
          <img 
            src={cafeAssets.branding.logo} 
            alt="Cafe Xoxo" 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-cafe-accent object-cover group-hover:scale-105 transition-transform duration-300 shadow-md shadow-amber-500/20"
          />
          <span className="text-xl sm:text-2xl font-bold font-serif text-cafe-accent tracking-wide block leading-none group-hover:text-amber-400 transition-colors">
            Cafe XoXo
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-3 sm:gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold font-sans transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                activePage === item.id 
                  ? 'bg-cafe-accent text-cafe-espresso-950 shadow-md shadow-amber-500/20 scale-105' 
                  : 'text-stone-300 hover:text-cafe-accent hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/15">
            <a
              href={cafeAssets.branding.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Cafe Xoxo Facebook"
              className="p-2 rounded-full text-stone-300 hover:text-cafe-accent hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={cafeAssets.branding.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Cafe Xoxo Instagram"
              className="p-2 rounded-full text-stone-300 hover:text-cafe-accent hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Book Table Golden Accent Button */}
          <button 
            onClick={() => handleNavClick('book-table')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              activePage === 'book-table'
                ? 'bg-amber-400 text-cafe-espresso-950 shadow-xl shadow-amber-500/40 ring-2 ring-white/50 scale-105'
                : 'bg-cafe-accent hover:bg-cafe-accent-hover text-cafe-espresso-950 shadow-lg shadow-amber-500/25 hover:scale-105'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book Table
          </button>
        </nav>

        {/* Mobile Hamburger Button (44px Touch Target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-cafe-accent active:scale-95 transition-all cursor-pointer border border-white/15"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6 text-cafe-accent" />}
        </button>
      </div>

      {/* Fully Visible Mobile Drawer Menu with Z-Index fix */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 w-full bg-cafe-espresso-950/98 backdrop-blur-2xl border-b border-white/20 px-4 py-5 space-y-3.5 shadow-2xl z-[99999] max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          
          {/* Navigation Items (Home, Menu, Gallery, Reviews, About Us) */}
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold transition-all text-left cursor-pointer ${
                    activePage === item.id 
                      ? 'bg-cafe-accent text-cafe-espresso-950 shadow-lg shadow-amber-500/25 border border-amber-300' 
                      : 'text-stone-200 hover:bg-white/10 hover:text-cafe-accent border border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Book Table Button inside Mobile Menu */}
          <div className="pt-2 border-t border-white/10">
            <button 
              onClick={() => handleNavClick('book-table')}
              className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-base shadow-xl transition-all cursor-pointer ${
                activePage === 'book-table'
                  ? 'bg-amber-400 text-cafe-espresso-950 ring-2 ring-white/50'
                  : 'bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 shadow-amber-500/25'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Book Table</span>
            </button>
          </div>

          {/* Social Links inside Mobile Drawer */}
          <div className="pt-3 flex items-center justify-center gap-4 text-xs font-semibold text-stone-300 border-t border-white/10">
            <a
              href={cafeAssets.branding.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15"
            >
              <Facebook className="w-4 h-4 text-cafe-accent" /> Facebook
            </a>
            <a
              href={cafeAssets.branding.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15"
            >
              <Instagram className="w-4 h-4 text-cafe-accent" /> Instagram
            </a>
          </div>

        </div>
      )}
    </header>
  )
}
