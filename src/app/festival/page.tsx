import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/site/footer";
import { ArrowLeft } from "lucide-react";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function FestivalPage() {
  const bgImage = getPlaceholderImage("heroBackground");
  const posterImage = getPlaceholderImage("festivalPoster");

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center">
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
            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                    Isla Ritual
                  </h1>
                  <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    Festival Migrante de Música Electrónica y Cultura Comunitaria
                  </p>
                </div>
                
                <Image
                  src={posterImage.imageUrl}
                  alt={posterImage.description}
                  data-ai-hint={posterImage.imageHint}
                  width={300}
                  height={424}
                  className="rounded-lg w-auto h-auto mx-auto"
                />

                <div className="prose prose-lg max-w-4xl mx-auto text-foreground text-left">
                  <p>
                    Bienvenidos a la plataforma oficial de Isla Ritual, un festival expandido que conecta tres territorios—Colombia, Polonia y las Islas Canarias—a través de música electrónica, diseño ritual y activación comunitaria.
                  </p>
                  <p>
                    Durante ocho meses, esta constelación cultural se desplegará en espacios físicos y digitales, con eventos mensuales, cápsulas sonoras, intervenciones urbanas y colaboraciones internacionales. Aquí encontrarás el cronograma completo, el manifiesto migrante, acceso a la radio digital y la tienda simbólica Bagshopp.
                  </p>
                  <p>
                    Esta no es una simulación.
                    Los dominios están activos. Las alianzas están en marcha. La comunidad está convocada. Isla Ritual es real, y tú estás dentro.
                  </p>
                </div>
                
                <div className="border border-border rounded-lg p-6 bg-card/50 text-left">
                  <h3 className="font-bold text-lg text-foreground mb-4">🌍 ¿Por qué este festival importa?</h3>
                  <ul className="space-y-2 text-foreground">
                    <li>Porque transforma la migración en pertenencia.</li>
                    <li>Porque convierte la técnica en poesía.</li>
                    <li>Porque activa el turismo, el comercio y la cultura desde lo simbólico.</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-6 bg-card/50 text-left">
                  <h3 className="font-bold text-lg text-foreground mb-4">🔗 Accede a los espacios del festival:</h3>
                  <ul className="space-y-3 text-foreground">
                    <li>
                      <span className="font-semibold">🎧 Radio Isla Ritual</span> – Emisora digital comunitaria
                    </li>
                    <li>
                      <Link href="https://bagshopp.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                        🛒 Bagshopp.com
                      </Link> – Comercio electrónico simbólico
                    </li>
                    <li>
                      <Link href="https://bagshopp.net" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                        🛡️ Bagshopp.net
                      </Link> – Archivo técnico y respaldo internacional
                    </li>
                  </ul>
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
