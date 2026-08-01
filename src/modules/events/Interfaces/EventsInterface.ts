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
  events: AllEventsInterface;
  eventById: EventInterface | null;
  getEventsStatus: RequestEventStatus;
  getEventError: string | undefined;
  getEventByIdStatus: RequestEventStatus;
  getEventByIdError: string | undefined;
  createEventStatus: RequestEventStatus;
  createEventError: string | undefined;
  updateEventStatus: RequestEventStatus;
  updateEventError: string | undefined;
  deleteEventStatus: RequestEventStatus;
  deleteEventError: string | undefined;
}