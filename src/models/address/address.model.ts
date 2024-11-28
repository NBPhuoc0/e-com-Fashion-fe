export class Address {
  id: number;
  fullname: string;
  phoneNumber: string;
  address: string;
  defaultAddress: boolean;

  constructor(
    id: number = 0,
    fullname: string = "",
    phoneNumber: string = "",
    address: string = "",
    defaultAddress: boolean = false
  ) {
    this.id = id;
    this.fullname = fullname;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.defaultAddress = defaultAddress;
  }
}

export interface Ward {
  Id: string;
  Name: string;
  Level: string;
}

export interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

export interface Province {
  Id: string;
  Name: string;
  Districts: District[];
}
