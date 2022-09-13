import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Experience.css' ;
import experience_img from '../../DocMic_images/about-img.png' ;

const Experience = () => {
    return (
        
          
             <Container style={{marginBottom: '140px'}}>
                
            
                <Row>
            <Col xs={7}>
                    <div className='text-start'>
                        <p className='secondary-color'>
                            16+ Years Expreiences 
                        </p>
                        <h2>
                        We Are Always ensure Best Medical Treatment For Your Health
                        </h2>
                        <p>
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik
                        </p>
                       
                    </div>
            </Col>
            <Col xs={5}>
                <img src={experience_img} alt="" />
            </Col>
          </Row>
          </Container>
         
        
    );
};

export default Experience;