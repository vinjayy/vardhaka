"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, ShoppingBag } from "lucide-react"

const parfumProducts = [
  {
    name: "Nirvana Parfum",
    type: "Eau de Parfum",
    character: "Hangat, maskulin, elegan",
    notes: "Cognac, Cinnamon, Tonka Bean, Vanilla, Praline",
    suitable: "Aktivitas harian hingga acara formal",
    image: "/nirvana.jpg?height=300&width=300",
  },
  {
    name: "Sundari Parfum",
    type: "Eau de Parfum",
    character: "Manis, Segar, Feminin",
    notes: "Raspberry, Peony, Musk, Praline, Solar Notes",
    suitable: "Wanita Aktif, Romantis, dan Percaya Diri",
    image: "/SUNDARI.png?height=300&width=300",
  },
  {
    name: "Chandrika Parfum",
    type: "Eau de Parfum",
    character: "Hangat, maskulin, elegan",
    notes: "Citrus, Litchi, Bergamot, Peach, Peony, Orange Blossom, Jasmine, Petalia, Musk, Moss and Woody Notes",
    suitable: "Aktivitas Harian Hingga Acara Formal",
    image: "/CHANDRIKA.png?height=300&width=300",
  },
  {
    name: "Aurora Parfum",
    type: "Eau de Parfum",
    character: "Fresh, Citrus, Energik",
    notes: "Bergamot, Lemon, White Tea, Musk",
    suitable: "Aktivitas pagi & olahraga",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const bodyMistProducts = [
  {
    name: "Vanilaice Body Mist",
    type: "Body Mist",
    character: "Hangat, Maskulin, Elegan",
    notes: "Pear, Jasmine, Vanilla, Musk",
    suitable: "Aktivitas Harian Hingga Acara Formal",
    image: "/VANILAICE.png?height=300&width=300",
  },
  {
    name: "Anglenova Body Mist",
    type: "Body Mist",
    character: "Manis, Segar, Feminim",
    notes: "Raspberry, Litchi, Damask Rose, Akigalawood and Benzoin",
    suitable: "Wanita Aktif, Romantis, dan Percaya Diri",
    image: "/ANGLENOVA.png?height=300&width=300",
  },
  {
    name: "Roman Body Mist",
    type: "Body Mist",
    character: "Hangat, Maskulin, Elegan",
    notes: "Rose Petal, Musk, dan Solar Notes",
    suitable: "Aktivitas Harian Hingga Acara Formal",
    image: "/ROMAN-1.png?height=300&width=300",
  },
  {
    name: "Citrus Burst Body Mist",
    type: "Body Mist",
    character: "Energik, Segar, Vibrant",
    notes: "Orange, Grapefruit, Mint, Green Apple",
    suitable: "Pagi hari & aktivitas outdoor",
    image: "/placeholder.svg?height=300&width=300",
  },
]

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl overflow-hidden group">
      <CardHeader className="p-0">
        <div className="w-full aspect-square bg-brand-gradient-soft relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 text-center">
          <CardTitle className="font-playfair text-xl text-brand-navy mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm text-brand-red font-medium bg-brand-yellow/20 px-3 py-1 rounded-full inline-block">
            {product.type}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6 space-y-4">
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="font-medium text-brand-navy text-sm">Karakter Aroma:</p>
            <p className="text-gray-600 text-sm">{product.character}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="font-medium text-brand-navy text-sm">Notes:</p>
            <p className="text-gray-600 text-sm">{product.notes}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="font-medium text-brand-navy text-sm">Cocok untuk:</p>
            <p className="text-gray-600 text-sm">{product.suitable}</p>
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium">
              <a href="https://wa.me/6281413215200" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1" />
                WA
              </a>
            </Button>

            <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium">
              <a href="https://id.shp.ee/w71RPk5" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4 mr-1" />
                Shopee
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button asChild size="sm" className="bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium">
              <a href="https://www.tokopedia.com/vardhaka-store" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4 mr-1" />
                Tokped
              </a>
            </Button>

            <Button asChild size="sm" className="bg-black hover:bg-gray-800 text-white rounded-xl font-medium">
              <a href="https://vt.tiktok.com/ZShbjpB7R/" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="w-4 h-4 mr-1" />
                TikTok
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Products() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-brand-yellow/5 relative overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-yellow/8 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-16 w-80 h-80 bg-brand-red/6 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-navy/4 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gradient rounded-2xl mb-6 shadow-xl">
            <span className="text-white font-bold text-2xl">✨</span>
          </div>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Koleksi Eksklusif Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Temukan aroma signature yang mencerminkan kepribadian unik Anda
          </p>
          <div className="w-32 h-1.5 bg-brand-gradient mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="parfum" className="w-full">
<TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-gray-100 p-1 rounded-xl h-[60px] items-center">
            <TabsTrigger
              value="parfum"
              className="text-lg font-medium py-3 px-6 rounded-xl data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm text-gray-600 transition-all duration-300"
            >
              Parfum
            </TabsTrigger>
            <TabsTrigger
              value="bodymist"
              className="text-lg font-medium py-3 px-6 rounded-xl data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm text-gray-600 transition-all duration-300"
            >
              Body Mist
            </TabsTrigger>
          </TabsList>

          <TabsContent value="parfum" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {parfumProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bodymist" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {bodyMistProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-brand-navy/10 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-brand-navy mb-4">Tidak Menemukan Aroma yang Cocok?</h3>
            <p className="text-gray-600 mb-6">
              Hubungi kami untuk konsultasi personal dan rekomendasi produk yang sesuai dengan preferensi Anda
            </p>
            <Button
              asChild
              className="bg-brand-gradient hover:scale-105 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300"
            >
              <a href="https://wa.me/6281413215200" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
