import React from 'react';
import { DollarSign, Home, Wrench, Users } from 'lucide-react';
import { Property, MaintenanceRequest } from '../types';

interface StatsProps {
  properties: Property[];
  maintenanceRequests: MaintenanceRequest[];
}

export function Stats({ properties, maintenanceRequests }: StatsProps) {
  const occupancyRate = (properties.filter(p => p.status === 'occupied').length / properties.length) * 100;
  const totalRent = properties.reduce((sum, prop) => sum + (prop.status === 'occupied' ? prop.rent : 0), 0);
  const pendingMaintenance = maintenanceRequests.filter(r => r.status !== 'completed').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Occupancy Rate</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">{occupancyRate.toFixed(1)}%</p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Revenue</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">${totalRent.toLocaleString()}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
            <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Units</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">{properties.length}</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Maintenance</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">{pendingMaintenance}</p>
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
            <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
}