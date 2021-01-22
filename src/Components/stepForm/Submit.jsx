import React from "react";
import {Container, Row, Col} from 'reactstrap';
import { NavbarBrand} from "reactstrap";


const Submit = ({formData,setForm,navigation}) => {
    const{
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
    }=formData;
    return (
        <Container><br/>
			
			
            <Row>
				<Col md={4} className="flexit">
					<h2>Name</h2>
				</Col>
				<Col md={8}>
					
					<Row><span className="fontinc"><b>First Name:</b> {address}</span></Row>
					<Row><span className="fontinc"><b>Last Name:</b> {city}</span></Row>
					<Row><span className="fontinc"><b>Nick Name:</b> {state}</span></Row>
					<br/>
					{/* <h4>Senior Secondary Education</h4>
					<Row><span className="fontinc"><b>School:</b> {obj.schl1}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear1}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa1}</span></Row>
					<br/>
					<h4>College Education</h4>
					<Row><span className="fontinc"><b>College:</b> {obj.clg}</span></Row>
					<Row><span className="fontinc"><b>Course:</b> {obj.course}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear2}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa2}</span></Row> */}
				</Col>
			</Row>
            <br /><br />
            <Row>
				<Col md={4} className="flexit">
					<h2>Address</h2>
				</Col>
				<Col md={8}>
					
					<Row><span className="fontinc"><b>Location:</b> {address}</span></Row>
					<Row><span className="fontinc"><b>City:</b> {city}</span></Row>
					<Row><span className="fontinc"><b>State:</b> {state}</span></Row>
					<Row><span className="fontinc"><b>Zip:</b> {zip}</span></Row>
					<br/>
					{/* <h4>Senior Secondary Education</h4>
					<Row><span className="fontinc"><b>School:</b> {obj.schl1}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear1}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa1}</span></Row>
					<br/>
					<h4>College Education</h4>
					<Row><span className="fontinc"><b>College:</b> {obj.clg}</span></Row>
					<Row><span className="fontinc"><b>Course:</b> {obj.course}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear2}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa2}</span></Row> */}
				</Col>
			</Row>
            <br /><br />
            <Row>
				<Col md={4} className="flexit">
					<h2>Contact</h2>
				</Col>
				<Col md={8}>
					
					<Row><span className="fontinc"><b>Phone:</b> {phone}</span></Row>
					<Row><span className="fontinc"><b>Email:</b> {email}</span></Row>
					<br/>
					{/* <h4>Senior Secondary Education</h4>
					<Row><span className="fontinc"><b>School:</b> {obj.schl1}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear1}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa1}</span></Row>
					<br/>
					<h4>College Education</h4>
					<Row><span className="fontinc"><b>College:</b> {obj.clg}</span></Row>
					<Row><span className="fontinc"><b>Course:</b> {obj.course}</span></Row>
					<Row><span className="fontinc"><b>Start Year:</b> {obj.startyear2}</span></Row>
					<Row><span className="fontinc"><b>CGPA:</b> {obj.cgpa2}</span></Row> */}
				</Col>
			</Row>
            <br /><br />
		</Container>
    );
}

export default Submit;