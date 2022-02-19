import React, {useState} from 'react'
import {Input} from '../Input'
import CheckBox from "../CheckBox";
import Radio from "../RadioButton";
import Select  from '../Select';

export const Form = (props) => {
    const {  handleChange, handleCheckboxChange, handleFileChange, formData} = props;
    
    const [selectedFile, setSelectedFile] = useState({})
   
    const onFileChange = event => { 
        setSelectedFile(event.target.files[0])
        handleFileChange(event.target.files[0])
    };        
   
    const  fileData = () => { 
        if (selectedFile) { 
            
          return ( 
            <div> 
              <h3>File Details:</h3> 
              <p>File Name: {selectedFile?.name}</p> 
              <p>File Type: {selectedFile?.type}</p> 
              <p> 
                Last Modified:{" "} 
                {selectedFile?.lastModifiedDate?.toDateString()} 
              </p> 
            </div> 
          ); 
        } else { 
          return ( 
            <div> 
              <br /> 
              <h4>Choose before Pressing the Upload button</h4> 
            </div> 
          ); 
        } 
      }; 
      const isEmailValid = (mail) => {return /^\S+@\S+\.\S+$/.test(mail) === true;};
  return (
    <form className="form-wrapper">
        <div className='basic-info box'>
            <h2 className="info">Basic Info</h2>
            <Input 
                isValid={formData.projectName?.length<2}
                errorMessage={formData.projectName?.length>=1&& 'project name should  be minimum 2 characters'}
                placeholder="please type your Project Name" 
                id="projectName" 
                name="projectName" 
                label="Project Name" 
                type="text" 
                onChange={handleChange} 
                value={formData.projectName}
            />
            <Input 
                isValid={formData.projectTimeline?.length > 1 &&formData.projectTimeline?.length< 4}
                errorMessage={formData?.projectTimeline?.length<4&& 'project timeline should be minimum be  4 characters'}
                placeholder="please type your Project deadline" 
                id="projectTimeline" name="projectTimeline" 
                label="Project Timeline" type="text" 
                onChange={handleChange} 
                value={formData.porjectTimeLine}
            />
            <Input 
                isValid={formData?.userEmail?.length>2}
                errorMessage={isEmailValid(formData.userEmail) === false && 'please provide valid email'}
                placeholder="please enter your contact email" 
                id="userEmail" name="userEmail" 
                label="Contact email" type="email" 
                onChange={handleChange} 
                value={formData.userEmail}
            />
            <h2 className={"info"}>Budget</h2>
            <Select label="Whats your budget ?" name="projectBudget" onChange={handleChange} value={formData.projectBudget}/>            
        </div>
        <div className="design-options box">
            <h2 className={"info"}>Design requirments</h2>
            <p>What type of website design process would you like? </p>
            <Radio 
            checked={formData.designType === 'simple'} 
            value={"simple"} 
            name={'designType'} 
            onChange={handleChange} 
            label={"Fast and simple Design  with Less Consulting & Meetings"}/>
            <Radio 
            checked={formData.designType === 'custom'} 
            value={"custom"} 
            name={'designType'} 
            onChange={handleChange} 
            label={"Custom Website with Consultative Proces"}/>
        </div>
        
        <div className="extra-features box">
            <h2 className={"info"}>Extra Features</h2>
            <p>What types of additional functionality do you need on your site?</p>
            {formData.extraFeatures.map(({ name}, index) => {
                return (
                    <div className='features-list' key={index}>
                        <CheckBox name={name} value={name} onChange={()=>handleCheckboxChange(index)}/>
                    </div>
                    
                );    
            })}
        </div>

        <div className="images box">
            <h2 className={"info"}> Website inspirations</h2>
            <p>Kindly provide some website images you would like your website to look like</p>
            <div> 
                <input 
                className='file' 
                type="file" 
                onChange={onFileChange} name='file'
                accept="image/png, image/gif, image/jpeg" 
                /> 
            </div> 
            {fileData()} 
        </div>
    </form>
  )
}
