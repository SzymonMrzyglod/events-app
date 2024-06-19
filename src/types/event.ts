export enum EventTypes {
  Sport = 'Sport',
  Culture = 'Culture',
  Health = 'Health',
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  type: EventTypes;
  phone: string;
  email: string;
  location: string;
}
