import Footer from "@/components/site/footer";
import Hero from "@/components/site/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <div className="w-full flex justify-center py-8 bg-background">
            <Image
                src="/imagen02.jpeg"
                alt="Imagen superior"
                width={800}
                height={450}
                className="object-cover rounded-lg"
            />
        </div>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
