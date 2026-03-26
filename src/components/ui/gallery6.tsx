"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  images?: string[];
}

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-6 flex flex-col justify-between md:mb-10 md:flex-row md:items-end lg:mb-12">
          <div>
            <h2 className="text-sm tracking-[0.3em] uppercase text-black/40">
              {heading}
            </h2>
          </div>
          <div className="mt-6 md:mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-[85%] md:basis-auto md:max-w-[452px]">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-lg md:rounded-xl border border-black/10">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          {item.images ? (
                            <RotatingImage
                              images={item.images}
                              alt={item.title}
                            />
                          ) : (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-1 line-clamp-3 break-words pt-3 text-base font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl tracking-tight">
                    {item.title}
                  </div>
                  <div className="mb-4 line-clamp-2 text-xs text-black/50 md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-xs md:text-sm tracking-widest uppercase">
                    Visit site{" "}
                    <ArrowRight className="ml-2 size-4 md:size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

function RotatingImage({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export { Gallery6 };
