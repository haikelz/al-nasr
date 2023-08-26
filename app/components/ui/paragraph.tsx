import { HTMLAttributes } from "react";
import { tw } from "~/lib/helpers";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={tw(
        "font-semibold font-nunito text-2xl text-[#454545] leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}
