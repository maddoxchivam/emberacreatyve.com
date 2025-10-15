import Image from "next/image";
import { Leaf, Globe, FileText, ShoppingBag, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function Hero() {
  const bgImage = getPlaceholderImage("heroBackground");
  const logoImage = getPlaceholderImage("emberaLogo");
  const posterImage = getPlaceholderImage("festivalPoster");

  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center animate-fade-in">
      <Image
        src={bgImage.imageUrl}
        alt={bgImage.description}
        data-ai-hint={bgImage.imageHint}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src={logoImage.imageUrl}
            alt={logoImage.description}
            data-ai-hint={logoImage.imageHint}
            width={180}
            height={180}
            className="rounded-full"
          />
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
              Embera Kreatyve
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Button asChild size="lg">
              <Link href="https://emberacreatyve.myshopify.com/" target="_blank" rel="noopener noreferrer">
                Ir a la Tienda
              </Link>
            </Button>
            <Link href="/festival">
              <Image
                src={posterImage.imageUrl}
                alt={posterImage.description}
                data-ai-hint={posterImage.imageHint}
                width={75}
                height={106}
                className="rounded-lg object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div id="welcome" className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4 text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  Bienvenido a Embera Kreatyve
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Embera Kreatyve es un estudio de diseño y comunidad ritual que conecta las raíces latinoamericanas con la sensibilidad contemporánea de Europa Central. Nuestro nicho de mercado se sitúa en la intersección entre arte simbólico, diseño web, y comunicación migrante, ofreciendo servicios creativos a emprendedores, marcas independientes, y comunidades que buscan expresar su identidad con profundidad y propósito.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cada proyecto que tocamos es una ceremonia de pertenencia. Aquí, el diseño no solo comunica: ancla, transforma y conecta.
                </p>
              </div>
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-foreground">Nos especializamos en:</h3>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <Leaf className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Diseño gráfico y multimedia</h4>
                      <p className="text-muted-foreground">Con narrativa ritual y técnica precisa.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Globe className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Identidad visual</h4>
                      <p className="text-muted-foreground">Para proyectos culturales, migrantes y comunitarios.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <FileText className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Redacción con alma</h4>
                      <p className="text-muted-foreground">Manifiestos, declaraciones legales y contenido web.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShoppingBag className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">E-commerce simbólico</h4>
                      <p className="text-muted-foreground">Adaptación de tiendas en línea y productos con enfoque simbólico y SEO.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Handshake className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Colaboraciones interculturales</h4>
                      <p className="text-muted-foreground">Entre Colombia, Polonia y más allá.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6 text-center">
              <Button asChild size="lg">
                <Link href="https://emberacreatyve.myshopify.com/" target="_blank" rel="noopener noreferrer">
                  Visita Nuestra Tienda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
