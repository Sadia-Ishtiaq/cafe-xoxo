// Cafe Xoxo Asset Registry - Real Photography & Gallery Catalog

import frontImg from '../assets/front img.jpg'
import logoImg from '../assets/logo.jpg'
import heroImg from '../assets/hero.jpg'
import interiorLampsImg from '../assets/interior-lamps.jpg'
import tableImg from '../assets/table.jpg'

// Coffee & Drink Photos
import stAliCoffeeImg from '../assets/st-ali-coffee.jpg'
import espressoPourImg from '../assets/espresso-pour.jpg'
import latteImg from '../assets/latte.jpg'
import icedLatteImg from '../assets/iced-latte.jpg'
import chaiLatteImg from '../assets/chai-latte.jpg'
import matchaImg from '../assets/matcha.jpg'
import matchaFlavoursImg from '../assets/matcha-flavours.jpg'
import mangoMatchaImg from '../assets/mango-matcha.jpg'
import shilajitImg from '../assets/shilajit.jpg'
import shilajitTeaImg from '../assets/shilajit-tea.jpg'

// Cafe Photography Shots
import shot1 from '../assets/515018336_1262467982334913_6577595352735632000_n.jpg'

// Newly Added Gallery Images (gallery 1 to 7)
import gallery1 from '../assets/gallery (1).jpg'
import gallery2 from '../assets/gallery (2).jpg'
import gallery3 from '../assets/gallery (3).jpg'
import gallery4 from '../assets/gallery (4).jpg'
import gallery5 from '../assets/gallery (5).jpg'
import gallery6 from '../assets/gallery (6).jpg'
import gallery7 from '../assets/gallery (7).jpg'

// High-Res Menu Pages
import menuHotDrinks from '../assets/hotdrinksnewimage.png'
import menuColdDrinks from '../assets/colddrinks.png'
import menuBreakfast from '../assets/breakfast.png'
import menuSandwich from '../assets/sandwichh.png'
import menuWraps from '../assets/housemade_wraps.png'
import menuKorean from '../assets/korean_sousine.png'
import menuAfghan from '../assets/afghancousine.png'

export const cafeAssets = {
  branding: {
    logo: logoImg,
    heroBackground: frontImg,
    heroBanner: heroImg,
    facebookUrl: 'https://www.facebook.com/cafexoxo117/',
    instagramUrl: 'https://www.instagram.com/cafexoxo77/',
  },
  ambiance: {
    interior: interiorLampsImg,
    seating: tableImg,
  },
  menuPages: [
    { id: 1, name: 'Hot Drinks & Coffee Menu', image: menuHotDrinks, category: 'drinks' },
    { id: 2, name: 'Cold Drinks, Juices & Smoothies', image: menuColdDrinks, category: 'drinks' },
    { id: 3, name: 'Breakfast & All Day Menu', image: menuBreakfast, category: 'mains' },
    { id: 4, name: 'Gourmet Sandwiches & Toasties', image: menuSandwich, category: 'mains' },
    { id: 5, name: 'Housemade Wraps & Rolls', image: menuWraps, category: 'mains' },
    { id: 6, name: 'Korean Cuisine & Lunch Specials', image: menuKorean, category: 'cuisines' },
    { id: 7, name: 'Authentic Afghan Cuisine & Curries', image: menuAfghan, category: 'cuisines' },
  ],
  gallery: [
    { id: 1, title: 'Cafe Xoxo Dining Experience', image: gallery1, category: 'ambiance' },
    { id: 2, title: 'Specialty House Curry & Roti Platter', image: gallery2, category: 'food' },
    { id: 3, title: 'Warm Brick & Stained-Glass Ambiance', image: gallery3, category: 'ambiance' },
    { id: 4, title: 'Signature Crafted Drink & Coffee', image: gallery4, category: 'drinks' },
    { id: 5, title: 'Authentic Afghan & Asian Fusion Dish', image: gallery5, category: 'food' },
    { id: 6, title: 'Cozy Table Seating & Lantern Lights', image: gallery6, category: 'ambiance' },
    { id: 7, title: 'Specialty Gourmet Bowl', image: gallery7, category: 'food' },
    { id: 8, title: 'Warm Brick & Pendant Lighting', image: interiorLampsImg, category: 'ambiance' },
    { id: 9, title: 'ST ALi Specialty Coffee Beans', image: stAliCoffeeImg, category: 'drinks' },
    { id: 10, title: 'Cozy Dining & Seating Spot', image: tableImg, category: 'ambiance' },
    { id: 11, title: 'Double Shot Espresso Extraction', image: espressoPourImg, category: 'drinks' },
    { id: 12, title: 'Signature Mango Matcha Layered Drink', image: mangoMatchaImg, category: 'drinks' },
    { id: 13, title: 'Artisan Latte Art', image: latteImg, category: 'drinks' },
    { id: 14, title: 'Chilled Iced Coffee & Cold Brew', image: icedLatteImg, category: 'drinks' },
    { id: 15, title: 'Authentic Spiced Chai Latte', image: chaiLatteImg, category: 'drinks' },
    { id: 16, title: 'Flavoured Uji Matcha Collection', image: matchaFlavoursImg, category: 'drinks' },
    { id: 17, title: 'Himalayan Shilajit Tea Infusion', image: shilajitTeaImg, category: 'drinks' },
    { id: 18, title: 'Cafe Dining Atmosphere', image: heroImg, category: 'ambiance' },
    { id: 19, title: 'Warm Gathering & Hospitality Spot', image: shot1, category: 'ambiance' },
  ]
}

export default cafeAssets
