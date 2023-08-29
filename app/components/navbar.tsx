import { useState } from "react";
import { linkList } from "~/lib/utils/data";
import { Button, Image } from "./ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full max-w-7xl flex p-4 justify-between items-center">
        <div>
          <Image src="/assets/logo.svg" width={143} height={68} alt="logo" />
        </div>
        <ul className="md:flex space-x-8 hidden">
          {linkList.map((item) => (
            <li key={item.id}>
              <a
                className="transition-all hover:text-[#FFC265]"
                href={`#${item.route}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {isOpen ? (
          <button
            type="button"
            aria-label="close nav"
            onClick={() => setIsOpen(false)}
            className="block md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            aria-label="open nav"
            onClick={() => setIsOpen(true)}
            className="block md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
        <Button
          className="hidden md:block"
          variant="primary"
          type="button"
          aria-label="contact us"
        >
          Contact Us
        </Button>
      </nav>
      {isOpen ? (
        <div className="bg-white sticky top-24 block md:hidden w-full rounded-md p-4">
          <ul className="space-y-3">
            {linkList.map((item) => (
              <li key={item.id}>
                <a className="font-semibold" href={`#${item.route}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
