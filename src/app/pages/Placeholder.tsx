import { useLocation } from 'react-router-dom';

export function Placeholder() {
  const location = useLocation();
  
  // Extract a readable title from the path
  const getPageTitle = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length === 0) return 'Page';
    
    const lastPart = pathParts[pathParts.length - 1];
    return lastPart
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="border-b-2 border-[#003366] pb-3 mb-8">
        <h1>{getPageTitle()}</h1>
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded p-8">
        <p className="text-gray-600 text-center">
          This section will be updated soon.
        </p>
      </div>
    </div>
  );
}
