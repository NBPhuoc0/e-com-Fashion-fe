export enum Gender {
  MALE = "Nam",
  FEMALE = "Nữ",
  OTHER = "Khác",
}

export enum DeliveryMethod {
  AT_HOME = "AT_HOME",
  AT_STORE = "AT_STORE",
}

export enum PaymentMethod {
  COD = "COD",
  VNPAY = "VNPAY",
}

export enum ShippingStatus {
  PENDING = "pending",
  DELIVERING = "delivering",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum OrderStatus {
  ALL = "all",
  PENDING = "pending",
  PROCESSING = "processing",
  DELIVERING = "delivering",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  RETURN = "return",
}
