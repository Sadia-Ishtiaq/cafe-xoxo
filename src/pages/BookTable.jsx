import React from 'react'
import { cafeAssets } from '../utils/assets'
import { Phone, Clock, MapPin, Sparkles, UtensilsCrossed, Calendar, CheckCircle2, Mail } from 'lucide-react'

export default function BookTable({ setActivePage }) {
  const cafePhoneNumber = "(03) 6424 6569"
  const telLink = "tel:0364246569"
  const cafeEmail = "Ahmad.h.khan@hotmail.com"
  const cafeAddress = "77 Rooke St, Devonport, Tasmania 7310, Australia"

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 sm:space-y-14 animate-in fade-in duration-500 w-full overflow-x-hidden">
      
      {/* Top Eyebrow & Main Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent text-cafe-espresso-950 text-xs tracking-widest uppercase font-bold border border-amber-300/40 shadow-md">
          <Phone className="w-3.5 h-3.5 fill-current" /> Phone Reservations
        </div>

        {/* 1. Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-cafe-cream-50 tracking-tight leading-tight">
          Book Your Table
        </h1>

        {/* 2. Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-sans leading-relaxed max-w-2xl mx-auto">
          For table reservations and availability, please give us a call. Our team will be happy to help you choose a suitable time.
        </p>
      </div>

      {/* Main Focus: Phone Reservation Experience Card */}
      <div className="card-glass p-6 sm:p-10 md:p-12 text-center space-y-8 border-cafe-accent/40 shadow-2xl relative overflow-hidden bg-gradient-to-b from-cafe-espresso-900/95 to-cafe-espresso-950/95">
        
        {/* Subtle Ambient Glow Background */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-cafe-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cafe-accent/10 rounded-full blur-3xl pointer-events-none" />

        {/* Large Prominent Phone Display */}
        <div className="relative z-10 space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cafe-accent/15 text-cafe-accent mx-auto flex items-center justify-center border-2 border-cafe-accent/40 shadow-xl shadow-amber-500/10 animate-pulse-glow">
            {/* 5. Phone Icon */}
            <Phone className="w-8 h-8 sm:w-10 sm:h-10 fill-cafe-accent/20" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
              Direct Reservation Line
            </span>
            {/* 3. Main Focus Phone Number */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-cafe-accent tracking-wide drop-shadow-md break-words">
              {cafePhoneNumber}
            </h2>
          </div>

          {/* 6. Short Line */}
          <p className="text-xs sm:text-sm text-stone-300 font-medium max-w-md mx-auto">
            Call us to check availability and reserve your table.
          </p>
        </div>

        {/* 4. Large Primary Golden Button */}
        <div className="relative z-10 max-w-md mx-auto pt-2">
          <a
            href={telLink}
            className="w-full min-h-[56px] px-8 py-4 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-amber-300/50 cursor-pointer text-center group"
          >
            <Phone className="w-5 h-5 fill-current shrink-0 group-hover:rotate-12 transition-transform" />
            <span>CALL TO BOOK A TABLE</span>
          </a>
          <span className="block text-[11px] text-stone-400 mt-2 font-sans">
            Tapping opens your phone dialer directly
          </span>
        </div>

        {/* Hospitality Perks Bar */}
        <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-300">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cafe-accent shrink-0" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cafe-accent shrink-0" />
            <span>Large Groups Welcome</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cafe-accent shrink-0" />
            <span>Special Requests Handled</span>
          </div>
        </div>

      </div>

      {/* Information Grid: Opening Hours & Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* 7. Cafe Opening Hours Card */}
        <div className="card-glass p-6 sm:p-8 space-y-5 border border-white/15">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-2xl bg-cafe-accent/15 text-cafe-accent border border-cafe-accent/30">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-cafe-cream-50">
                Opening Hours
              </h3>
              <p className="text-xs text-stone-400">
                Calling availability during service hours
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-sans">
            <div className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-stone-400">Monday – Saturday:</span>
              <span className="text-cafe-accent font-bold font-mono">9:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-stone-400">Sunday:</span>
              <span className="text-rose-400 font-bold uppercase tracking-wider text-xs">CLOSED</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-cafe-espresso-950/80 border border-white/10 text-stone-400 text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cafe-accent shrink-0" />
            <span>Please call within operating hours for instant bookings.</span>
          </div>
        </div>

        {/* 8. Cafe Address & Details Card */}
        <div className="card-glass p-6 sm:p-8 space-y-5 border border-white/15 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-cafe-accent/15 text-cafe-accent border border-cafe-accent/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-cafe-cream-50">
                  Cafe Address
                </h3>
                <p className="text-xs text-stone-400">
                  Visit us in Devonport, Tasmania
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm sm:text-base text-stone-200 font-medium leading-relaxed">
                {cafeAddress}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Located in Rooke Street Mall with indoor seating, specialty coffee, and full kitchen menu service.
              </p>
              
              <div className="pt-2 border-t border-white/10 flex flex-col gap-1.5 text-xs text-stone-300">
                <a href="tel:0364246569" className="hover:text-cafe-accent transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cafe-accent" /> (03) 6424 6569
                </a>
                <a href={`mailto:${cafeEmail}`} className="hover:text-cafe-accent transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cafe-accent" /> {cafeEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Menu Navigation CTA */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <span className="text-xs text-stone-400">Want to see what we serve?</span>
            <button
              onClick={() => {
                setActivePage('menu')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-cafe-accent hover:text-cafe-espresso-950 text-white text-xs font-semibold transition-all border border-white/15 cursor-pointer shrink-0 flex items-center gap-1.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Browse Menu</span>
            </button>
          </div>
        </div>

      </div>

      {/* Cozy Dining Ambiance Banner */}
      <div className="card-glass overflow-hidden p-0 border border-white/15 grid grid-cols-1 md:grid-cols-12 rounded-3xl shadow-2xl">
        <div className="md:col-span-5 relative h-48 md:h-auto">
          <img 
            src={cafeAssets.ambiance.seating} 
            alt="Cafe Xoxo Dining Seating" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 space-y-3 flex flex-col justify-center bg-cafe-espresso-900/90">
          <h3 className="text-xl font-serif font-bold text-cafe-cream-50">
            Cozy Dining Sanctuary
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Whether planning an intimate breakfast, family lunch, or evening gathering, our team looks forward to serving you with genuine Tasmanian warmth.
          </p>
        </div>
      </div>

    </div>
  )
}
