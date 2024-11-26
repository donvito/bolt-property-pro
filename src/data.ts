import { MaintenanceRequest, Property, Message } from './types';

export const properties: Property[] = [
  { 
    id: '1', 
    unit: 'A101', 
    tenant: 'John Smith', 
    status: 'occupied', 
    rent: 1500, 
    lastPayment: '2024-03-01',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&h=300',
    tenantImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100'
  },
  { 
    id: '2', 
    unit: 'B202', 
    tenant: 'Sarah Johnson', 
    status: 'occupied', 
    rent: 1800, 
    lastPayment: '2024-03-05',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=400&h=300',
    tenantImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100'
  },
  { 
    id: '3', 
    unit: 'C303', 
    tenant: '', 
    status: 'vacant', 
    rent: 1600, 
    lastPayment: '',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&h=300',
    tenantImage: ''
  },
  { 
    id: '4', 
    unit: 'D404', 
    tenant: 'Michael Brown', 
    status: 'maintenance', 
    rent: 1700, 
    lastPayment: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&h=300',
    tenantImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100'
  },
  { 
    id: '5', 
    unit: 'E505', 
    tenant: 'Emma Davis', 
    status: 'occupied', 
    rent: 2000, 
    lastPayment: '2024-03-03',
    image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=400&h=300',
    tenantImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100'
  },
];

export const maintenanceRequests: MaintenanceRequest[] = [
  { id: '1', title: 'Leaking Faucet', priority: 'medium', status: 'pending', date: '2024-03-10', unit: 'A101' },
  { id: '2', title: 'AC Not Working', priority: 'high', status: 'in-progress', date: '2024-03-09', unit: 'D404' },
  { id: '3', title: 'Broken Light', priority: 'low', status: 'completed', date: '2024-03-08', unit: 'B202' },
];

export const messages: Message[] = [
  { 
    id: '1', 
    tenant: 'John Smith', 
    unit: 'A101', 
    message: 'When will the maintenance team fix the faucet?', 
    date: '2024-03-10', 
    unread: true,
    tenantImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100'
  },
  { 
    id: '2', 
    tenant: 'Sarah Johnson', 
    unit: 'B202', 
    message: 'Rent payment confirmation', 
    date: '2024-03-05', 
    unread: false,
    tenantImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100'
  },
  { 
    id: '3', 
    tenant: 'Emma Davis', 
    unit: 'E505', 
    message: 'Request for parking permit', 
    date: '2024-03-09', 
    unread: true,
    tenantImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100'
  },
];