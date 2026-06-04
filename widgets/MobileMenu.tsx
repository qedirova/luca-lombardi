import { NavLink } from "@/types/navbar";
import clsx from "clsx";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

interface MobileMenuProps {
  navLinks: NavLink[];
  menu: boolean;
  onClose: () => void;
}
export function MobileMenu({ navLinks, menu, onClose }: MobileMenuProps) {
  return (
    <div
      onClick={onClose}
      className={clsx(
        "fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300",
        menu ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <aside
        className={clsx(
          "bg-white h-dvh w-[55%] max-w-sm flex flex-col transition-transform duration-300 ease-out fixed left-0 top-0 z-50",
          menu ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="bg-white/70 px-5 py-4 border-b border-black/5">
          <form className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-2xl w-full border border-black/10 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black/20 focus:ring-4 focus:ring-black/5 transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-black/5 p-2 rounded-xl active:scale-[0.8]">
              <IoMdSearch size={22} />
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-between h-full bg-black/5">
          <nav className="flex-1 overflow-y-auto px-3 py-4 ">
            <div className="flex flex-col gap-1 w-full">
              {navLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className="flex items-center justify-between !w-full text-lg font-medium text-gray-900 hover:bg-black/5 transition rounded-2xl p-4"
                >
                  {link.title} <span>→</span>
                </Link>
              ))}
            </div>
          </nav>

          <Link
            href={"/cart"}
            className="border border-black/10 text-gray-900 flex justify-center items-center py-3 px-4 rounded-2xl mx-5 mb-8 hover:bg-black/5 transition gap-2 bg-white"
          >
            <FiShoppingCart size={18} />
            <span>Cart</span>
          </Link>
        </div>
      </aside>
    </div>
  );
}
