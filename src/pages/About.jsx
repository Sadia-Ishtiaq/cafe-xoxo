import React from 'react'
import { cafeAssets } from '../utils/assets'
import { Coffee, Heart, MapPin, Navigation, Star, Clock, ExternalLink } from 'lucide-react'
import { customerReviewsData } from './Reviews'

export default function About({ setActivePage }) {
  const googleMapsUrl = "https://maps.google.com/maps?saddr=&daddr=77%20Rooke%20St,%20Devonport,%20Tasmania%207310%20Australia@-41.178333,146.36084"
  const embedMapUrl = "https://maps.google.com/maps?q=-41.178333,146.36084(Cafe%20Xoxo)&t=&z=16&ie=UTF8&iwloc=B&output=embed"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 animate-in fade-in duration-500">
      
      {/* About Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent text-cafe-espresso-950 text-xs tracking-widest uppercase font-bold border border-amber-300/40 shadow-md">
          <Heart className="w-3.5 h-3.5 fill-current" /> Our Story & Location
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-cafe-cream-50">
          Welcome to Cafe Xoxo
        </h1>
        <p className="text-base text-stone-300 leading-relaxed">
          Located in Rooke Street Mall, Devonport, Tasmania.
        </p>
      </div>

      {/* Story & Image Section - Exact User Provided Story Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-cafe-cream-50 leading-tight">
            Where Good Food Meets Good Moments
          </h2>
          
          <p className="text-base text-stone-200 leading-relaxed font-sans">
            At Cafe Xoxo, we bring together bold flavors, specialty coffee, and a warm Tasmanian spirit. From handcrafted drinks to comforting global dishes, every plate and cup is made to be enjoyed, shared, and remembered.
          </p>

          <div className="p-4 rounded-2xl bg-cafe-accent/15 border-l-4 border-cafe-accent text-cafe-accent font-serif text-lg font-bold">
            Come for the coffee. Stay for the feeling.
          </div>
          
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => { setActivePage('menu'); window.scrollTo(0, 0); }}
              className="px-7 py-3.5 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-xs shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer border border-amber-300/40"
            >
              Explore Specialty Menu
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-xs shadow-lg shadow-amber-500/30 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-amber-300/40"
            >
              <Navigation className="w-4 h-4 fill-current" /> Get Directions
            </a>
          </div>
        </div>

        {/* Clean Photo without Overlay */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-stone-950">
          <img 
            src={cafeAssets.ambiance.interior} 
            alt="Cafe Xoxo Interior Ambiance" 
            className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[1.03]" 
          />
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-serif font-bold text-cafe-cream-50">Guest Reviews</h2>
            <p className="text-xs text-stone-400">Loved by locals and travelers visiting Cradle Mountain & Devonport</p>
          </div>
          
          <button
            onClick={() => { setActivePage('reviews'); window.scrollTo(0, 0); }}
            className="text-xs font-bold text-cafe-accent hover:underline flex items-center gap-1 cursor-pointer"
          >
            View All Reviews <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviewsData.slice(0, 3).map((rev) => (
            <div key={rev.id} className="card-glass p-6 space-y-3 hover:border-cafe-accent/50 transition-all">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-serif font-bold text-cafe-cream-100 text-base">"{rev.title}"</h3>
              <p className="text-xs text-stone-300 italic line-clamp-4 leading-relaxed">
                {rev.review}
              </p>
              <div className="pt-2 border-t border-white/10 flex justify-between text-[11px] text-stone-400 font-medium">
                <span>{rev.author}</span>
                <span>{rev.visited}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Google Map Section with Real Opening Hours */}
      <section className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-serif font-bold text-cafe-cream-50 flex items-center justify-center gap-2">
            <MapPin className="w-7 h-7 text-cafe-accent" /> Find Us In Devonport
          </h2>
          <p className="text-sm text-stone-300">
            77 Rooke St, Devonport, Tasmania 7310 Australia
          </p>
        </div>

        <div className="card-glass overflow-hidden p-0 border border-white/15 grid grid-cols-1 lg:grid-cols-12 rounded-3xl shadow-2xl">
          {/* Details Column */}
          <div className="lg:col-span-4 p-8 space-y-6 flex flex-col justify-between bg-cafe-espresso-950/90">
            <div className="space-y-5">
              <h3 className="text-xl font-serif font-bold text-cafe-accent">Cafe Xoxo</h3>
              
              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cafe-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Address</strong>
                    <span>77 Rooke St, Devonport, Tasmania 7310 Australia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cafe-accent shrink-0 mt-0.5" />
                  <div className="space-y-1 w-full">
                    <strong className="text-white block text-sm">Opening Hours</strong>
                    <div className="space-y-1 pt-1 font-mono text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Monday:</span>
                        <span className="text-white font-semibold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Tuesday:</span>
                        <span className="text-white font-semibold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Wednesday:</span>
                        <span className="text-white font-semibold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Thursday:</span>
                        <span className="text-white font-semibold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Friday:</span>
                        <span className="text-cafe-accent font-bold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Saturday:</span>
                        <span className="text-cafe-accent font-bold">9:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-white/10">
                        <span className="text-stone-400">Sunday:</span>
                        <span className="text-rose-400 font-bold uppercase">CLOSED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Golden Yellow Get Directions CTA Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-cafe-accent hover:bg-amber-400 text-cafe-espresso-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all hover:scale-105 border border-amber-300/40 mt-4 cursor-pointer"
            >
              <Navigation className="w-4 h-4 fill-current" /> Get Directions
            </a>
          </div>

          {/* Map Embed Column */}
          <div className="lg:col-span-8 min-h-[380px] relative">
            <iframe
              title="Cafe Xoxo Location Map"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter brightness-90 contrast-105"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
