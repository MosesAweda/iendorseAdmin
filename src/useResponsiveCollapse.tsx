import { useState, useEffect } from 'react';

const useResponsiveCollapse = (breakpoint = 768) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    const handleResize = () => {
      setIsCollapsed(mediaQuery.matches);
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [breakpoint]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return [isCollapsed, toggleCollapse];
};

export default useResponsiveCollapse;