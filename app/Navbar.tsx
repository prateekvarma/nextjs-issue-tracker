"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

export default function Navbar() {
  const currentPath = usePathname();
  console.log("current path: ", currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                currentPath === link.href ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 trasition-colors`}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
