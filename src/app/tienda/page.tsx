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
        description: "This Eternal Legacy Hoodie features a unique barcode emblem, symbolizing the digital signature of our modern identities. Crafted for comfort and style, it's a statement piece that merges contemporary art with everyday wear.",
        imageUrls: [
          'https://emberacreatyve.myshopify.com/cdn/shop/files/530119bc-d5c6-499c-980b-6af419a9ae16.webp?v=1760664060&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/1ed1d1e6-9012-4919-9623-c58f353cb35a.webp?v=1760664061&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/bd10aac7-207a-4b28-8603-55a04bca53ee.webp?v=1760664060&width=832'
        ],
        imageHint: 'barcode hoodie',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/eternal-legacy-hoodie-with-barcode-symbol-unisex-comfortable-wear?variant=55876159373692'
      },
      {
        id: 'blue-angel-wing-hoodie',
        name: 'Blue Angel Wing Hoodie for Girls',
        description: 'This Blue Angel Wing Hoodie for girls offers a comfortable, unisex style perfect for everyday wear. The unique design features angel wings on the back, adding a touch of celestial charm to your wardrobe. Made from high-quality materials, it provides both warmth and durability.',
        imageUrls: [
          'https://emberacreatyve.myshopify.com/cdn/shop/files/67467e23-3874-4e7f-a5ff-51f81ac69754.webp?v=1760667603&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/08749be1-91f4-4563-8506-3b05f3de5001.webp?v=1760667602&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/e03127d4-346c-4368-af16-f1241d5b51a0.webp?v=1760667601&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/b955b85d-b3bd-424e-a55d-5f0ef2a54f3a.webp?v=1760667601&width=832'
        ],
        imageHint: 'angel wing hoodie',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/blue-angel-wing-hoodie-for-girls-comfortable-unisex-style?variant=55876190339452'
      },
      {
        id: 'angel-wings-unisex-hoodie',
        name: 'Angel Wings Unisex Hoodie',
        description: 'Premium print design in assorted colors. Express your celestial style with this comfortable and unique hoodie.',
        imageUrls: [
          'https://emberacreatyve.myshopify.com/cdn/shop/files/096e59f9-1118-4385-86d5-842aab2c8f65.webp?v=1760734901&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/0eb77948-725b-4f3c-a892-ba8a1f513b0c.webp?v=1760734900&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/48915403-8218-4587-9174-c0952e49687e.webp?v=1760734898&width=832',
          'https://emberacreatyve.myshopify.com/cdn/shop/files/861c24ab-8bd2-42d4-99d1-653800bd4524.webp?v=1760734901&width=832'
        ],
        imageHint: 'angel wings hoodie',
        shopifyUrl: 'https://emberacreatyve.myshopify.com/products/angel-wings-unisex-hoodie-premium-print-design-in-assorted-colors?variant=55880407384444'
      }
    ];

    // Simulate a short delay for loading
    setTimeout(() => {
      setProducts(fetchedProducts);
      setIsLoading(false);
    }, 500);
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
            Array.from({ length: products.length || 3 }).map((_, index) => (
              <Skeleton key={index} className="h-[550px] w-full max-w-sm" />
            ))
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
