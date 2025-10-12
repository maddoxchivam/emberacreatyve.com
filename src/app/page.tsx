import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";
import Welcome from "@/components/site/welcome";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <Hero />
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
