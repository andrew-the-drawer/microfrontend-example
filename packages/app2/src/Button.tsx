import React from 'react';

type ButtonProps = {
    onClick: () => void;
}

const Button = ({  onClick }: ButtonProps) => {
    return (
    <button 
        style={{ width: 300 }}
        onClick={onClick}
    >
        Click me from app 2 with React version: {React.version}
        </button>
    );
}

export default Button;