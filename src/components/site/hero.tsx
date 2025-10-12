import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center animate-fade-in">
      <Image
        src="/imagen01.png"
        alt="Imagen de fondo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Static Showcase
          </h1>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Discover a world of clean design and seamless user experience.
            Built for performance, designed for people.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#about">
                <ArrowDown className="mr-2 h-5 w-5" />
                Explore
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
