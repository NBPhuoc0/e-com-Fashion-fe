import Link from "next/link";

export default function Header() {
    return <>
        <header className="w-full mb-5 sticky top-0 left-0 right-0 border-b border-gray-100 bg-white z-30">
            <nav className="sectionContainer header__nav flex justify-between items-center py-3">
                <div className="header__nav--item left flex items-center gap-10">
                    <a href="/">
                        <span className="text-[#2a2a86] font-bold text-3xl">F</span>
                        <span className="text-[#fcaf17] font-bold text-3xl">Store</span>
                    </a>

                    <ul className="flex items-center gap-5 text-base leading-[21px]">
                        <li className="">
                            <a href="#">SALE</a>
                        </li>
                        <li className="">
                            <a href="#">Mới về</a>
                        </li>
                        <li className="">
                            <a href="#">Bán chạy</a>
                        </li>
                        <li className="">
                            <a href="#">Nam</a>
                        </li>
                        <li className="">
                            <a href="#">Nữ</a>
                        </li>
                        <li className="">
                            <a href="#">Trẻ em</a>
                        </li>
                        <li className="">
                            <a href="#">Bộ sưu tập</a>
                        </li>
                        <li className="">
                            <a href="#">Đồng phục</a>
                        </li>
                        <li className="">
                            <a href="#">Tin hot</a>
                        </li>
                    </ul>
                </div>

                <div className="header__nav--item right flex items-center gap-5">
                    <div className="search-box flex items-center p-0 px-5 border border-gray-300 rounded-full bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input type="text" className="border-none outline-none focus:ring-0 bg-gray-100" placeholder="search" />
                    </div>

                    <Link href="/cart" className="cart hover:text-[#fcaf17] transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </Link>
                    
                    <a href="/auth/signin" className="auth border-gray-300 border p-1 px-5 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 rounded-full">
                        Đăng nhập
                    </a>
                </div>
            </nav>
        </header>
    </>
}