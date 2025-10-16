'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Footer from '@/components/site/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  productUid: string;
  previewImageUrls: string[];
}

export default function TiendaPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const apiKey = process.env.NEXT_PUBLIC_GELATO_API_KEY;
      if (!apiKey || apiKey === 'tu_clave_api') {
        setError('La clave de la API de Gelato no está configurada. Por favor, añádela al archivo .env.local');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('https://order.gelatoapis.com/v3/products', {
          headers: {
            'X-API-KEY': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }

        const data = await response.json();
        // Gelato API returns products in a 'products' array
        setProducts(data.products);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
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
        <h1 className="text-4xl font-bold font-display mb-8 text-center">Nuestra Tienda</h1>
        
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-40 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-6 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-destructive bg-destructive/10 p-4 rounded-lg">
            <h2 className="font-bold">Error</h2>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={product.previewImageUrls[0] || 'https://picsum.photos/seed/default/400/400'}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-60"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold h-14">{product.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
