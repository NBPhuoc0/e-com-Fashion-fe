import { Address } from "@/models/address/address.model";

export default function AddressItem({
  address,
  selectedAddress,
  setSelectedAddress,
}: {
  address: Address;
  selectedAddress: Address;
  setSelectedAddress: (address: Address) => void;
}) {
  return (
    <div className="flex gap-2">
      <input
        id={"radio-address-" + address.id}
        type="radio"
        name="list-radio-address"
        checked={address.id === selectedAddress.id}
        onChange={() => setSelectedAddress(address)}
        className="focus:ring-2 focus:ring-primary focus:border-primary text-primary transition-all duration-200 mt-4 ml-4"
      />
      <label
        htmlFor={"radio-address-" + address.id}
        className="grid gap-1 cursor-pointer w-full py-3 pr-4"
      >
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <h5 className="font-medium">Trinh Hoang Phuc</h5>
            <div className="h-3 w-[2px] bg-gray-400"></div>
            <span className="">09876321</span>
          </div>
          <button className="text-sm text-blue-600">Sửa</button>
        </div>
        <div className="text-gray-500">{address.address}</div>
      </label>
    </div>
  );
}
