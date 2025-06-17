import React from 'react';

const StickySupportLabel = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      background: '#00AEEF',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      minWidth: '220px',
      maxWidth: '280px',
      fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
      border: '1px solid #0096c7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '6px',
    }} className="sm:bottom-5 sm:right-5 sm:min-w-64 sm:max-w-80 sm:p-4 sm:gap-2">
      <div style={{ fontWeight: 'bold', fontSize: '0.875rem' }} className="sm:text-base">Talk to Support Team:</div>
      <div style={{ fontSize: '1.125rem', fontWeight: 600 }} className="sm:text-xl">Professional Printer Support</div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }} className="sm:mt-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
          style={{ width: '24px', height: '16px', marginRight: '6px', borderRadius: '2px', border: '1px solid #fff' }}
          className="sm:w-7 sm:h-4.5 sm:mr-2"
        />
        <span style={{ fontSize: '1rem', fontWeight: 500 }} className="sm:text-lg">+1 (877) 593-3790</span>
      </div>
    </div>
  );
};

export default StickySupportLabel; 