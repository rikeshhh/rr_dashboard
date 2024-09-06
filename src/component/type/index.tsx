// types.ts (or another appropriate file)
export interface Customer {
  id: number;
  Name: string;
  Contact: string;
  "Address ": string;
  "Quantity ": number;
  Date: string;
  "Price ": string;
  "Status ": string;
  "Payment Method": string;
  "Action ": string;
}
export interface CustomerFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cylinderType: string;
  notes: string;
}

