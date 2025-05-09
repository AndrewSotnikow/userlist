export interface Geo {
    lat: string
    lng: string
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface User {
    id: string
    name: string
    username: string
    email: string
    address: Address | null
    phone: string
    website: string
    company: Company | null
}
