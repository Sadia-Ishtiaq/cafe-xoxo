import React, { useState } from 'react'
import { cafeAssets } from '../utils/assets'
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

export default function Gallery({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  const galleryItems = cafeAssets.gallery

  const categories = [
    { id: 'all', label: `All Photos (${galleryItems.length})` },
    { id: 'ambiance', label: 'Ambiance & Atmosphere' },
    { id: 'drinks', label: 'Coffee & Drinks' },
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const handleOpenModal = (index) => {
    setActiveModalIndex(index)
  }

  const handleCloseModal = () => {
    setActiveModalIndex(null)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredItems.length)
    }
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-500">
      
      {/* Gallery Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent text-cafe-espresso-950 text-xs tracking-widest uppercase font-bold border border-amber-300/40 shadow-md">
          <Camera className="w-3.5 h-3.5" /> Cafe Xoxo Photo Gallery
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-cafe-cream-50">
          Atmosphere, Coffee & Cuisine
        </h1>
        <p className="text-base text-stone-300">
          Real photography from Cafe Xoxo in Devonport, Tasmania. Click any photo to view in high resolution.
        </p>
      </div>

      {/* Category Tabs (Removed Delicious Dishes & Meals tab as requested) */}
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

      {/* Clean Gallery Grid - Photos ONLY without text overlays */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => handleOpenModal(idx)}
            className="group relative rounded-3xl overflow-hidden border border-white/15 bg-stone-950 h-72 cursor-pointer shadow-2xl hover:border-cafe-accent transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Clean Image Only */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.02]" 
            />

            {/* Subtle Zoom Icon Overlay on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <span className="p-3.5 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold shadow-2xl shadow-amber-500/50">
                <ZoomIn className="w-5 h-5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FULL-SCREEN GALLERY LIGHTBOX MODAL */}
      {activeModalIndex !== null && filteredItems[activeModalIndex] && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
          onClick={handleCloseModal}
        >
          {/* Top Bar with Photo Title & Photo Number */}
          <div 
            className="w-full max-w-7xl mx-auto flex items-center justify-between text-white border-b border-white/15 pb-4 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-cafe-accent">
                {filteredItems[activeModalIndex].title}
              </h2>
              <p className="text-xs text-stone-400">
                Photo {activeModalIndex + 1} of {filteredItems.length}
              </p>
            </div>
            
            <button
              onClick={handleCloseModal}
              className="px-4 py-2 rounded-full bg-cafe-accent text-cafe-espresso-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-400 transition-colors cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" /> Close Gallery
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
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <img 
              src={filteredItems[activeModalIndex].image} 
              alt={filteredItems[activeModalIndex].title} 
              className="max-h-[78vh] max-w-full object-contain rounded-2xl shadow-2xl filter brightness-[1.05] contrast-[1.05] select-none border border-white/15"
            />

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-4 rounded-full bg-black/80 hover:bg-cafe-accent hover:text-cafe-espresso-950 text-white transition-colors cursor-pointer border border-white/20 shadow-2xl"
              aria-label="Next Photo"
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
              Click left / right arrows or swipe to browse photos
            </span>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href={filteredItems[activeModalIndex].image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                View Original Photo
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
          Experience Cafe Xoxo in Devonport
        </h2>
        <p className="text-sm text-stone-300 max-w-xl mx-auto">
          Visit us at 77 Rooke St, Devonport or call us to reserve your table.
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
