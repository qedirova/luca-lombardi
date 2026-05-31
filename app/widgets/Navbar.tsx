import { Container } from "../components/Container";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { LuUser } from "react-icons/lu";

export function Navbar() {
  const navLinks = [
    {
      id: 1,
      title: "Women",
      href: "/women-collection",
    },
    {
      id: 2,
      title: "Men",
      href: "/men-collection",
    },
    {
      id: 3,
      title: "Sunglasses",
      href: "/sunglasses-collection",
    },
    {
      id: 4,
      title: "New Collection",
      href: "/new-collection",
    },
  ];

  return (
    <nav className="text-gray-600 shadow-sm ">
      <Container className="flex justify-between items-center p-5">
        <Link href={"/"} className="text-xl font-bold tracking-wide">
          LUCA LOMBARDI
        </Link>
        <div className="flex items-center gap-6 md:gap-12">
          <form className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-black/10 rounded-2xl w-full bg-white/85 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black/20 focus:ring-4 focus:ring-black/5 transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <IoMdSearch size={22} />
            </button>
          </form>
          <Link
            href={"/login"}
            className="flex items-center gap-2 text-sm transition hover:opacity-50"
          >
            <LuUser size={25} /> <span className="hidden md:block">Login</span>
          </Link>
          <button className="md:hidden">
            <BiMenuAltLeft size={28} />
          </button>
        </div>
      </Container>

      <Container className="hidden md:flex justify-between items-center py-6 border-t border-gray-300">
        <div className="flex gap-8 sm:gap-12 items-center text-sm sm:text-md font-medium">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        <button className="text-white bg-black px-9 py-3 text-sm cursor-pointer rounded-lg font-normal">
          Contact Us!
        </button>
      </Container>
    </nav>
  );
}
