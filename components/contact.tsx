import { Instagram, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-yellow/5 via-white to-brand-red/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Kontak & Lokasi</h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">Hubungi kami untuk informasi lebih lanjut</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-brand-navy mb-2 text-lg">Instagram</h3>
            <a
              href="https://www.instagram.com/vardhaka_solstice?igsh=NmYzMzN0azRlYThn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-navy transition-colors"
            >
              @vardhaka_solstice
            </a>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-brand-navy mb-2 text-lg">WhatsApp</h3>
            <p className="text-gray-600">+62 813 16992546</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <MapPin className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="font-semibold text-brand-navy mb-2 text-lg">Alamat</h3>
            <p className="text-gray-600 text-sm">
              Jl. Merpati Raya No. 44, Sawah Lama, Ciputat, Tangerang Selatan, Banten 15413
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
