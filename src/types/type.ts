export interface Office {
    id: number;
    name: string;
    slug: string;
    image: Image[];
    thumbnail: string;
    price: number
    benefits: Benefit[]
    duration: number
    description: string
    address: string
    city: City
    is_available : number
    is_open : number
}
interface Image {
    id: number;
    image: string;
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
    officeSpace_count: number;
    officeSpace: Office[];
}


export interface BookingDetails {
    id : number;
    name : string;
    started_at : string;
    ended_at : string;
    phone_number : number;
    // phoneNumber : number;
    booking_trx_id : string;
    // bookingTransactionId : string;
    is_paid : number;
    // isPaid : boolean;
    office : Office;
}

