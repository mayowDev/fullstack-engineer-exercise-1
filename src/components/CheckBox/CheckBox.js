
import React  from 'react';


const CheckBox = ({name ,value, onChange,label, isChecked}) => {

    return (
        <div className={'checkbox-container'}>
            <input 
             type="checkbox"
             onChange={onChange}
             id={name} 
             name={name} 
             value={value}
             />
            <label htmlFor={name}> {name}</label>
        </div>
    )
};

export default CheckBox;
