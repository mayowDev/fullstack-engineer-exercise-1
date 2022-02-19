import React from 'react'

export const  Input = ({isValid,id, name, type, value, checked, placeholder, onChange, label, errorMessage}) =>{

    return (
    <div className='input-group'>
      <label htmlFor={id}>{label}</label>
      <input 
            className={`input ${isValid === false && value?.length >1 && 'error'}` }
            id={id} 
            name={name}  
            type={type} 
            onChange={onChange} 
            value={value} 
            data-testid="input-test"
            required={true}
            checked={checked}
      />
      {!!isValid&& <p className='error-message'>{errorMessage}</p>}
    </div>
    )
}