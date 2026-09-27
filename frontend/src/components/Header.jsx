import React from 'react'
import { FaBagShopping } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="text-2xl font-semibold tracking-tight lowercase">
          noise
        </a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#product" className="hover:opacity-60">Headphones</a>
          <a href="#earbuds" className="hover:opacity-60">Earbuds</a>
          <a href="#sound" className="hover:opacity-60">Features</a>
          <a href="#specs" className="hover:opacity-60">Specs</a>
        </nav>
        <a href="#product" className="inline-flex items-center gap-2 text-sm" aria-label="Bag">
          <span className="flex items-center gap-2">
            <span className="text-lg"><FaBagShopping aria-hidden="true" /></span>
            <span className="hidden sm:inline">Bag</span>
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header