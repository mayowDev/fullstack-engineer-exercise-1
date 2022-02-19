import React, {useState, useEffect} from 'react';
import {Form} from '../components/Form'
import Button  from '../components/Button';
import Card from "../components/Card";
import {H1} from '../components/Typography'

const MainPage = () => {
    const [isShow, setIsShow] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const [allPreviousData, setAllPreviousData] = useState([])
    const [errMessage, setErrMessage] = useState('')
    const [imageFile, setImageFile] = useState({})
    const [features, setFeatures] = useState([
        {
            name: "Photo Gallery",
            checked:false,
        },
        {
            name: "Email Contact Form",
            checked:false,
        
        },
        {
            name: "Blog / CMS",
            checked:false,
        
        },
        {
            name: "Online Application for Employment",
            checked:false,
        
        }
    ])
    const [formData,setFormData] = useState({
        projectName:'',
        projectTimeline:'',
        projectBudget:'$2,470',
        designType:'simple',
        userEmail:"",
        extraFeatures: features,
        imageFile:imageFile
    });
  
 
    const setInitialData = ()=>{
        const previousData =  localStorage.getItem('allProjects')
        
        setAllPreviousData([JSON.parse(previousData)])
        if(allPreviousData.length>0){setIsShow(!isShow)}

    }
    
    const handleCheckboxChange = (index)=> {
        let found = features[index]

        found.checked = !found.checked
        let newFeatures ={...features}
        setFeatures(newFeatures);
        
    }

    const handleChange = (e)=> {
        const value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }

    useEffect(()=>{
        setInitialData()
    },[localStorage])

    
    const handleFileChange = (fileDetails)=>{
        console.log('file', fileDetails)
        setImageFile(fileDetails)

    }
   
    const isEmailValid = (mail) => {return /^\S+@\S+\.\S+$/.test(mail) === true;};
    const validEmail = () => {return isEmailValid(formData.userEmail);};
    const validateFeatures=(arr)=>{
        let valid=true;
        let nonCheckedList = []
        
        for (let i = 0 ; i<arr.length;i++){
            console.log('item', arr[i], i )
            if(arr[i].checked === false){nonCheckedList.push(arr[i])}
            
        }
        console.log('nonCheckedList.length', nonCheckedList.length )
        if(nonCheckedList.length >= 3){valid = false}
        return valid;
    }
    
    const allInputsAreValid = () => {
        return validEmail() && 
        formData.projectName.length > 2 && 
        formData.projectTimeline.length >= 4 && 
        !!imageFile?.name&&
        validateFeatures(features)
        
    }
    console.log('allInputsAreValid', allInputsAreValid())
   
    const onFormSubmit = (e)=>{
        e.preventDefault()
        if(allInputsAreValid() === false){
            setDisabled(true)
            setErrMessage('Please fill all the required inputs')
            return setFormData({
                projectName:'',
                projectTimeline:'',
                projectBudget:'$1,000',
                designType:'simple',
                extraFeatures: features,
                imageFile:{}
            })
        }
        setDisabled(false)
        //make sure you take copy of previouse projects and ...spread into array with the new prpject
        localStorage.setItem('allProjects',[...allPreviousData,JSON.stringify(formData)])
        setIsShow(true)
    }
   
    const renderCards=()=>(
        <>
            { <Card data={allPreviousData}/>}
        </>
    )
    return (
        <div className="main-page">
            <H1 value="New Website Questionnaire"/>   
            <Form      
                formData={formData}   
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleFileChange={handleFileChange}
                errMessage={errMessage}
                onSubmit={onFormSubmit}
               
            />
           {allInputsAreValid() === true&&<Button value={'Submit'} onClick={onFormSubmit}/>} 
            {
                <div className={'display-data'}>
                    <H1 value="Your Previous questioners"/>
                    {/*!!isShow&& return ( <p style={{textAlign:'center', fontSize:"1.25rem"}}>Nothing to show</p>)} */}
                    {renderCards()}
                    

                </div>
            }
        </div>
    )
};

export default MainPage
