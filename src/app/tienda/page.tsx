'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Footer from '@/components/site/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
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
        imageUrl: 'https://picsum.photos/seed/sudadera-unisex/600/600',
        imageHint: 'organic sweatshirt'
      },
      {
        id: 'taza-de-la-gratitud',
        name: 'Taza de la Gratitud',
        description: 'Un objeto para iniciar tus mañanas con intención.',
        imageUrl: 'https://picsum.photos/seed/taza-gratitud/600/600',
        imageHint: 'gratitude mug'
      },
      {
        id: 'bolso-de-la-migracion-creativa',
        name: 'Bolso de la Migración Creativa',
        description: 'Para llevar contigo el símbolo de tu viaje.',
        imageUrl: 'https://picsum.photos/seed/bolso-migracion/600/600',
        imageHint: 'creative bag'
      },
      {
        id: 'vela-de-la-introspeccion',
        name: 'Vela de la Introspección',
        description: 'Ilumina tus momentos de reflexión y calma.',
        imageUrl: 'https://picsum.photos/seed/vela-introspeccion/600/600',
        imageHint: 'introspection candle'
      },
      {
        id: 'cuaderno-de-rituales',
        name: 'Cuaderno de Rituales',
        description: 'Plasma tus ideas, sueños y rituales diarios.',
        imageUrl: 'https://picsum.photos/seed/cuaderno-rituales/600/600',
        imageHint: 'ritual journal'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-96 w-full" />
            ))
          ) : (
            products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                    data-ai-hint={product.imageHint}
                    className="object-cover w-full h-72"
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base mb-4 flex-grow">{product.description}</CardDescription>
                  <Button asChild className="w-full mt-auto">
                    <Link href={`/tienda/${product.id}`}>
                      Quiero este objeto
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