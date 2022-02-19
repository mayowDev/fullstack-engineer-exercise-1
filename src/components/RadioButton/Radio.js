
import React  from 'react';


const Radio = ({checked,name ,value,onChange,label}) => {

    return (
        <div className={'radio-container'}>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={(event)=>onChange(event)}
                />
                {label}
            </label>
        </div>
    )
};

export default Radio;
