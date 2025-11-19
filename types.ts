
export type Theme = 'light' | 'dark';

export interface Provider {
  id: string; // Firestore document ID
  name: string;
  logoUrl?: string;
  originalId: number; // Keep original numeric ID for sorting/mapping from Excel
}

export interface Voucher {
  id: string; // Firestore document ID
  providerId: string; // Firestore Provider ID
  name: string;
  totalStock: number;
  remainingStock: number;
  costPrice: number;
  sellPrice: number;
  plannedStock: number;
}

export interface ToastMessage {
  id: number;
  type: 'success' | 'error' | 'info';
  message: string;
}

export interface ActivityLog {
  id: string; // Firestore document ID
  timestamp: string;
  type: 'SALE' | 'EDIT' | 'DELETE_VOUCHER' | 'DELETE_PROVIDER' | 'IMPORT' | 'ADD_STOCK';
  message: string;
}