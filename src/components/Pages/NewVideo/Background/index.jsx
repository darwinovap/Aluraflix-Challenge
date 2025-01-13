import React, { useState, useEffect } from 'react';

const ChangeColor = ({ children }) => {
    const [backgroundColor, setBackgroundColor] = useState(getRandomColor);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundColor(getRandomColor);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div style={{
            backgroundColor,
            minHeight: '100vh',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'background-color 1s ease',
            opacity: 0.95
        }}>
            {children}
        </div>
    );
}

export default ChangeColor;