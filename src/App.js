import Navigation from "./Components/Navigation/Navigation";
import './App.css' ;
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Appointment from "./Components/Appointment/Appointment";



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <Experience></Experience>
      <Appointment></Appointment>
      
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
