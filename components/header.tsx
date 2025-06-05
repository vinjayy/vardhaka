"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 overflow-hidden">
              <img
                src="/logo.png?height=48&width=48"
                alt="Vardhaka Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-brand-navy">Vardhaka Store</h1>
              <p className="text-sm text-brand-navy font-medium">Wangi yang Meninggalkan Kesan</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-brand-navy transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brand-navy transition-colors font-medium"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-brand-navy transition-colors font-medium"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-brand-navy transition-colors font-medium"
            >
              Kontak
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              <a href="https://wa.me/6281413215200" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy/90 text-white">
              <a href="https://id.shp.ee/w71RPk5" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Belanja
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-2 text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-colors font-medium"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-left px-4 py-2 text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-colors font-medium"
              >
                Produk
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-gray-700 hover:text-brand-navy hover:bg-gray-50 transition-colors font-medium"
              >
                Kontak
              </button>

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-3">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href="https://wa.me/6281413215200" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                  <a href="https://id.shp.ee/w71RPk5" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Belanja Sekarang
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
