export default function MegaMenu({ product }: any) {
  return (
    <div className="absolute top-full left-0 w-full min-h-screen bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
      <div className="grid grid-cols-5 gap-5 px-40 py-5 pb-10 bg-white">
        {product.map((item: any, i: number) => (
          <div key={i} className="space-y-3">
            <h1 className="font-bold text-gray-700">{item.title}</h1>
            <div className="space-y-3">
              {item.items.map((item: any, i: number) => (
                <p key={i} className="text-sm opacity-70 hover:opacity-100">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
