export interface Customer {
    id: string;
    name: String;
    tel: String;
    email: String;
    password: String;
    address: {
        city: String,
        street: String,
        state: String,
        zip: String,
        country: String
    }
}