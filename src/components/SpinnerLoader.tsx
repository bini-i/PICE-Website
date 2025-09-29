import React from 'react';

const SpinnerLoader: React.FC = () => (
    <div style={{
        display: 'inline-block',
        width: 40,
        height: 40,
        position: 'relative'
    }}>
        <div style={{
            boxSizing: 'border-box',
            display: 'block',
            position: 'absolute',
            width: 32,
            height: 32,
            margin: 4,
            border: '4px solid #1976d2',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            borderColor: '#1976d2 transparent transparent transparent'
        }} />
        <style>
            {`
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
            `}
        </style>
    </div>
);

export default SpinnerLoader;