import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

export default function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Gallery</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-2">
              <ImageIcon className="h-8 w-8" />
              Moments We've Captured
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A visual journey through our work, inspirations, and the world as we see it.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12">
          {galleryImages.map((image, index) => (
            <div key={image.id} className="w-full h-full" style={{ animation: `fade-in 0.5s ease-in-out ${index * 0.1 + 0.2}s forwards`, opacity: 0 }}>
              <Card className="overflow-hidden group h-full">
                <CardContent className="p-0">
                  <Image
                    alt={image.description}
                    className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
                    height={400}
                    src={image.imageUrl}
                    width={600}
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
