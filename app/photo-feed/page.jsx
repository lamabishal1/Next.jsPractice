import wonders from "./wonders.jsx"
import Link from "next/link";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <>
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 text-center">
        New Wonders of the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {wonders.map(({id, src, name}) => (
        <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              src={src}
              alt={name}
              className="rounded-lg shadow-lg mb-4 w-full object-cover aspect-square"
            />
            </Link>
      ))}
      </div>
      </main>
    </>
  );
}