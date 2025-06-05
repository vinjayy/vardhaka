import { MessageCircle, ShoppingBag } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-brand-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">V</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold">Vardhaka Store</h3>
            </div>
            <p className="text-gray-300 mb-4">Parfum lokal berkualitas premium dengan wangi yang meninggalkan kesan.</p>
            <p className="text-brand-yellow font-medium">Wangi yang Meninggalkan Kesan</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-brand-yellow">Navigasi Cepat</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-brand-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-yellow transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-brand-yellow transition-colors">
                  Produk
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-yellow transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-brand-yellow">Link Toko</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6281413215200"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-brand-yellow transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="https://id.shp.ee/w71RPk5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-brand-yellow transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shopee
              </a>
              <a
                href="https://www.tokopedia.com/vardhaka-store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-brand-yellow transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Tokopedia
              </a>
              <a
                href="https://vt.tiktok.com/ZShbjpB7R/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-brand-yellow transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                TikTok Shop
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-yellow/30 pt-8 text-center">
          <p className="text-gray-400">Copyright © 2024 Vardhaka Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
