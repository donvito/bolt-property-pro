export interface MaintenanceRequest {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
  unit: string;
}

export interface Property {
  id: string;
  unit: string;
  tenant: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  rent: number;
  lastPayment: string;
  image: string;
  tenantImage: string;
}

export interface Message {
  id: string;
  tenant: string;
  unit: string;
  message: string;
  date: string;
  unread: boolean;
  tenantImage: string;
}