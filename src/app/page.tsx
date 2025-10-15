import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-8 flex justify-center bg-background">
            <Image 
                src="/imagen002.jpeg"
                alt="Imagen superior de la página"
                width={1200}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="abstract banner"
            />
        </section>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
