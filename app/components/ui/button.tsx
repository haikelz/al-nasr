import { ButtonHTMLAttributes } from "react";
import { tw } from "~/lib/helpers";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "outline";
};

export function Button({ children, className, variant }: ButtonProps) {
  return (
    <button
      className={tw(
        "transition-all font-nunito font-bold text-[#3F3F3F] rounded-md px-6 py-3",
        variant === "primary"
          ? "bg-[#FFC265]"
          : "bg-none border-2 border-[#FFC265]",
        className
      )}
    >
      {children}
    </button>
  );
}
