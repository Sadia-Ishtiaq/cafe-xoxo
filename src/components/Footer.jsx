import React from 'react'
import { cafeAssets } from '../utils/assets'
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-cafe-espresso-950 border-t border-white/10 text-stone-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src={cafeAssets.branding.logo} alt="Cafe Xoxo" className="w-10 h-10 rounded-full border border-cafe-accent/40 object-cover" />
              <span className="text-xl font-serif font-bold text-cafe-accent">Cafe XoXo</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Crafting culinary memories with passion, heartwarming hospitality, and ST ALi specialty coffee in Devonport.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={cafeAssets.branding.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="p-2.5 rounded-full bg-white/10 hover:bg-cafe-accent text-white hover:text-cafe-espresso-950 transition-colors border border-white/15 cursor-pointer shadow-md"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={cafeAssets.branding.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="p-2.5 rounded-full bg-white/10 hover:bg-cafe-accent text-white hover:text-cafe-espresso-950 transition-colors border border-white/15 cursor-pointer shadow-md"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-semibold text-cafe-cream-100 uppercase tracking-wider">Quick Navigation</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setActivePage('home'); window.scrollTo(0, 0); }} className="hover:text-cafe-accent transition-colors cursor-pointer">Home Page</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('menu'); window.scrollTo(0, 0); }} className="hover:text-cafe-accent transition-colors cursor-pointer">Specialty Menu</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('gallery'); window.scrollTo(0, 0); }} className="hover:text-cafe-accent transition-colors cursor-pointer">Photo Gallery</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('about'); window.scrollTo(0, 0); }} className="hover:text-cafe-accent transition-colors cursor-pointer">About Our Story</button>
              </li>
              <li>
                <button onClick={() => { setActivePage('book-table'); window.scrollTo(0, 0); }} className="hover:text-cafe-accent transition-colors cursor-pointer">Book A Table</button>
              </li>
            </ul>
          </div>

          {/* Real Cafe Opening Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-semibold text-cafe-cream-100 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-cafe-accent" /> Opening Hours
            </h3>
            <div className="text-xs text-stone-300 space-y-1.5 font-sans">
              <p className="flex justify-between">
                <span className="text-stone-400">Mon – Sat:</span> 
                <span className="text-cafe-accent font-bold">9:00 AM – 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="text-stone-400">Sunday:</span> 
                <span className="text-rose-400 font-bold uppercase">CLOSED</span>
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-serif font-semibold text-cafe-cream-100 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cafe-accent" /> Location & Contact
            </h3>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-start gap-2">
                <span>77 Rooke St, Devonport, Tasmania 7310</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cafe-accent shrink-0" />
                <a href="tel:0364246569" className="hover:text-cafe-accent transition-colors">(03) 6424 6569</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cafe-accent shrink-0" />
                <a href="mailto:Ahmad.h.khan@hotmail.com" className="hover:text-cafe-accent transition-colors break-all">Ahmad.h.khan@hotmail.com</a>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>Cafe XoXo</p>
          <div className="flex items-center gap-4">
            <a
              href={cafeAssets.branding.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-accent transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a
              href={cafeAssets.branding.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cafe-accent transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
