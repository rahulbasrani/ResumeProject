import React from 'react';
import {useForm} from 'react-hook-form';
import classNames from 'classnames';
import { NavbarBrand} from "reactstrap";

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Address=({formData,setForm,navigation})=>{
    const{ year,
    classes,
    college,
    grades,}=formData;
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
            <h3>Education</h3>
                
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="college">college</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.college})}
            onChange={setForm}
            id="college"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:10,
                    message:"altleast 10 characters"
                },
            })}
            placeholder="Enter Your College"
            name="college"
          />          
          
              {errors.college && (<div className="invalid-feedback">{errors.college.message}</div>)}
          
        </div>

        <div className="form-group">
          <label htmlFor="classes">Class</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.classes})}
            onChange={setForm}
            id="classes"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:4,
                    message:"altleast  characters"
                },
            })}
            placeholder="Enter Your Class"
            name="classes"
          />          
          
              {errors.classes && (<div className="invalid-feedback">{errors.classes.message}</div>)}
          
        </div>
        
        

        <div className="form-group">
          <label htmlFor="grades">grades</label>
          <input
            type="number"
            className={classNames("form-control",{"is-invalid":errors.grades})}
            onChange={setForm}
            id="grades"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{2}$/,
                    message:"please enter a valid 2 digit number",
                },
                
            })}
            placeholder="Enter Your grades"
            name="grades"
          />          
                    {errors.grades && (<div className="invalid-feedback">{errors.grades.message}</div>)}

        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            className={classNames("form-control",{"is-invalid":errors.year})}
            onChange={setForm}
            id="year"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{4}$/,
                    message:"please enter a valid 4 digit number",
                },
                
            })}
            placeholder="Enter Your Year"
            name="year"
          />          
                    {errors.year && (<div className="invalid-feedback">{errors.year.message}</div>)}

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

export default Address;