import React from 'react';
import {useForm} from 'react-hook-form';
import classNames from 'classnames';
import { NavbarBrand} from "reactstrap";

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact=({formData,setForm,navigation})=>{
    const{company,
    position,
    statYear,
    endYear,
    jobDescription,}=formData;
    console.log(navigation);
    const{register,handleSubmit,errors}=useForm({
        mode: "onTouched",
      });
      
      const onSubmit = data => console.log(data);
      console.log(errors);
    return(
        <>
              <NavbarBrand  className="header" href="/"><h1>Resume Generaor</h1></NavbarBrand>   

            <div className="container py-5">
          
            <div className="card border-0 shadow w-75 p-3 mx-auto">
            <h3>Expeirence</h3>
                
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.company})}
            onChange={setForm}
            id="company"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:5,
                    message:"altleast 5 characters"
                },
            })}
            placeholder="Enter Your Company"
            name="company"
          />          
          
              {errors.company && (<div className="invalid-feedback">{errors.company.message}</div>)}
          
        </div>

        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.class})}
            onChange={setForm}
            id="position"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:4,
                    message:"altleast  characters"
                },
            })}
            placeholder="Your Position"
            name="position"
          />          
          
              {errors.position && (<div className="invalid-feedback">{errors.position.message}</div>)}
          
        </div>
        
        

        <div className="form-group">
          <label htmlFor="startYear">Start Year</label>
          <input
            type="number"
            className={classNames("form-control",{"is-invalid":errors.startYear})}
            onChange={setForm}
            id="startYear"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{4}$/,
                    message:"please enter a valid 4 digit number",
                },
                
            })}
            placeholder="Enter Your Start Year"
            name="startYear"
          />          
                    {errors.startYear && (<div className="invalid-feedback">{errors.startYear.message}</div>)}

        </div>

        <div className="form-group">
          <label htmlFor="endYear">End Year</label>
          <input
            type="number"
            className={classNames("form-control",{"is-invalid":errors.endYear})}
            onChange={setForm}
            id="endYear"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{4}$/,
                    message:"please enter a valid 2 digit number",
                },
                
            })}
            placeholder="Enter Your End Year"
            name="endYear"
          />          
                    {errors.endYear && (<div className="invalid-feedback">{errors.endYear.message}</div>)}

        </div>

        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            type="text"
            className={classNames("form-control",{"is-invalid":errors.class})}
            onChange={setForm}
            id="jobDescription"
            
            placeholder="Enter Your Job Description"
            name="jobDescription"
          />          
          
        </div>

        
        <button type="submit" className="btn btn-primary"
                 variant="contained"
                 fullWidth
                 color="secondary"
                 type="submit"
                 style={{marginRight:"1rem",marginTop:'1rem',backgroundColor:'purple'}}
                 onClick={navigation.previous}>Back</button>

        <button type="submit" className="btn btn-primary"
                 variant="contained"
                 fullWidth
                 color="primary"
                 type="submit"
                 style={{marginTop:'1rem'}}
                 onClick={navigation.next}>Next</button>

        

            

      </form>
      </div>
            </div>
        </>
    );
};
export default Contact;