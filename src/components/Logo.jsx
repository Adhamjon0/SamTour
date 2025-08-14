import React from 'react';

const Logo = ({ className = '', size = 28 }) => (
    <div
        className={className}
        style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: size,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            userSelect: 'none'
        }}
    >
        <span style={{ color: '#2B7A78', letterSpacing: '1px' }}>Sam</span>
        <span style={{ color: '#F4A261' }}>Tour</span>
    </div>
);

export default Logo;
