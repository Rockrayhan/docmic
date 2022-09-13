import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css' ;
import service_logo_1 from '../../DocMic_images/service-logo-1.png' ;
import service_logo_2 from '../../DocMic_images/service-logo-2.png' ;
import service_logo_3 from '../../DocMic_images/service-logo-3.png' ;
import service_logo_4 from '../../DocMic_images/service-logo-4.png' ;


const Services = () => {
    return (
        <div style={{marginBottom:'56px'}}>
            <p className='secondary-color mt-5'>Our Services</p> 
            <h2 className='mb-5'>
            Services For Your Health
            </h2>
            <br />
            <br />
<Container>
            <Row>
        <Col xs={3}>
            <div className='service-card'>
            <img className='img-fluid service-logo' src={service_logo_1} alt="" />
               <div className="text-start ms-2">
               <p>
                    Cardiology
                </p>
                <p>
                Seduahag perspiciati under omnised atused error.
                </p>

                <a className='text-decoration-none text-dark fw-bold' href="">
                    Explore Now
                </a>
               </div>

            </div>
        </Col>
        <Col xs={3}>
            <div className='service-card'>
            <img className='img-fluid service-logo' src={service_logo_2} alt="" />
                
               <div className="text-start ms-2">
               <p>
                    Cardiology
                </p>
                <p>
                Seduahag perspiciati under omnised atused error.
                </p>

                <a className='text-decoration-none text-dark fw-bold' href="">
                    Explore Now
                </a>
               </div>

            </div>
        </Col>
        <Col xs={3}>
            <div className='service-card'>
            <img className='img-fluid service-logo' src={service_logo_3} alt="" />
               <div className="text-start ms-2">
               <p>
                    Cardiology
                </p>
                <p>
                Seduahag perspiciati under omnised atused error.
                </p>

                <a className='text-decoration-none text-dark fw-bold' href="">
                    Explore Now
                </a>
               </div>

            </div>
        </Col>
        <Col xs={3}>
            <div className='service-card'>
            <img className='img-fluid service-logo' src={service_logo_4} alt="" />
               <div className="text-start ms-2">
               <p>
                    Cardiology
                </p>
                <p>
                Seduahag perspiciati under omnised atused error.
                </p>

                <a className='text-decoration-none text-dark fw-bold' href="">
                    Explore Now
                </a>
               </div>

            </div>
        </Col>
        
      </Row>
      </Container>

        </div>
    );
};

export default Services;