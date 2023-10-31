export type Customer = {
  forename: string;
  surname: string;
  email: string;
  postcode: string;
  contact_number: string;
};

export type Product = {
  vin: string;
  model: string;
  make: string;
  colour: string;
  price: number;
};

export type Type = "customer" | "product";
