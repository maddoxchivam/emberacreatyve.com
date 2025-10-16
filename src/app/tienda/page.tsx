'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Footer from '@/components/site/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrls: string[];
  imageHint: string;
  shopifyUrl: string;
}

export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedProducts: Product[] = [
      {
        id: 'sudadera-ecologica-unisex',
        name: 'Sudadera Ecológica Unisex',
        description: 'Confeccionada en algodón orgánico, esta camiseta es suave, resistente y cómoda. Tu nombre, tu símbolo. Tu camiseta, tu ritual.',
        imageUrls: [
          '/imagen100.webp',
          'https://picsum.photos/seed/sudadera-2/600/600',
          'https://picsum.photos/seed/sudadera-3/600/600'
        ],
        imageHint: 'organic sweatshirt',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/unisex-eco-sweatshirt?variant=55859785105788'
      }
    ];

    setProducts(fetchedProducts);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="container mx-auto px-4 md:px-6 py-4">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Link>
        </Button>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-display mb-2">🧿 Elige tu objeto ritual</h1>
          <p className="text-lg text-muted-foreground">Cada objeto es un ancla, un símbolo para tu práctica diaria.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center">
          {isLoading ? (
            Array.from({ length: 1 }).map((_, index) => (
              <Skeleton key={index} className="h-[450px] w-full" />
            ))
          ) : (
            products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="p-0 relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {product.imageUrls.map((url, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={url}
                            alt={`${product.name} - imagen ${index + 1}`}
                            width={600}
                            height={600}
                            data-ai-hint={product.imageHint}
                            className="object-cover w-full h-72"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base mb-4 flex-grow">{product.description}</CardDescription>
                  <Button asChild className="w-full mt-auto">
                    <Link href={product.shopifyUrl} target="_blank" rel="noopener noreferrer">
                      Ver en la tienda
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
