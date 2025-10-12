import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/imagen02.jpeg"
            alt="embera kreatyve Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-bold">embera kreatyve®</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
          © {currentYear} embera kreatyve. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
