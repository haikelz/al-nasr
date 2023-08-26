import { tw } from "~/lib/helpers";
import { ChildrenProps } from "~/types";

type LayoutProps = ChildrenProps & { className?: string };

export function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={tw(
        "w-full flex justify-center items-center flex-col",
        className
      )}
    >
      <section className="w-full p-4 max-w-7xl flex justify-between items-center">
        {children}
      </section>
    </div>
  );
}
