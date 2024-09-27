import { useState, useEffect } from 'react';

const useResize = (query = '(max-width: 768px)') => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleResize = () => {
      setIsCollapsed(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [query]);

  const toggleSidebar = () => setIsCollapsed(prev => !prev);

  return [isCollapsed, toggleSidebar];
};

export default useResize;
