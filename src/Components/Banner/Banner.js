import React from 'react';
import './Banner.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import banner_img from '../../DocMic_images/Banner-img.png';
import CountUp from 'react-countup';
import checkup_logo from '../../DocMic_images/checkup_log.png' ;

const Banner = () => {
return (


<Container style={{ marginBottom: '112px' }}>
<Row className='g-5'>
<Col xs={7}>
<div className='text-start'>
    <h1 className='banner-header'>
        Your <span className='text-primary'>Health</span> Is Our <br />
        <span className='secondary-color'>Top Priority</span>
    </h1>
    <p>
        There are many variations of passages of lpsum  <br />
        available, but the majority hae suffered.
    </p>
    <br />
    <Button className='p-3' variant="primary">Meet Our Specialists</Button>







    <div className='row mt-5'>
        <div className="col">
            <h4 className='secondary-color fw-bold'>

            <CountUp duration='3' end={282} /> K
               
            </h4>
            <p>
                recovered Patients
            </p>

        </div>
        <div className="col">
            <h4 className='secondary-color fw-bold'>
            <CountUp duration='3' end={98} /> %
            </h4>
            <p>
                Satisfaction Rate
            </p>

        </div>
        <div className="col">
            <h4 className='secondary-color fw-bold'>
            <CountUp duration='3' end={86} /> +
            </h4>
            <p>
                Expert Doctors
            </p>

        </div>


    </div>
</div>

</Col>
<Col xs={5}>
<div className='banner-img-section'>
    <img className='img-fluid' src={banner_img} alt="" />
    <br />
    <button className='btn btn-primary banner-btn p-2'>
      <img className='img-fluid cheack_logo' src={checkup_logo} alt="" />    Regular Cheackup
    </button>
</div>
</Col>
</Row>
</Container>

);
};

export default Banner;