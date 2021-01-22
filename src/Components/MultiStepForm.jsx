import React from 'react';
import {useForm,useStep} from 'react-hooks-helper';
import Names from './stepForm/Names';
import Address from './stepForm/Address';
import Review from './stepForm/Review';
import Submit from './stepForm/Submit';
import Contact from './stepForm/Contact';

const DefaultData={
     firstName:"",
     lastName:"",
     address:"",
     city:"",
     state:"",
     zip:"",
     phone:"",
     gender:"",
     email:"", 
    skills:"",
    hobby:"",
    year:"",
    classes:"",
    college:"",
    grades:"",
    company:"",
    position:"",
    statYear:"",
    endYear:"",
    jobDescription:"",

};


const steps=[
    {id:'names'},
    {id:'address'},
    {id:'contact'},
    {id:'review'},
    {id:'submit'},
];

const MutliStepForm=()=>{
    const[formData,setForm]=useForm(DefaultData); 
    const{step,navigation}=useStep({
        steps,
        initialStep:0,
    });
    
    


    const props={formData,setForm,navigation};
    
    switch(step.id){
        case 'names':
            return<Names {...props} />
        case "address":
            return<Address {...props} />
        case 'contact':
            return<Contact {...props} />
        case 'review':
            return<Review {...props} />
        case 'submit':
            return<Submit {...props}/>
        }
        
    

    return(
    <>
        
    </>
    );
};
export default MutliStepForm; 