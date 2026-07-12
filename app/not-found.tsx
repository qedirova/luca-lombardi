import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page was not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col  items-center gap-8 mt-40 mb-50">
      <h1 className="text-8xl font-bold text-slate-800 border-b pb-2.5 ">
        404
      </h1>
      <h3 className="uppercase text-2xl font-medium tracking-[2px]">
        Page not found
      </h3>
      <Link
        href={"/"}
        className="bg-black text-white py-3 px-8 cursor-pointer font-medium rounded-2xl"
      >
        Go Home
      </Link>
    </div>
  );
}
