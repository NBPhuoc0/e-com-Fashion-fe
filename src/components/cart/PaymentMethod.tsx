import React from 'react'
import Image from "next/image";

//image
import zaloPay from "../../../public/assets/images/zalopay.webp";
import visa from "../../../public/assets/images/visa-card.webp";
import masterCard from "../../../public/assets/images/master-card.webp";
import vnPay from "../../../public/assets/images/vnpay-qr.webp";
import momo from "../../../public/assets/images/momo.webp";

export default function PaymentMethod() {
  return (

    <div className="py-2 bg-slate-50">
      <div className="p-4">
        <div className="flex justify-center space-x-3 mb-3">
          <Image
            src={zaloPay}
            alt="Picture of zalopay"
            height={28} // Kích thước chiều cao
          />
          <Image
            src={visa}
            alt="Picture of visa"
            height={28} // Kích thước chiều cao
          />
          <Image
            src={masterCard}
            alt="Picture of masterCard"
            height={28} // Kích thước chiều cao
          />
          <Image
            src={vnPay}
            alt="Picture of vnPay"
            height={28} // Kích thước chiều cao
          />
          <Image
            src={momo}
            alt="Picture of momo"
            height={28} // Kích thước chiều cao
          />
        </div>
        <div className="text-xs text-center">
          Đảm bảo thanh toán an toàn và bảo mật
        </div>
      </div>
    </div>
  )
}
