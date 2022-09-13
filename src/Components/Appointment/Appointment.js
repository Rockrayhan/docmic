import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import appointment_img from '../../DocMic_images/appointment-img.png';
import appointment_logo_1 from '../../DocMic_images/appointment-logo-1.png';
import appointment_logo_2 from '../../DocMic_images/appointment-logo-2.png';
import appointment_logo_3 from '../../DocMic_images/appointment-logo-3.png';
import appointment_logo_4 from '../../DocMic_images/appointment-logo-4.png';

import './Appointment.css' ;

const Appointment = () => {
    return (
       <Container>
            <Row>
        <Col xs={4}>
        <img src={appointment_img} alt="" />
        </Col>
        <Col xs={8}>
            <div className='text-start'>
                    <p className='secondary-color'>
                        Our Hospital Feature
                    </p>

                    <h2>
                    Make An Appointment Easy And Fast Services 
                    </h2>

                    <Row>
        <Col xs={6}>
            <div className="appointment-card">
               
                <div className="text-start p-2">
                    <p className='fw-bold'>
                        24 Hours Doctor Support
                        <img className='appointment-logo img-fluid' src={appointment_logo_1} alt="" />
                    </p>
                    <p>
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    </p>
                </div>
            </div>
        </Col>
        <Col xs={6}>
        <div className="appointment-card">
               
               <div className="text-start p-2">
                   <p className='fw-bold'>
                       24 Hours Doctor Support
                       <img className='appointment-logo img-fluid' src={appointment_logo_1} alt="" />
                   </p>
                   <p>
                   simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                   </p>
               </div>
           </div>
        </Col>
      </Row>
      

      
      <Row className=''>
        <Col xs={6}>
        <div className="appointment-card">
               
               <div className="text-start p-2">
                   <p className='fw-bold'>
                       24 Hours Doctor Support
                       <img className='appointment-logo img-fluid' src={appointment_logo_1} alt="" />
                   </p>
                   <p>
                   simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                   </p>
               </div>
           </div>
        </Col>
        <Col xs={6}>
        <div className="appointment-card">
               
               <div className="text-start p-2">
                   <p className='fw-bold'>
                       24 Hours Doctor Support
                       <img className='appointment-logo img-fluid' src={appointment_logo_1} alt="" />
                   </p>
                   <p>
                   simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                   </p>
               </div>
           </div>
        </Col>
      </Row>
      </div>
           

        </Col>
      </Row>
      </Container>
        
    );
};

export default Appointment;