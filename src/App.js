import Navigation from "./Components/Navigation/Navigation";
import './App.css' ;
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Appointment from "./Components/Appointment/Appointment";
import Faq from "./Components/Faq/Faq";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Experience></Experience>
      <Appointment></Appointment>
      <Faq></Faq>
      {/* <Testimonial></Testimonial> */}
      
      <Footer></Footer>
    </div>
  );
}

export default App;
