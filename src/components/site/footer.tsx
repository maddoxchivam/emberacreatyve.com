import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/imagen02.jpeg"
            alt="Static Showcase Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold">Static Showcase®</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
          © {currentYear} Static Showcase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
