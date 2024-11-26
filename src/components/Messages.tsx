import React from 'react';
import { Message } from '../types';

interface MessagesProps {
  messages: Message[];
}

export function Messages({ messages }: MessagesProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Messages</h2>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {messages.map((message) => (
          <div key={message.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <img
                  src={message.tenantImage}
                  alt={message.tenant}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {message.tenant} <span className="text-gray-500 dark:text-gray-400">• Unit {message.unit}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{message.date}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{message.message}</p>
              </div>
              {message.unread && (
                <div className="flex-shrink-0">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}