import { HTMLAttributes } from "react";
import { tw } from "~/lib/helpers";

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={tw("text-[#4A4A4A] text-[54px] font-kufam", className)}>
      {children}
    </h1>
  );
}
