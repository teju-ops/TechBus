import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Hotel from './components/Hotel';
import LocalExpert from './components/LocalExpert';
import SuccessStories from './components/SuccessStories';
import TravelerGuide from './components/TravelerGuide';
import TravelerBenefits from './components/TravelerBenefits';
import TripPlanning from './components/TripPlanning';

function App() {
  return (
    <div className="App">
      <Header />
      <TravelerGuide/>
      <TripPlanning />
      <TravelerBenefits />
      <LocalExpert />
      <Hotel />
      <SuccessStories />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
