import React from 'react';
import { Property, Message } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Mail, Phone, Calendar, DollarSign, MapPin } from 'lucide-react';

const rentHistory = [
  { month: 'Sep', amount: 1500 },
  { month: 'Oct', amount: 1500 },
  { month: 'Nov', amount: 1500 },
  { month: 'Dec', amount: 1600 },
  { month: 'Jan', amount: 1600 },
  { month: 'Feb', amount: 1600 },
];

interface PropertyDetailsProps {
  property: Property;
  messages: Message[];
}

export function PropertyDetails({ property, messages }: PropertyDetailsProps) {
  const propertyMessages = messages.filter(m => m.unit === property.unit);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="p-6">
        {/* Header with Image */}
        <div className="relative h-48 rounded-lg overflow-hidden mb-6">
          <img
            src={property.image}
            alt={`Unit ${property.unit}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full
              ${property.status === 'occupied' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                property.status === 'vacant' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
              {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Unit Title */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center mb-6">
          <MapPin className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
          Unit {property.unit}
        </h2>

        {/* Main Content Grid */}
        <div className="grid gap-6">
          {/* Info Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tenant Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Current Tenant</h3>
              {property.tenant ? (
                <div className="flex items-center space-x-3">
                  <img
                    src={property.tenantImage}
                    alt={property.tenant}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{property.tenant}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <Mail className="w-4 h-4 inline mr-1" />
                      tenant@example.com
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">No tenant</p>
              )}
            </div>

            {/* Monthly Rent Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <DollarSign className="w-4 h-4 mr-1" />
                Monthly Rent
              </div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                ${property.rent.toLocaleString()}
              </p>
            </div>

            {/* Last Payment Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                Last Payment
              </div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {property.lastPayment || 'N/A'}
              </p>
            </div>
          </div>

          {/* Rent History Chart */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Rent History</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rentHistory} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-600" />
                  <XAxis dataKey="month" className="dark:fill-gray-400" />
                  <YAxis className="dark:fill-gray-400" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgb(31, 41, 55)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      color: 'rgb(243, 244, 246)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Messages */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Recent Messages</h3>
            <div className="space-y-4 max-h-[300px] overflow-y-auto">
              {propertyMessages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <img
                    src={message.tenantImage}
                    alt={message.tenant}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{message.tenant}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{message.date}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}