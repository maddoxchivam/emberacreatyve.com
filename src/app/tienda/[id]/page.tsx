'use client';

import { useState, useRef, useEffect } from 'react';
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
import { Card, CardContent } from '@/components/ui/card';

// Datos de ejemplo, los moveremos a un lugar mejor más adelante
const products = [
    {
        id: 'sudadera-ecologica-unisex',
        name: 'Sudadera Ecológica Unisex',
        description: 'Confeccionada en algodón orgánico, esta camiseta es suave, resistente y cómoda. Tu nombre, tu símbolo. Tu camiseta, tu ritual.',
        imageUrl: 'https://picsum.photos/seed/sudadera-unisex/600/600',
        imageHint: 'organic sweatshirt',
        price: '€55.00'
    },
    {
        id: 'taza-de-la-gratitud',
        name: 'Taza de la Gratitud',
        description: 'Un objeto para iniciar tus mañanas con intención.',
        imageUrl: 'https://picsum.photos/seed/taza-gratitud/600/600',
        imageHint: 'gratitude mug',
        price: '€25.00'
    },
    {
        id: 'bolso-de-la-migracion-creativa',
        name: 'Bolso de la Migración Creativa',
        description: 'Para llevar contigo el símbolo de tu viaje.',
        imageUrl: 'https://picsum.photos/seed/bolso-migracion/600/600',
        imageHint: 'creative bag',
        price: '€35.00'
    },
    {
        id: 'vela-de-la-introspeccion',
        name: 'Vela de la Introspección',
        description: 'Ilumina tus momentos de reflexión y calma.',
        imageUrl: 'https://picsum.photos/seed/vela-introspeccion/600/600',
        imageHint: 'introspection candle',
        price: '€30.00'
    },
    {
        id: 'cuaderno-de-rituales',
        name: 'Cuaderno de Rituales',
        description: 'Plasma tus ideas, sueños y rituales diarios.',
        imageUrl: 'https://picsum.photos/seed/cuaderno-rituales/600/600',
        imageHint: 'ritual journal',
        price: '€28.00'
    }
];


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const product = products.find(p => p.id === params.id);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // La integración con Firebase se hará cuando la plataforma esté estable.
    toast({
      title: "Ritual Completado ✨",
      description: "Tu pedido ha sido registrado en espíritu. La integración final se completará pronto.",
    });
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-dvh bg-background">
        <main className="flex-1 container mx-auto px-4 md:px-6 py-8 text-center">
            <p>Producto no encontrado.</p>
            <Button asChild variant="link" className="mt-4">
                <Link href="/tienda">Volver a la tienda</Link>
            </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="container mx-auto px-4 md:px-6 py-4">
        <Button asChild variant="outline">
          <Link href="/tienda">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la Tienda
          </Link>
        </Button>
      </header>
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={600}
                    data-ai-hint={product.imageHint}
                    className="object-cover w-full rounded-lg shadow-lg"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-bold font-display mb-2">{product.name}</h1>
                <p className="text-2xl text-muted-foreground mb-4">{product.price}</p>
                <p className="text-lg mb-6">{product.description}</p>
                
                <Card className="bg-card p-6 rounded-lg shadow-xl border">
                    <h2 className="text-2xl font-bold text-center mb-4">📝 Completa tu ritual de pedido</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                        <Button type="submit" className="w-full">
                            <Send className="mr-2"/>
                            Finalizar Pedido
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}