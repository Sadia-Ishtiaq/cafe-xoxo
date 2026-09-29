import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import BookTable from './pages/BookTable'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />
      case 'menu':
        return <Menu setActivePage={setActivePage} />
      case 'gallery':
        return <Gallery setActivePage={setActivePage} />
      case 'reviews':
        return <Reviews />
      case 'about':
        return <About setActivePage={setActivePage} />
      case 'book-table':
        return <BookTable setActivePage={setActivePage} />
      default:
        return <Home setActivePage={setActivePage} />
    }
  }

  return (
    <div className="min-h-screen bg-cafe-espresso-950 text-cafe-cream-100 flex flex-col justify-between selection:bg-cafe-accent selection:text-cafe-espresso-950 relative">
      {/* Header Navigation */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Content with Smooth Transition */}
      <main key={activePage} className="flex-1 animate-in fade-in duration-300">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  )
}
