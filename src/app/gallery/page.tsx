import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-5xl">GAllery page</h1>
      <div className="my-10">
        <h2 className="text-center text-2xl">Regular image</h2>
        <img className="mx-auto" src="https://nextjs.org/api/docs-og?title=Components20%3Cimage%3E" alt="" />
        <h2 className="text-center text-2xl mt-5"> Next image</h2>
        <Image src="https://nextjs.org/api/docs-og?title=Components20%3Cimage%3E" width={500} height={500} alt="" className="mx-auto" />
      </div>
    </div>
  );
}
