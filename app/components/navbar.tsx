import { Link } from "@remix-run/react";
import { useState } from "react";
import { Button, Image } from "./ui";

const linkList = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "About Us",
    route: "/about-us",
  },
  {
    id: 3,
    name: "Package",
    route: "/packages",
  },
  {
    id: 4,
    name: "Facilities",
    route: "/facilities",
  },
  {
    id: 5,
    name: "Gallery",
    route: "/gallery",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full flex justify-center items-center flex-col p-4">
      <nav className="w-full max-w-7xl flex justify-between items-center">
        <div>
          <Image src="/assets/logo.svg" width={143} height={68} alt="logo" />
        </div>
        <ul className="md:flex space-x-8 hidden">
          {linkList.map((item) => (
            <li key={item.id}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
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
        {isOpen ? (
          <div className="bg-white fixed block md:hidden inset-0 p-4">
            <p>Mantap dan luar biasa</p>
            <button
              type="button"
              aria-label="close nav"
              onClick={() => setIsOpen(false)}
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
          </div>
        ) : null}
        <Button variant="primary" type="button" aria-label="contact us">
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
