import { ImgHTMLAttributes } from "react";
import { tw } from "~/lib/helpers";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export function Image({ className, src, alt }: ImageProps) {
  return (
    <img
      loading="lazy"
      className={tw("aspect-auto w-full transition-all", className)}
      src={src}
      alt={alt}
    />
  );
}
