import React from 'react';

const StickySupportLabel = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#00AEEF',
      color: '#fff',
      padding: '18px 22px',
      borderRadius: '1px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      zIndex: 1000,
      minWidth: '260px',
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #0096c7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Talk to Support Team:</div>
      <div style={{ fontSize: '1.3rem', fontWeight: 600 }}>Free Printer Support</div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="US Flag"
          style={{ width: '28px', height: '18px', marginRight: '8px', borderRadius: '2px', border: '1px solid #fff' }}
        />
        <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>+1-(888) 404-6710</span>
      </div>
    </div>
  );
};

export default StickySupportLabel; 