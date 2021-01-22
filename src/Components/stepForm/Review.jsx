import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavbarBrand} from "reactstrap";

import Button from '@material-ui/core/Button';
import Submit from './Submit';


const Review=({formData,navigation})=>{
    
    const{go}=navigation;
    
    const{
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        phone,
        email
    }=formData;
    

    return(
        <>     
         <NavbarBrand  className="header" href="/"><h1>Resume Generaor</h1></NavbarBrand>   
        
        <Container maxWidth='sm'>
            <h3>Review</h3>
            <RenderAccordion summary="Basic" go={go} details={[
                {"First Name":firstName},
                {'Last Name':lastName},
                
            ]}/>

            <RenderAccordion summary="Address" go={go} details={[
                {"Address":address},
                {'City':city},
                {'State':state},
                {'Zip':zip},
            ]}/>

            <RenderAccordion summary="Contact" go={go} details={[
                {"Phone":phone},
                {'Email':email},  
            ]}/>

            {/* <Button
                color="primary"
                variant="contained"
                style={{marginTop:'1.5rem'}}
                onClick={()=>go('submit')}
            >
                Submit
            </Button> */}
        </Container>
        </>
        
    );
};

export const RenderAccordion=({summary,details,go})=>(
    <Accordion>
        
        <AccordionSummary
        expandIcon={<ExpandMore/>}>{summary}</AccordionSummary>
        <AccordionDetails>
            <div> 
                {
                    details.map((data,index)=>{
                        const objKey=Object.keys(data)[0];
                        const objValue=data[Object.keys(data)[0]];
                        return<>
                            <ListItemText key={index}>
                                <h3>{`${objKey}:${objValue}`}</h3>
                            </ListItemText>
                            
                        </>
                    })

                    }
                    <IconButton 
                    color="primary" 
                    component="span"
                    onClick={()=>go(`${summary.toLowerCase()}`)}>
                        <EditIcon/>
                    </IconButton>
                
            </div>
        </AccordionDetails>
        
    </Accordion>
    
)

export default Review;