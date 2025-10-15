import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/site/footer";
import { ArrowLeft } from "lucide-react";

export default function FestivalPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center">
          <Image
            src="/imagen01.png"
            alt="Imagen de fondo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="relative z-10 container px-4 md:px-6">
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                    Festival Ancestral
                  </h1>
                  <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    Bienvenido al espacio donde las raíces y el ritual se encuentran. Aquí puedes detallar toda la información de tu festival: fechas, ubicación, artistas, talleres y la misión que lo impulsa.
                  </p>
                </div>
                
                <Image
                  src="/imagen10.jpeg"
                  alt="Poster del festival"
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full max-w-2xl mx-auto aspect-video"
                />

                <div className="prose prose-lg max-w-4xl mx-auto text-foreground text-left">
                  <h2>Sobre el Festival</h2>
                  <p>
                    Este es un buen lugar para describir la esencia de tu evento. Habla sobre la experiencia que ofreces, la comunidad que se reúne y el propósito detrás de cada actividad. Conecta con tu audiencia a un nivel más profundo.
                  </p>
                  
                  <h2>Programa y Actividades</h2>
                  <p>
                    Detalla el cronograma del festival. Puedes usar una lista para organizar los eventos por día y hora:
                  </p>
                  <ul>
                    <li><strong>Día 1:</strong> Ceremonia de Apertura, Concierto Acústico, Taller de Arte Ritual.</li>
                    <li><strong>Día 2:</strong> Meditación Guiada, Charla sobre Sabiduría Ancestral, Mercado de Artesanías.</li>
                    <li><strong>Día 3:</strong> Círculo de Canto, Danza Comunitaria, Ceremonia de Cierre.</li>
                  </ul>

                  <h2>Artistas y Facilitadores</h2>
                  <p>
                    Presenta a las personas que harán de este festival una experiencia inolvidable. Incluye una breve biografía y su contribución al evento.
                  </p>
                </div>

                <div className="text-center pt-8">
                  <Button asChild size="lg">
                    <Link href="/">
                      <ArrowLeft className="mr-2" />
                      Volver al Inicio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
