export type   RequestEventStatus = "idle" | "pending" | "fulfilled" | "rejected";

export type Category = 'sports' | 'festive' | 'religious' | 'other';

export type AllEventsInterface = EventInterface[];

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  image: string | null;
  creationDate: string;
  eventDate: string;
  category: Category;
}

export type EventInput = Omit<EventInterface, 'id' | 'creationDate'>;

export type EventFormInput = Omit<EventInterface, 'id' | 'creationDate' | 'image'> & { image: File | null };


export interface EventStatus {
  getEventsStatus: RequestEventStatus;
  getEventError: string | null;
  getEventByIdStatus: RequestEventStatus;
  getEventByIdError: string | null;
  createEventStatus: RequestEventStatus;
  createEventError: string | null;
  updateEventStatus: RequestEventStatus;
  updateEventError: string | null;
  deleteEventStatus: RequestEventStatus;
  deleteEventError: string | null;
}