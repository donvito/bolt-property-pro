import React from 'react';
import { MaintenanceRequest } from '../types';
import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

interface MaintenanceListProps {
  requests: MaintenanceRequest[];
}

export function MaintenanceList({ requests }: MaintenanceListProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Maintenance Requests</h2>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {requests.map((request) => (
          <div key={request.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getStatusIcon(request.status)}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{request.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Unit {request.unit} • {request.date}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full
                ${request.priority === 'high' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 
                  request.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : 
                  'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'}`}>
                {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}