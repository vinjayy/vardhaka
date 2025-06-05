import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Products from "@/components/products"
import VideoSection from "@/components/video-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <VideoSection />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
