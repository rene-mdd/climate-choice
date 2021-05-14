
export interface Companies {
    city: string
    contact_persons: Object[]
    country: string
    description: string
    email: string
    employee_count: number
    id: string
    logo: string
    name: string
    phone: string
    revenue: number
    slug: string
    street: string
    website: string
    zip_code: string
}

export interface Api {
    config: {}
    data: Object[]
    headers: {}
    request: {}
    status: number
    statusText: string
}