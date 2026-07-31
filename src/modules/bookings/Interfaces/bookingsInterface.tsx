

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'

export interface BookingInterface {
    id : number,
    name: string,
    phone: string,
    startDate: string,
    endDate: string,
    status: string,
    note: string,
    createDate: string,
}
export type AllBookings = BookingInterface[]

export type BookingInput = Omit<BookingInterface , 'id' | 'createDate'>

export interface BookingStatus {
    bookings : AllBookings;
    bookingsById: BookingInterface | null;
    getAllBoookingsStatus : RequestStatus;
    getAllBookingsError : string | undefined;
    getBookignsByIdStatus : RequestStatus;
    getBookingsByIdError : string | undefined;
    createBookingsStatus : RequestStatus;
    createBookingsError : string | undefined;
    updateBookingsStatus : RequestStatus;
    updateBookingsError : string | undefined;
    deleteBookingsStatus : RequestStatus;
    deleteBookingsError : string | undefined;
}