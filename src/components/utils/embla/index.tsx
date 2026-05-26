import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type EmblaCarouselProps = {
  images: CarouselImage[];
  className?: string;
  imageClassName?: string;
};

export function EmblaCarousel({
  images,
  className,
  imageClassName,
}: EmblaCarouselProps) {
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);

  useEffect(() => {
    if (!emblaApi || images.length <= 1) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi, images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div className="min-w-0 flex-[0_0_100%] h-full" key={`${image.src}-${index}`}>
              <img
                src={image.src}
                alt={image.alt}
                className={imageClassName ?? "block h-full w-full object-cover"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
