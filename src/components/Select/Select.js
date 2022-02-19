
import React  from 'react';


const Select = ({name , onChange, value, label}) => {

    return (
        <div className={'select-container'}>
            <label htmlFor={name}>{label}</label>
            <select  value={value}  onChange={(e)=>onChange(e)} name={name} id={name}>
                <option value="$2,470">$2,470</option>
                <option value="$3,745">$3,745</option>
                <option value="$5,478">$5,478</option>
                <option value="$7,878">$7,878</option>  
            </select>
        </div>
    )
};

export default Select;
