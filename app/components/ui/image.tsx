import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { tw } from "~/lib/helpers";

type ImageProps = LazyLoadImageProps;

export function Image({ className, src, alt }: ImageProps) {
  return (
    <LazyLoadImage
      className={tw("aspect-auto w-full transition-all", className)}
      src={src}
      alt={alt}
    />
  );
}
