import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Al-Nasr",
    },
    {
      description:
        "Facilitate your Umrah pilgrimage with us, we already have hundreds of thousands of customers, you can go for Umrah to Mecca and Medina",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
