export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  avatar?: string;
  createdAt: Date;
}

export interface Friend extends User {
  connectedAt: Date;
  status: 'pending' | 'accepted' | 'blocked';
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  type: 'friend_request' | 'message' | 'like';
  userId: string;
  message: string;
  read: boolean;
  createdAt: Date;
}