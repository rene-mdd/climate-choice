export interface Companies {
  city: string;
  contact_persons: Contacts[];
  country: string;
  description: string;
  email: string;
  employee_count: number;
  id: string;
  logo: string;
  name: string;
  phone: string;
  revenue: number;
  slug: string;
  street: string;
  website: string;
  zip_code: string;
}

export interface Api extends Companies {
  config: {};
  data: Companies;
  headers: {};
  request: {};
  status: number;
  statusText: string;
}

export interface Contacts {
    email: string;
    image: string;
    name: string;
    phone: string;
}