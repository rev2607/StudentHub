import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  
  // Generate breadcrumb items from the current path
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
      { name: 'Home', path: '/', icon: Home }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable format
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Special cases for specific routes
      let displayName = name;
      if (segment === 'mock-tests') displayName = 'Mock Tests';
      else if (segment === 'training-institutes') displayName = 'Training Institutes';
      else if (segment === 'iit-roorkee') displayName = 'IIT Roorkee';
      else if (segment === 'jee-main') displayName = 'JEE Main';
      else if (segment === 'engineering-colleges') displayName = 'Engineering Colleges';
      
      breadcrumbs.push({
        name: displayName,
        path: currentPath,
        icon: null
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <nav className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isHome = breadcrumb.name === 'Home';
            
            return (
              <React.Fragment key={breadcrumb.path}>
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium flex items-center">
                    {breadcrumb.icon && <breadcrumb.icon className="h-4 w-4 mr-1" />}
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="text-gray-600 hover:text-[var(--site-green)] transition-colors duration-200 flex items-center"
                  >
                    {breadcrumb.icon && <breadcrumb.icon className="h-4 w-4 mr-1" />}
                    {breadcrumb.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
