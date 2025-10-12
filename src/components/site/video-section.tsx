import { Video } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="w-full py-12 md:py-24 lg:py-32 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Story</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-center gap-2">
              <Video className="h-8 w-8" />
              Watch Us in Action
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A short film about our process, our team, and our passion for creating amazing things.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
