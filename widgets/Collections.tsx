import Link from "next/link";

export function Collections() {
  const collections = [
    {
      id: 1,
      title: "Men's collection",
      image: "/men.jpg",
      href: "/men-collection",
    },
    {
      id: 2,
      title: "Women's collection",
      image: "/women.jpg",
      href: "/women-collection",
    },
    {
      id: 3,
      title: "Kids collection",
      image: "https://cdn-cloudflare.emporium.az/kids/triple-banner-2.jpg",
      href: "/kids-collection",
    },
    {
      id: 4,
      title: "Sunglasses collection",
      image: "/sunglasses.jpg",
      href: "/sunglasses-collection",
    },
    {
      id: 5,
      title: "Bag collection",
      image:
        "https://images.pexels.com/photos/34091949/pexels-photo-34091949.jpeg",
      href: "/bag-collection",
    },
    {
      id: 6,
      title: "New collection",
      image: "/new.jpg",
      href: "/new-collection",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-20 mx-4 lg:mx-12 gap-4">
      {collections.map((collection) => (
        <div key={collection.id} className="h-100 sm:h-175 relative">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-12  left-1/2 -translate-x-1/2 text-white flex flex-col items-center text-center gap-1 w-full">
            <h1 className="font-semibold text-2xl sm:text-4xl">
              {collection.title}
            </h1>
            <Link
              href={collection.href}
              className="border border-white text-white w-max py-2 px-8 sm:px-20 sm:py-3 mt-10 font-semibold text-lg sm:text-xl cursor-pointer xl:hover:bg-white xl:hover:text-gray-600 transition-all duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
