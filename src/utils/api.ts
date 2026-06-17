import axios from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://api.example.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const api = {
  // User endpoints
  getUser: (userId: string) => 
    apiClient.get(`/users/${userId}`),
  
  updateUser: (userId: string, data: any) => 
    apiClient.put(`/users/${userId}`, data),
  
  // Discovery endpoints
  getDiscoverUsers: (params: any) => 
    apiClient.get('/users/discover', { params }),
  
  // Friend endpoints
  getFriends: (userId: string) => 
    apiClient.get(`/users/${userId}/friends`),
  
  sendFriendRequest: (userId: string, friendId: string) => 
    apiClient.post(`/users/${userId}/friend-requests`, { friendId }),
  
  acceptFriendRequest: (userId: string, friendId: string) => 
    apiClient.post(`/users/${userId}/friend-requests/${friendId}/accept`),
  
  // Message endpoints
  getMessages: (userId: string, conversationId: string) => 
    apiClient.get(`/users/${userId}/messages/${conversationId}`),
  
  sendMessage: (userId: string, recipientId: string, content: string) => 
    apiClient.post(`/users/${userId}/messages`, { recipientId, content }),
};

export default apiClient;