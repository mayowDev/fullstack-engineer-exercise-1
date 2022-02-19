import React from 'react'
// import {Link} from 'react-router-dom';

export const H2 = ({value, className}) => {
    return ( <h2 className={`h2 ${className || ''}`}>{value}</h2>)
};

export const H1 = ({value, className}) => {
    return ( <h1 className={`h1 ${className || ''}`}>{value}</h1>)
};

export const P = ({value, className ="", ...rest}) => {
    return ( <p className={`p ${className}`} {...rest}>{value}</p>)
};
