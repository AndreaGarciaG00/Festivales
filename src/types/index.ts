export interface Workshop {
  id: number;
  title: string;
  category: string;
  instructor: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  availableSpots: number;
  image: string;
  description: string;
  longDescription?: string;
  requirements?: string[];
  included?: string[];
}

export interface Event {
  id: number;
  title: string;
  category: string;
  day: string;
  time: string;
  location: string;
  description: string;
}

export interface POI {
  id: number;
  name: string;
  category: 'murals' | 'events' | 'workshops' | 'installations';
  artist?: string;
  instructor?: string;
  time?: string;
  date?: string;
  coordinates: { x: number; y: number };
  description: string;
}