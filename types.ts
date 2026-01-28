
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Breakfast' | 'Coffee' | 'Lunch' | 'Pastries';
  image?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SpecialItem {
  name: string;
  description: string;
  imageUrl: string;
}
