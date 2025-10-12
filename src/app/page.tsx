import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Footer from "@/components/site/footer";
import Gallery from "@/components/site/gallery";
import Header from "@/components/site/header";
import Hero from "@/components/site/hero";
import VideoSection from "@/components/site/video-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <VideoSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
