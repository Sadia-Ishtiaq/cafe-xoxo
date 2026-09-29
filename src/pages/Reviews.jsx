import React from 'react'
import { Star, Quote, Heart, MessageSquare } from 'lucide-react'

export const customerReviewsData = [
  {
    id: 1,
    author: 'Jessica Aupouri',
    meta: '4 reviews · 6 photos',
    date: 'a month ago',
    title: '',
    review: 'We had such a lovely experience here. From the moment we arrived, the staff were so welcoming and kind, treating our whole family with such genuine warmth and respect. They went above and beyond to make our kids feel included, which meant so much to us.\n\nThe coffee was so creamy, smooth and one of the nicest coffees we’ve had.\n\nIt’s rare to find a place where both the atmosphere and the customer service are just as memorable as the food and drinks. We left with full hearts and will definitely be back. Thank you for making our morning so special! ❤️',
    rating: 5,
    tag: 'Family Experience'
  },
  {
    id: 2,
    author: 'Penny Smith',
    meta: 'Local Guide · 20 reviews · 40 photos',
    date: '2 months ago',
    details: 'Lunch | $40–60',
    title: 'Pakistani & Afghan Culinary Experience',
    review: 'We had a great lunch here! If you are looking for an incredible culinary experience, this restaurant is an absolute must-visit. The menu perfectly balances the robust and warmth of Pakistani and Afghan cuisine, creating a dining experience you won’t soon forget.\nThey were also very kind in letting us take home a piece greenery from the ceiling.',
    rating: 5,
    tag: 'Lunch & Cuisine'
  },
  {
    id: 3,
    author: 'Komal Narang',
    meta: '6 reviews · 1 photo',
    date: '5 months ago',
    details: 'Brunch | $20–40',
    title: 'Spot on Coffee & Fresh Food',
    review: 'Had a great experience at this café! The food was fresh, delicious, and beautifully presented, and the coffee was absolutely spot on ☕️\nA special mention to Nav, who was incredibly friendly and welcoming. She made an excellent coffee and really added to the overall positive vibe of the place.\n\nHighly recommend this café if you’re looking for good food, great coffee, and warm service. Will definitely be coming back!',
    rating: 5,
    tag: 'Brunch & Coffee'
  },
  {
    id: 4,
    author: 'pop',
    meta: 'Local Guide · 19 reviews · 20 photos',
    date: '5 months ago',
    details: 'Lunch | $20–40',
    title: 'Delicious Curry, Chai & Baklava',
    review: 'I had a wonderful time at Cafe Xoxo! The curry was just so delicious ! Had some chaï and tea with baklava it was really marvelous !\nThe staff was very kind and the restaurant is really cozy.\nWould definitely recommend if you’re in Devonport.',
    rating: 5,
    tag: 'Lunch & Chai'
  },
  {
    id: 5,
    author: 'Matthew Kelly',
    meta: 'Local Guide · 51 reviews · 20 photos',
    date: '2 months ago',
    title: 'Magnificent Paratha & Curries',
    review: 'This is a fantastic cafe and restaurant. We had pratha with cauliflower and chicken and lamb curries, Afghan style. The pratha is worth a trip just to enjoy this magnificent dish alone. Very hospitable people, lovely atmosphere and one of the best places to eat on North West Tasmania.',
    rating: 5,
    tag: 'Afghan Specialties'
  },
  {
    id: 6,
    author: 'Frank & Susan Riccobon',
    meta: '7 reviews · 9 photos (Brisbane)',
    date: '7 months ago',
    details: 'Breakfast | $20–40',
    title: 'Awesome Coffee & Great Breakfast',
    review: 'We are visiting Devonport and just got of the ferry. We were looking for a place to have breaky. We found Cafe xoxo, and we can only recommend the Cafe, food and beverages. The coffee is awesome, we got a coffee earlier from another coffeeshop, and Cafe XoXo trumps it big time.\nThank you for your friendly service and great breakfast. Nice start to Tassie.',
    rating: 5,
    tag: 'Breakfast & Coffee'
  },
  {
    id: 7,
    author: 'Jaspreet Kaur',
    meta: 'Local Guide · 16 reviews · 4 photos',
    date: '6 months ago',
    details: 'Brunch | $60–80',
    title: 'Bursting with Flavor',
    review: 'The food was amazing, bursting with flavor, and the overall environment was welcoming and cozy. The staff was polite and helpful, contributing to a wonderful atmosphere. I highly recommend this cafe for anyone looking for great food and excellent service.',
    rating: 5,
    tag: 'Brunch & Dining'
  },
  {
    id: 8,
    author: 'Leon Perry',
    meta: '9 reviews · 5 photos',
    date: '5 months ago',
    title: 'Best Coffee in Devonport CBD',
    review: 'The best of the best coffee in a quaint, stress-free atmosphere. The staff are wonderful - always cheery, and the coffee is consistently perfect - it never changes. Best coffee/cafe in the Devonport CBD *****',
    rating: 5,
    tag: 'Devonport CBD'
  },
  {
    id: 9,
    author: 'Annie Parker',
    meta: '5 reviews · 2 photos',
    date: 'a month ago',
    details: 'Lunch | $1–20',
    title: 'Spinach & Potato Parathas',
    review: 'Just hoovered up one of their spinach and potato parathas. Absolutely delicious. I want another one already!',
    rating: 5,
    tag: 'Parathas'
  },
  {
    id: 10,
    author: 'Ryuhei FUKUMORI',
    meta: '8 reviews · 11 photos',
    date: '7 months ago',
    details: 'Brunch | $1–20',
    title: 'Hands down the best café in Devonport',
    review: 'I’ve been coming here for almost a year now! Not only is the coffee great, but the staff are also gentle and lovely.\nThis is hands down the best café to chill and relax in Devonport. Cozy, neat, and with a really nice vibe to unwind.',
    rating: 5,
    tag: 'Regular Guest'
  },
  {
    id: 11,
    author: 'Everyday Lions Events',
    meta: '3 reviews',
    date: '2 months ago',
    title: 'Apple & Rhubarb Cake Must-Try',
    review: 'XOX Cafe is a beautiful place to relax, enjoy a coffee, and have something to eat. The service is always friendly and welcoming, making every visit enjoyable. Their apple and rhubarb cake is absolutely delicious and a must-try. Highly recommend!',
    rating: 5,
    tag: 'Coffee & Cake'
  },
  {
    id: 12,
    author: 'Bijay Acharya',
    meta: '7 reviews · 1 photo',
    date: '3 months ago',
    title: 'Music of Joy Community Support',
    review: 'What a beautiful service and such a warm welcome. We were meant to perform outside, but due to the wet weather we couldn\'t and the staff kindly allowed us to perform inside the café. We are a group called "Music of Joy", sharing music and joy with the community, and their generosity made it possible for us to continue. Thank you for your kindness, flexibility, and support. We truly appreciated the opportunity to bring smiles and uplifting vibrations to everyone present. Highly recommended!',
    rating: 5,
    tag: 'Community Hospitality'
  }
]

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent text-cafe-espresso-950 text-xs tracking-widest uppercase font-bold border border-amber-300/40 shadow-md">
          <Heart className="w-3.5 h-3.5 fill-current" /> Authentic Cafe Xoxo Customer Reviews
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold font-serif text-cafe-cream-50">
          What Our Guests Say About Cafe Xoxo
        </h1>
        <p className="text-base text-stone-300">
          Real Google Reviews & Tripadvisor ratings from locals and travelers visiting Cafe Xoxo in Devonport, Tasmania.
        </p>

        {/* Overall Rating Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-cafe-espresso-900 border border-white/10 shadow-xl mt-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-lg font-bold text-white font-serif">5.0 / 5.0</span>
          <span className="text-xs text-stone-400 border-l border-white/20 pl-3">Official Google Reviews (Devonport TAS)</span>
        </div>
      </div>

      {/* Reviews Grid (All 12 Real Cafe Xoxo Reviews) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {customerReviewsData.map((item) => (
          <div 
            key={item.id}
            className="card-glass relative p-8 flex flex-col justify-between hover:border-cafe-accent/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-2xl bg-stone-950/90 border border-white/15"
          >
            <div className="space-y-4">
              {/* Stars & Tag */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cafe-accent bg-cafe-accent/20 px-3 py-1 rounded-full border border-cafe-accent/30">
                  {item.tag}
                </span>
              </div>

              {/* Review Title */}
              {item.title && (
                <h3 className="text-xl font-serif font-bold text-cafe-cream-50 group-hover:text-cafe-accent transition-colors">
                  "{item.title}"
                </h3>
              )}

              {/* Review Text */}
              <p className="text-sm text-stone-200 leading-relaxed font-sans whitespace-pre-line">
                {item.review}
              </p>
            </div>

            {/* Author Info & Date Details */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-xs text-stone-400">
              <div>
                <span className="font-bold text-white text-base block">{item.author}</span>
                <span className="text-[11px] text-cafe-accent block">{item.meta}</span>
                {item.details && <span className="text-[11px] text-amber-300/80 block mt-0.5">{item.details}</span>}
              </div>

              <div className="sm:text-right">
                <span className="text-[11px] text-stone-400 font-medium block">{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
