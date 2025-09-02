import React, { useEffect } from 'react';

const ImageProtection = ({ children }) => {
  useEffect(() => {
    // DevTools detection
    const detectDevTools = () => {
      const threshold = 160;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      
      if (heightThreshold || widthThreshold) {
        document.body.style.display = 'none';
        alert('Developer tools detected. Please close them to continue viewing the site.');
        window.location.reload();
      }
    };

    // Disable common keyboard shortcuts
    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+P
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
        (e.ctrlKey && e.keyCode === 83) || // Ctrl+S (Save)
        (e.ctrlKey && e.keyCode === 65) || // Ctrl+A (Select All)
        (e.ctrlKey && e.keyCode === 80) // Ctrl+P (Print)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable right-click globally
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable text selection globally
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      clearInterval(devToolsInterval);
    };
  }, []);

  return <>{children}</>;
};

export default ImageProtection;