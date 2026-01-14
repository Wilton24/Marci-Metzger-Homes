import './App.css';
import Header from './components/header/Header';
import BodySection from './components/BodySection';
import HighlightsSection from './components/Highlights/HighlightsSection';
import SearchListings from './components/SearchListings/SearchListings';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import Services from './components/Services/Services';
import ContactInfo from './components/ContactInfo/ContactInfo';
import BusinessMap from './components/BusinessMap/BusinessMap';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Header />
      <BodySection />
      <HighlightsSection />
      <SearchListings />
      <PhotoGallery />
      <Services />
      <ContactInfo />
      <BusinessMap />
      <Footer />
    </>
  )
}

export default App
