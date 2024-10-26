export default function Footer() {
    return (
        <footer className="bg-[#1c2430] w-full py-10">
            <div className="sectionContainer">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    <div>
                        <h2 className='mb-5 text-base font-medium'>Dịch vụ khách hàng</h2>
                        <ul className='text-gray-300 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className='hover:text-white'>Chính sách khách hàng thân thiết</a></li>
                            <li><a href="#" className='hover:text-white'>Chính sách đổi trả</a></li>
                            <li><a href="#" className='hover:text-white'>Chính sách bảo mật</a></li>
                            <li><a href="#" className='hover:text-white'>Chính sách sử dụng Cookies</a></li>
                            <li><a href="#" className='hover:text-white'>Chính sách thanh toán, giao nhận</a></li>
                            <li><a href="#" className='hover:text-white'>Chính sách đơn đồng phục</a></li>
                            <li><a href="#" className='hover:text-white'>Hướng dẫn chọn size</a></li>
                            <li><a href="#" className='hover:text-white'>Đăng ký đối tác</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='mb-5 text-base font-medium'>Về FStore</h2>
                        <ul className='text-gray-300 flex flex-col gap-2 text-sm'>
                            <li><a href="#" className='hover:text-white'>Giới thiệu</a></li>
                            <li><a href="#" className='hover:text-white'>Liên hệ</a></li>
                            <li><a href="#" className='hover:text-white'>Tuyển dụng</a></li>
                            <li><a href="#" className='hover:text-white'>Tin tức</a></li>
                            <li><a href="#" className='hover:text-white'>Hệ thống cửa hàng</a></li>
                            <li><a href="#" className='hover:text-white'>Tin khuyến mãi</a></li>
                        </ul>   
                        <p className='mt-10 text-gray-300 text-md'>Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương</p>
                    </div>
                    
                    <div>
                        <h2 className='mb-5 text-base font-medium'>FStore lắng nghe bạn</h2>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-300 text-sm'>
                                Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                            </p>

                            <ul className='text-gray-300 text-sm flex flex-col gap-2'>
                                <li className='flex items-center gap-4'>
                                    <i className="fa-solid fa-phone-flip"></i>
                                    <div className='flex flex-col'>
                                        <span>Liên hệ đặt hàng: </span>
                                        <a href="tel:02499986999">024 999 86 999</a>
                                    </div>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <i className="fa-regular fa-comment"></i> 
                                    <div className='flex flex-col'>
                                        <span>Góp ý khiếu nại: </span>
                                        <a href="tel:18002086">1800 2086</a>
                                    </div>
                                </li>
                                <li className='flex items-center gap-4'>
                                    <i className="fa-regular fa-envelope"></i> 
                                    <div className='flex flex-col'>
                                        <span>Email:</span> 
                                        <a href="mailto:chamsockhachhang@fstore.vn">chamsockhachhang@fstore.vn</a>
                                    </div>
                                </li>
                            </ul>

                            <div className='text-gray-300 flex items-center mt-2 text-3xl gap-4'>
                                <a href="#" className='hover:text-white text-white'>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="#" className='hover:text-white'>
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="#" className='hover:text-white'>
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="#" className='hover:text-white'>
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='divider w-full h-[1px] bg-white my-10'></div>
        
            <div className='sectionContainer flex flex-col'>
                <span className='text-white text-sm font-bold mb-3'>@ CÔNG TY CỔ PHẦN THỜI TRANG YODY</span>
                <span className='text-xs text-white max-w-96 leading-5'>
                    Mã số doanh nghiệp: 0801206940. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hải Dương cấp lần đầu ngày 04/03/2017
                </span>
            </div>
        </footer>
    )
}
