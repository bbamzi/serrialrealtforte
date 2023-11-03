import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
  },
  { name: "Contact", href: "/contact-us" },
  { name: "Gallery", href: "/gallery" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              " nav-link hover:text-green-900 hover:underline hover:transition hover:ease-in-out duration-500",
              { underline: pathname === link.href }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
