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
          'https://emberacreatyve.myshopify.com/cdn/shop/files/cotton-heritage-m2580-i-unisex-premium-pullover-hoodie-white-front-68eb4f0d9f446.jpg?v=1760251683&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/unisex-eco-sweatshirt-white-front-68eb4ce3c5748.jpg?v=1760251117&width=3840',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/cotton-heritage-m2580-i-unisex-premium-pullover-hoodie-white-back-68eb4f0d9e158.jpg?v=1760251682&width=832'
        ],
        imageHint: 'organic sweatshirt',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/unisex-eco-sweatshirt?variant=55859785105788'
      },
      {
        id: 'sudadera-precolombino',
        name: 'Sudadera con Capucha Precolombino',
        description: 'Sumérgete en la riqueza de la historia con nuestra Sudadera con Capucha Precolombino Heavy Blend. Un diseño que rinde homenaje a las culturas ancestrales.',
        imageUrls: [
          'https://emberacreatyve.myshopify.com/cdn/shop/files/e5568e99-6685-465e-a758-0d3a007ffc77.webp?v=1760644516&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/955b4e05-b22b-4c2d-b780-326b73d03c8f.webp?v=1760644515&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/f67aad9c-9857-4395-acdf-68e2e6889ea2.webp?v=1760644516&width=832'
        ],
        imageHint: 'pre-columbian hoodie',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/precolombino-design-heavy-blend-hoodie-unique-cultural-artistry?variant=55875846963580'
      },
      {
        id: 'eternal-legacy-hoodie',
        name: 'Eternal Legacy Hoodie with Barcode Symbol',
        description: 'This Eternal Legacy Hoodie features a unique barcode emblem, symbolizing the digital signature of our modern identities. Crafted for comfort and style, it\'s a statement piece that merges contemporary art with everyday wear.',
        imageUrls: [
          'https://emberacreatyve.myshopify.com/cdn/shop/files/4b14d339-38f3-4c07-8b5a-7182d33d98be.webp?v=1760647895&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/7438e788-5188-4674-a745-42df22c6c19f.webp?v=1760647895&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/6f8f5b40-84c3-4d61-b461-1ffc338421d0.webp?v=1760647895&width=832'
        ],
        imageHint: 'barcode hoodie',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/eternal-legacy-hoodie-with-barcode-symbol-unisex-comfortable-wear?variant=55876159373692'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {isLoading ? (
            <>
              <Skeleton className="h-[550px] w-full max-w-sm" />
              <Skeleton className="h-[550px] w-full max-w-sm" />
              <Skeleton className="h-[550px] w-full max-w-sm" />
            </>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col max-w-sm">
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
                            className="object-cover w-full h-80"
                            unoptimized={true}
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
                  <Button asChild className="w-full mt-auto" size="lg">
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
