export interface Restaurant{
    _id: Object,
    name: String,
    phone: String,
    image_url: String,
    email: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    menu_item: {}
}