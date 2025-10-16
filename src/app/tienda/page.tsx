'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Footer from '@/components/site/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

// Este es el Product UID para "Sudadera ecológica unisex" del catálogo de Gelato
const productUids = [
  "apparel_product_gildan_sweatshirt_g180_gsi_s_gco_white" 
];

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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // Simulamos la carga de productos. En un futuro, aquí iría la llamada a la API de Gelato
    // para obtener los detalles de cada productUid
    const fetchedProducts: Product[] = [
        {
            id: 'sudadera-unisex',
            name: 'Sudadera Ecológica Unisex',
            description: 'Confeccionada en algodón orgánico, esta camiseta es suave, resistente y cómoda. Tu nombre, tu símbolo. Tu camiseta, tu ritual.',
            imageUrl: 'https://picsum.photos/seed/sudadera-unisex/400/300', // Placeholder
            imageHint: 'organic sweatshirt'
        },
        {
            id: 'taza',
            name: 'Taza de la Gratitud',
            description: 'Un objeto para iniciar tus mañanas con intención.',
            imageUrl: 'https://picsum.photos/seed/taza-gratitud/400/300',
            imageHint: 'gratitude mug'
        },
        {
            id: 'bolso',
            name: 'Bolso de la Migración Creativa',
            description: 'Para llevar contigo el símbolo de tu viaje.',
            imageUrl: 'https://picsum.photos/seed/bolso-migracion/400/300',
            imageHint: 'creative bag'
        },
        {
            id: 'vela',
            name: 'Vela de la Introspección',
            description: 'Ilumina tus momentos de reflexión y calma.',
            imageUrl: 'https://picsum.photos/seed/vela-introspeccion/400/300',
            imageHint: 'introspection candle'
        },
        {
            id: 'cuaderno',
            name: 'Cuaderno de Rituales',
            description: 'Plasma tus ideas, sueños y rituales diarios.',
            imageUrl: 'https://picsum.photos/seed/cuaderno-rituales/400/300',
            imageHint: 'ritual journal'
        }
    ];

    setProducts(fetchedProducts);
    setIsLoading(false);

  }, []);

  const abrirFormulario = (productName: string) => {
    setSelectedProduct(productName);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // La integración con Firebase se hará cuando la plataforma esté estable.
    toast({
      title: "Ritual Completado ✨",
      description: "Tu pedido ha sido registrado en espíritu. La integración final se completará pronto.",
    });
    setSelectedProduct(null); // Ocultar el formulario después de enviar
  };

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
            <>
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-96 w-full" />
            </>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    data-ai-hint={product.imageHint}
                    className="object-cover w-full h-60"
                  />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl font-bold mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-base mb-4 flex-grow">{product.description}</CardDescription>
                  <Button onClick={() => abrirFormulario(product.name)} className="w-full mt-auto">
                    Quiero este objeto
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {selectedProduct && (
          <div id="formularioPedido" ref={formRef} className="bg-card p-8 rounded-lg shadow-xl border max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">📝 Completa tu ritual de pedido</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-sm font-semibold">Objeto Seleccionado:</Label>
                <p className="font-bold text-lg text-primary mt-1">{selectedProduct}</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input id="nombre" name="nombre" type="text" placeholder="Tu nombre y apellido" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="tu@correo.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">Dirección de envío</Label>
                <Input id="direccion" name="direccion" type="text" placeholder="Calle, número, ciudad, país" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje ritual (opcional)</Label>
                <Textarea id="mensaje" name="mensaje" placeholder="Una intención, un deseo, un agradecimiento..." />
              </div>
              <div className="flex justify-end gap-4">
                 <Button type="button" variant="ghost" onClick={() => setSelectedProduct(null)}>
                    Cancelar
                </Button>
                <Button type="submit">
                  <Send className="mr-2"/>
                  Enviar pedido
                </Button>
              </div>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}