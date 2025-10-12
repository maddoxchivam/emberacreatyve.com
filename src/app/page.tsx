import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
