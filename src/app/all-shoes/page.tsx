import Image from "next/image";

export default async function AllShoes() {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const data = await res.json();

  throw new Error("Something went wrong 2");
  return (
    <div>
      <h2 className="text-3xl text-center">All shoes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 my-20">
        {data.slice(0, 3).map((item: any) => (
          <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image width={400} height={400} src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title + " " + item.id}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">{item.price}</button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
