import { Container } from "@/components/Container";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { title } from "process";

export function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "Company",
      links: [
        { id: 1, title: "Women", href: "/women-collection" },
        { id: 2, title: "Men", href: "/men-collection" },
        { id: 3, title: "New Arrives", href: "/new-collection" },
        { id: 4, title: "About", href: "/about" },
      ],
    },
    {
      id: 2,
      title: "Feedback",
      links: [
        { id: 1, title: "Contact us", href: "/contact" },
        { id: 2, title: "+1 (773) 303-6006", href: "tel:+17733036006" },
        { id: 3, title: "info@lombardi.com", href: "mailto:info@lombardi.com" },
      ],
    },
    {
      id: 3,
      title: "Legal",
      links: [
        { id: 1, title: "Terms of Service", href: "/terms-of-service" },
        { id: 2, title: "Privacy Policy", href: "/privacy-policy" },
        { id: 3, title: "Privacy Preferences", href: "/privacy-preferences" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-800 text-white py-15 sm:py-30">
      <Container className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-16 text-center lg:text-left  lg:flex-nowrap lg:justify-between">
        <div className="flex flex-col gap-7 items-center text-center">
          <Link href={"/"} className="font-bold text-3xl tracking-wide">
            LUCA LOMBARDI
          </Link>
          <div className="flex gap-4">
            <FaInstagram size={25} />
            <FaTelegram size={25} />
            <FaWhatsapp size={25} />
          </div>
        </div>

        <div className="flex flex-col gap-12 text-center justify-center sm:flex-row sm:flex-wrap md:text-left">
          {footerLinks.map((link) => (
            <div key={link.id}>
              <h3 className="text-2xl font-light mb-8">{link.title}</h3>
              <ul className="flex flex-col gap-3">
                {link.links.map((l) => (
                  <Link href={l.href} key={l.id}>
                    {l.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <h3 className="text-2xl font-light">Subscribe to our newsletter!</h3>
          <p className="max-w-80 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, atque.
          </p>
          <form className="relative">
            <input
              type="text"
              placeholder="Enter email adress"
              className="bg-[#e5e5e5] text-gray-700 p-3 w-full outline-none"
            />
            <button className="bg-black text-white cursor-pointer py-3 px-5 absolute right-0 top-0">
              SUBMIT
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
