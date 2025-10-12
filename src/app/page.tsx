import Footer from "@/components/site/footer";
import Header from "@/components/site/header";
import Hero from "@/components/site/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
