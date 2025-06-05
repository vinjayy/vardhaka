export default function About() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-brand-red/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-brand-navy mb-6">Tentang Vardhaka</h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6 text-lg">
            Kami adalah brand lokal yang menghadirkan produk parfum dan body mist dengan kualitas premium, dirancang
            untuk menyempurnakan kepercayaan diri dan gaya hidup modern. Terinspirasi dari aroma-aroma eksotis dunia dan
            dikembangkan oleh perfumer lokal berpengalaman, kami percaya bahwa setiap orang berhak memiliki wangi khas
            yang mencerminkan kepribadian mereka.
          </p>

          <p className="mb-6 text-lg">
            Kami menggunakan bahan berkualitas tinggi, kemasan elegan, serta formula yang tahan lama namun tetap ringan
            di kulit.
          </p>

          <div className="bg-brand-gradient-soft p-8 rounded-2xl text-center">
            <p className="font-medium text-brand-navy text-lg">
              Didirikan oleh Bpk. Taufik Hidayat pada 21 April 2024, Vardhaka berkomitmen menjadi pilihan utama parfum
              lokal di Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
