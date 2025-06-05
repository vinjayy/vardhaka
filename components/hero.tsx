import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingBag } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-navy/5 via-white to-brand-yellow/10 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="/hero1.jpg?height=1080&width=1920"
          alt="Perfume Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 via-brand-red/10 to-brand-yellow/20"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-yellow/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-16 w-32 h-32 bg-brand-red/15 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-brand-navy/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-brand-yellow/25 rounded-full blur-lg animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-24 overflow-hidden rounded-full mx-auto mb-6 shadow-2xl">
            <img
              src="/logo.png?height=96&width=96"
              alt="Vardhaka Store Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-4">
            Vardhaka Store
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-brand-red mb-4 font-semibold">
            Parfum Lokal Berkualitas Premium
          </p>
          <p className="text-lg sm:text-xl text-gray-700 mb-12 font-medium">Wangi yang Meninggalkan Kesan</p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Button
            asChild
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href="https://wa.me/6281413215200" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href="https://id.shp.ee/w71RPk5" target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shopee
            </a>
          </Button>

          <Button
            asChild
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href="https://www.tokopedia.com/vardhaka-store" target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Tokopedia
            </a>
          </Button>

          <Button
            asChild
            className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href="https://vt.tiktok.com/ZShbjpB7R/" target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="w-5 h-5 mr-2" />
              TikTok Shop
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
