import {useForm} from 'react-hook-form';
import classNames from 'classnames';

import { NavbarBrand} from "reactstrap";

const Names=({formData,setForm,navigation})=>{
    const{firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phone,
    gender,
    email, 
    hobby}=formData;

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
            <h3>Basic Info.</h3>
                
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.firstName})}
            onChange={setForm}
            id="firstName"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:4,
                    message:"altleast 4 characters"
                },
            })}
            placeholder="Enter Your First Name"
            name="firstName"
          />          
          
              {errors.firstName && (<div className="invalid-feedback">{errors.firstName.message}</div>)}
          
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.lastName})}
            onChange={setForm}
            id="lastName"
            ref={register({
                required:"this field is required",
                minLength:{
                value:4,
                message:"altleast 4 characters"
                },
            })}
            placeholder="Enter Your Last Name"
            name="lastName"
          />          
          
              {errors.lastName && (<div className="invalid-feedback">{errors.lastName.message}</div>)}
          
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            className={classNames("form-control",{"is-invalid":errors.address})}
            onChange={setForm}
            id="address"
            
            placeholder="Enter Your Address"
            name="address"
          />          
          
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <textarea
            type="text"
            className={classNames("form-control",{"is-invalid":errors.city})}
            onChange={setForm}
            id="city"
            
            placeholder="Enter Your City"
            name="city"
          />          
          
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <textarea
            type="text"
            className={classNames("form-control",{"is-invalid":errors.state})}
            onChange={setForm}
            id="state"
            
            placeholder="Enter Your State"
            name="state"
          />          
          
        </div>

        <div className="form-group">
          <label htmlFor="zip">zip</label>
          <input
            type="number"
            className={classNames("form-control",{"is-invalid":errors.zip})}
            onChange={setForm}
            id="zip"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{6}$/,
                    message:"please enter a valid 6 digit number",
                },
                
            })}
            placeholder="Enter Your Zip"
            name="zip"
          />          
                    {errors.zip && (<div className="invalid-feedback">{errors.zip.message}</div>)}

        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.email})}
            onChange={setForm}
            id="email"
            ref={register({
                required:"this field is required",
                pattern:{
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"please enter a valid email",
                }
            })}
            placeholder="Enter Your E-mail Address"
            name="email"
          />
          {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.phone})}
            onChange={setForm}
            id="phone"
            ref={register({
                required:"this field is required",
                pattern:{
                    value:/^\d{10}$/,
                    message:"please enter a valid 10 digit number",
                },
                
            })}
            placeholder="Enter Your Phone Number"
            name="phone"
          />
          {errors.phone && (<div className="invalid-feedback">{errors.phone.message}</div>)}

        </div>
        
        <div className="form-group">
          <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              name="gender"
              ref={register({
                required:"this field is required",
              })}
            />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              name="gender"
              ref={register({
                required:"this field is required",
              })}
            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              name="gender"
              ref={register({
                required:"this field is required",
              })}
            />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
        {errors.gender && (
          <div className="form-text text-danger">please click one button</div>
        )}
        </div>

        <div className="form-group">
          <label htmlFor="hobby">Hobby</label>
          <input
            type="text"
            className={classNames("form-control",{"is-invalid":errors.hobby})}
            onChange={setForm}
            id="hobby"
            ref={register({
                required:"this field is required",
                minLength:{
                    value:4,
                    message:"altleast 4 characters"
                },
            })}
            placeholder="Enter Your Hobby"
            name="hobby"
          />          
          
              {errors.hobby && (<div className="invalid-feedback">{errors.hobby.message}</div>)}
          
        </div>
        
      
        <button type="submit" className="btn btn-primary"
                 variant="contained"
                 fullWidth
                 color="primary"
                 type="submit"
                 style={{marginTop:'1rem'}}
                 onClick={navigation.next}>Go Forward</button>
      </form>
      </div>
            </div>
       
    </>
    );
};
export default Names;