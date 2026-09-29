import React, { useState } from 'react'
import { cafeAssets } from '../utils/assets'
import { Utensils, ZoomIn, X, ChevronLeft, ChevronRight, Calendar, Maximize2 } from 'lucide-react'

export default function Menu({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeModalIndex, setActiveModalIndex] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})

  const categories = [
    { id: 'all', label: 'All Menu Pages (7)' },
    { id: 'drinks', label: 'Hot & Cold Drinks' },
    { id: 'mains', label: 'Breakfast, Sandwiches & Wraps' },
    { id: 'cuisines', label: 'Afghan & Korean Cuisines' },
  ]

  const menuPages = cafeAssets.menuPages

  const filteredPages = activeCategory === 'all'
    ? menuPages
    : menuPages.filter(page => page.category === activeCategory)

  const handleOpenModal = (index) => {
    setActiveModalIndex(index)
  }

  const handleCloseModal = () => {
    setActiveModalIndex(null)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredPages.length)
    }
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredPages.length) % filteredPages.length)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-300">
      
      {/* Menu Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent text-cafe-espresso-950 text-xs tracking-widest uppercase font-bold border border-amber-300/40 shadow-md">
          <Utensils className="w-3.5 h-3.5" /> Official Cafe Xoxo Menu
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-cafe-cream-50">
          Our Full Menu & Beverages
        </h1>
        <p className="text-base text-stone-300">
          Click any menu card below to view full-screen high-resolution zoom mode.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id)
              setActiveModalIndex(null)
            }}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-cafe-accent text-cafe-espresso-950 shadow-lg shadow-amber-500/30 scale-105 border border-amber-300'
                : 'bg-cafe-espresso-900/90 text-stone-300 hover:bg-cafe-accent/20 hover:text-cafe-accent border border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPages.map((page, idx) => {
          const isLoaded = loadedImages[page.id]
          return (
            <div 
              key={page.id} 
              className="card-glass group flex flex-col justify-between hover:border-cafe-accent transition-all duration-300 shadow-2xl bg-cafe-espresso-900/90 p-6 rounded-3xl border border-white/15 cursor-pointer"
              onClick={() => handleOpenModal(idx)}
            >
              {/* Image Display Container with Warm Skeleton Loader */}
              <div className="relative w-full min-h-[320px] rounded-2xl overflow-hidden bg-cafe-espresso-800/70 border border-white/10 group-hover:border-cafe-accent/50 transition-colors p-2 flex items-center justify-center">
                
                {/* Skeleton Loader placeholder while loading */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cafe-espresso-900/80 animate-pulse">
                    <Utensils className="w-8 h-8 text-cafe-accent/40 animate-bounce" />
                    <span className="text-xs text-stone-400 font-medium">Loading Menu Card...</span>
                  </div>
                )}

                <img 
                  src={page.image} 
                  alt={page.name} 
                  loading="eager"
                  decoding="async"
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [page.id]: true }))}
                  className={`w-full h-auto object-contain rounded-xl filter brightness-[1.03] contrast-[1.05] group-hover:scale-[1.02] transition-all duration-500 ${
                    isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                  }`} 
                />
                
                {/* Click to Zoom Overlay Banner */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleOpenModal(idx)
                    }}
                    className="px-6 py-3 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-2xl shadow-amber-500/50 cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" /> Click To Zoom Fullscreen
                  </button>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-cafe-cream-100 group-hover:text-cafe-accent transition-colors">
                    {page.name}
                  </h3>
                  <span className="text-xs text-cafe-accent font-semibold block">Click card to open full zoom</span>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpenModal(idx)
                  }}
                  className="px-5 py-2.5 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-colors cursor-pointer shrink-0"
                >
                  <ZoomIn className="w-4 h-4" /> Zoom Image
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* FULL-SCREEN LIGHTBOX ZOOM MODAL */}
      {activeModalIndex !== null && filteredPages[activeModalIndex] && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
          onClick={handleCloseModal}
        >
          {/* Top Bar */}
          <div 
            className="w-full max-w-7xl mx-auto flex items-center justify-between text-white border-b border-white/15 pb-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-cafe-accent">
                {filteredPages[activeModalIndex].name}
              </h2>
              <p className="text-xs text-stone-400">
                Menu Page {activeModalIndex + 1} of {filteredPages.length}
              </p>
            </div>
            
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400 transition-colors cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" /> Close Zoom
            </button>
          </div>

          {/* Main Zoomed Image Container */}
          <div 
            className="relative w-full max-w-6xl mx-auto flex-1 flex items-center justify-center my-2 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-4 rounded-full bg-black/80 hover:bg-cafe-accent hover:text-cafe-espresso-950 text-white transition-colors cursor-pointer border border-white/20 shadow-2xl"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <img 
              src={filteredPages[activeModalIndex].image} 
              alt={filteredPages[activeModalIndex].name} 
              className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl filter brightness-[1.05] contrast-[1.08] select-none"
            />

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-4 rounded-full bg-black/80 hover:bg-cafe-accent hover:text-cafe-espresso-950 text-white transition-colors cursor-pointer border border-white/20 shadow-2xl"
              aria-label="Next Page"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Bottom Control Bar */}
          <div 
            className="w-full max-w-7xl mx-auto flex items-center justify-between pt-4 border-t border-white/15 text-xs text-stone-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="hidden sm:inline-block text-stone-400 font-medium">
              Click left / right arrows to navigate between menu pages
            </span>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href={filteredPages[activeModalIndex].image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                Open Original File
              </a>
              <button
                onClick={() => {
                  handleCloseModal()
                  setActivePage('book-table')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-6 py-2.5 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/30 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book Table Now
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Book Table Banner */}
      <div className="card-glass p-8 sm:p-12 text-center space-y-6 bg-gradient-to-r from-cafe-espresso-950 via-cafe-espresso-900 to-cafe-espresso-950 border border-cafe-accent/40">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cafe-cream-50">
          Ready to taste Cafe Xoxo's specialties?
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto">
          Reserve your table now at 77 Rooke St, Devonport.
        </p>
        <button
          onClick={() => {
            setActivePage('book-table')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="px-8 py-3.5 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-sm shadow-xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer"
        >
          Book A Table
        </button>
      </div>

    </div>
  )
}
