export interface Office {
    id: number;
    name: string;
    slug: string;
    images: Image[];
    thumbnail: string;
    price: number
    benefits: Benefit[]
    duration: number
    description: string
    city: City
}
interface Image {
    id: number;
    name: string;
}

interface Benefit {
    id: number;
    name: string;
}

export interface City {
    id: number;
    name: string;
    slug: string;
    image: string;
    officeSpace_count : number;
    // officeSpaceCount : number;
    officeSpace : Office[];
}

export interface BookingDetails {
    id : number;
    name : string;
    // phone_number : number;
    phoneNumber : number;
    // booking_trx_id : string;
    bookingTransactionId : string;
    // is_paid : boolean;
    isPaid : boolean;
    office : Office;
}

