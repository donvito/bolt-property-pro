import React, { useState } from 'react';
import { Building, Moon, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import { Stats } from './components/Stats';
import { PropertyList } from './components/PropertyList';
import { MaintenanceList } from './components/MaintenanceList';
import { Messages } from './components/Messages';
import { PropertyDetails } from './components/PropertyDetails';
import { properties, maintenanceRequests, messages } from './data';
import { Property } from './types';

function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Building className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">Property Manager Pro</h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <Stats properties={properties} maintenanceRequests={maintenanceRequests} />

        {/* Properties Carousel */}
        <PropertyList 
          properties={properties} 
          onPropertySelect={setSelectedProperty}
          selectedProperty={selectedProperty}
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Property Details or Maintenance Requests */}
          <div>
            {selectedProperty ? (
              <PropertyDetails property={selectedProperty} messages={messages} />
            ) : (
              <MaintenanceList requests={maintenanceRequests} />
            )}
          </div>

          {/* Messages */}
          <div>
            <Messages messages={messages} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;