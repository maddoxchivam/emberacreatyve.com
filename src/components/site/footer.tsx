import Image from "next/image";
import { getPlaceholderImage } from "@/lib/placeholder-images";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoImage = getPlaceholderImage("circularImage");

  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={logoImage.imageUrl}
            alt={logoImage.description}
            data-ai-hint={logoImage.imageHint}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold">Embera Kreatyve®</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
          © {currentYear} Embera Kreatyve. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
