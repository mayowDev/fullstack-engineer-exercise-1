import React from 'react';

const Button = ({ disable, onClick, value, type}) => {
    
    const button = () => (
        <button disabled={disable} className={`button ${`${'button__' + type}` || ''}  }`}
                onClick={onClick}>
        {value}
        </button>
    );

    return (
        <>    
            {button()}     
        </>
    )
};

export default Button;

