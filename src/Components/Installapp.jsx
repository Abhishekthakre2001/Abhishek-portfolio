import React, { useEffect, useState } from 'react';
import '../Style/Installapp.css';

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault(); // Prevent the default mini-infobar from appearing
      setDeferredPrompt(e); // Save the event for later use
      setShowInstallPopup(true); // Show the custom install popup
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the browser's install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWA installation');
        } else {
          console.log('User dismissed the PWA installation');
        }
        setDeferredPrompt(null); // Clear the saved event
        setShowInstallPopup(false); // Hide the popup
      });
    }
  };

  const handleDismissClick = () => {
    setShowInstallPopup(false); // Hide the popup without prompting
  };

  return (
    <div>
      {showInstallPopup && (
        <div className="install-pwa-popup">
          <div className="install-pwa-popup-content">
            <p>Do you want to install this app?</p>
            <div className="popup-buttons">
              <button onClick={handleInstallClick}>Install</button>
              <button onClick={handleDismissClick}>Dismiss</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstallPWA;
