export default function VideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-navy/10 via-gray-50 to-brand-yellow/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Pengalaman Vardhaka</h2>
          <p className="text-gray-600 text-lg">
            Lihat bagaimana produk kami memberikan pengalaman wangi yang tak terlupakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls poster="/placeholder.svg?height=600&width=400">
              <source src="/VID-20250319-WA0005.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

                 <div className="aspect-[9/16] max-w-xs mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <video className="w-full h-full object-cover" controls poster="/placeholder.svg?height=600&width=400">
              <source src="/VID-20250421-WA0036.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
