import React from 'react'

export default function ProductColor({ product, selectedColor, setSelectedColor }: {
    product: { colors: { id: number, color: string }[] },
    selectedColor: string,
    setSelectedColor: (color: string) => void
}) {
    return (
        <>
            <div className="py-2">
                <div className="font-medium pb-2">
                    Màu sắc:
                    <span>  {selectedColor}</span>
                </div>
                <div className="flex gap-2">
                    {product.colors.map((item) => (
                        <div
                            key={item.id}
                            className={`${selectedColor === item.color ? 'border border-slate-900 ' : ''} flex items-center justify-center rounded-full bg-[#ca8d3e] h-8 w-8 md:h-10 md:w-10 hover:border hover:border-slate-900 cursor-pointer`}
                            onClick={() => setSelectedColor(item.color)}
                        >
                            <div
                                className={`${selectedColor === item.color ? 'border-2 border-slate-50 h-[30px] w-[30px] md:h-[38px] md:w-[38px]' : ''} rounded-full bg-yellow-200`}
                            >
                            </div>
                            {/* {item.color} */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
