import Image from "next/image";
import { Leaf, Globe, FileText, ShoppingBag, Handshake } from "lucide-react";

export default function Hero() {

  return (
    <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center animate-fade-in">
      <Image
        src="/imagen01.png"
        alt="Imagen de fondo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src="/imagen02.jpeg"
            alt="embera kreatyve Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
            embera kreatyve
          </h1>
          <div id="welcome" className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
             <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4 text-left">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Nos especializamos en:</h3>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <Leaf className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Diseño gráfico y multimedia</h4>
                      <p className="text-muted-foreground">Con narrativa ritual y técnica precisa.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Globe className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Identidad visual</h4>
                      <p className="text-muted-foreground">Para proyectos culturales, migrantes y comunitarios.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <FileText className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Redacción con alma</h4>
                      <p className="text-muted-foreground">Manifiestos, declaraciones legales y contenido web.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShoppingBag className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">E-commerce simbólico</h4>
                      <p className="text-muted-foreground">Adaptación de tiendas en línea y productos con enfoque simbólico y SEO.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Handshake className="mt-1 h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Colaboraciones interculturales</h4>
                      <p className="text-muted-foreground">Entre Colombia, Polonia y más allá.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
