import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-2">
              <FileText className="h-8 w-8" />
              Crafting Digital Experiences
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a passionate team dedicated to creating beautiful, functional, and user-friendly digital products. Our philosophy is rooted in clean design, clear communication, and a deep understanding of our users' needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To build elegant and effective solutions that empower our clients and delight their customers. We believe in the power of simplicity and strive to make the complex clear.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a trusted partner in digital innovation, consistently pushing the boundaries of design and technology to create a more connected and intuitive digital world for everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
