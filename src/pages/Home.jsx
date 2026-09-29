import React from 'react'
import { cafeAssets } from '../utils/assets'
import { UtensilsCrossed, Calendar, Coffee, Heart, Sparkles, Star, Quote, ChevronRight, ArrowRight } from 'lucide-react'
import { customerReviewsData } from './Reviews'

export default function Home({ setActivePage }) {
  return (
    <div className="space-y-16 sm:space-y-24 w-full max-w-full overflow-x-hidden">
      
      {/* Mobile-Optimized Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full overflow-hidden">
        
        {/* Atmosphere Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:bg-fixed transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(15, 12, 10, 0.68), rgba(15, 12, 10, 0.85)), url('${cafeAssets.branding.heroBackground}')`
          }}
        />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-8 w-full animate-in fade-in zoom-in-95 duration-700">
          
          {/* Top White Pill Badge */}
          <div className="inline-block px-5 sm:px-8 py-2 sm:py-2.5 rounded-full bg-white text-stone-950 font-bold text-[11px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest shadow-2xl shadow-black/60 border border-white/20 transition-transform hover:scale-105 max-w-[90vw] truncate">
            Crafting Culinary Memories
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tight leading-[1.2] sm:leading-[1.15] drop-shadow-lg break-words px-1">
            Welcome to Cafe XoXo – A Taste of Passion & Culture
          </h1>

          {/* Hero Subtitle Paragraph */}
          <p className="text-sm sm:text-lg md:text-xl text-stone-200 font-sans max-w-3xl mx-auto leading-relaxed sm:leading-relaxed drop-shadow px-2">
            Experience a fusion of flavors, heartwarming hospitality, and a cozy ambiance where every meal tells a story. Join us for an unforgettable dining experience in Tasmania!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full max-w-md sm:max-w-none mx-auto px-2">
            
            {/* View Menu Button */}
            <button
              onClick={() => {
                setActivePage('menu')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-amber-500/35 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-amber-300/40"
            >
              <UtensilsCrossed className="w-5 h-5 shrink-0" />
              <span>VIEW MENU</span>
            </button>

            {/* Book Table Button */}
            <button
              onClick={() => {
                setActivePage('book-table')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full bg-cafe-accent/20 hover:bg-cafe-accent text-cafe-cream-50 hover:text-cafe-espresso-950 font-bold text-sm sm:text-base border-2 border-cafe-accent/70 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-cafe-espresso-950 group-hover:text-cafe-espresso-950 shrink-0" />
              <span>BOOK A TABLE</span>
            </button>

          </div>
        </div>
      </section>

      {/* MOBILE-OPTIMIZED ABOUT / OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          
          {/* Image Showcase Column */}
          <div className="lg:col-span-6 w-full order-1 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-stone-950 w-full">
              <img 
                src={cafeAssets.ambiance.interior} 
                alt="Cafe Xoxo Warm Interior Ambiance" 
                className="w-full h-[220px] xs:h-[260px] sm:h-[360px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[1.03]" 
              />
            </div>
          </div>

          {/* Story Text, Quote & CTA Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 w-full order-2 lg:order-2">
            <div className="space-y-2.5 sm:space-y-3">
              <span className="badge-amber">
                <Heart className="w-3.5 h-3.5 fill-current" /> OUR STORY
              </span>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-cafe-cream-50 leading-tight sm:leading-[1.2] break-words">
                A Place to Eat, Relax & Connect
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-stone-300 font-sans leading-relaxed">
              Located in the heart of Devonport's Rooke Street Mall, Cafe Xoxo brings together bold culinary traditions, ST ALi specialty coffee, and genuine Tasmanian warmth. Whether you're dropping by for a morning espresso, sharing lunch with friends, or unwinding under our stained-glass lanterns, every visit is crafted to make you feel right at home.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-cafe-espresso-900/80 border-l-4 border-cafe-accent text-cafe-accent font-serif text-base sm:text-lg font-bold shadow-md">
              Where Good Food Meets Good Moments.
            </div>

            <div className="pt-1 sm:pt-2 w-full">
              <button
                onClick={() => {
                  setActivePage('about')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="w-full sm:w-auto min-h-[48px] min-w-[44px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer border border-amber-300/40 text-center"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Highlights / Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full max-w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          
          {/* Card 1: ST ALi Specialty Coffee */}
          <div className="card-glass p-6 sm:p-8 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 border border-white/15 bg-cafe-espresso-900/90 w-full">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cafe-accent/15 text-cafe-accent border border-cafe-accent/30 shadow-md shrink-0">
              <Coffee className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-cafe-cream-50 tracking-tight break-words">
              ST ALi Specialty Coffee
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Serving premium ST ALi beans crafted by expert baristas into rich, velvety espressos, lattes, and cold brews.
            </p>
          </div>

          {/* Card 2: Artisan Matcha & Elixirs */}
          <div className="card-glass p-6 sm:p-8 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 border border-white/15 bg-cafe-espresso-900/90 w-full">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cafe-accent/15 text-cafe-accent border border-cafe-accent/30 shadow-md shrink-0">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-cafe-cream-50 tracking-tight break-words">
              Artisan Matcha & Elixirs
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Explore our famous mango matcha blends, chai lattes, and natural wellness teas crafted for daily vitality.
            </p>
          </div>

          {/* Card 3: Tasmanian Ambiance */}
          <div className="card-glass p-6 sm:p-8 flex flex-col items-center text-center space-y-3.5 sm:space-y-4 hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 border border-white/15 bg-cafe-espresso-900/90 w-full">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-cafe-accent/15 text-cafe-accent border border-cafe-accent/30 shadow-md shrink-0">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-rose-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-cafe-cream-50 tracking-tight break-words">
              Warm Atmosphere
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              Relax in a warm, brick-walled cozy sanctuary illuminated by stained glass lamp lights and lush indoor greenery.
            </p>
          </div>

        </div>
      </section>

      {/* Real Customer Reviews Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-serif font-bold text-cafe-cream-50">What Our Guests Say</h2>
            <p className="text-xs text-stone-400">Authentic experiences from travelers and locals at Cafe Xoxo</p>
          </div>

          <button
            onClick={() => { setActivePage('reviews'); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-cafe-accent hover:underline flex items-center gap-1 cursor-pointer"
          >
            Read All Reviews <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviewsData.slice(0, 3).map((rev) => (
            <div key={rev.id} className="card-glass p-6 space-y-3 hover:border-cafe-accent/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-cafe-accent/30" />
                </div>
                {rev.title && <h3 className="font-serif font-bold text-cafe-cream-100 text-base">"{rev.title}"</h3>}
                <p className="text-xs text-stone-300 italic line-clamp-4 leading-relaxed">
                  {rev.review}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10 flex justify-between items-center text-[11px] text-stone-400 font-medium">
                <span className="font-semibold text-white">{rev.author}</span>
                <span className="text-cafe-accent font-bold">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
