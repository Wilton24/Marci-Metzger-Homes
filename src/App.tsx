import './App.css';
import Header from './components/header/Header';
import BodySection from './components/BodySection';
import HighlightsSection from './components/Highlights/HighlightsSection';
import SearchListings from './components/SearchListings/SearchListings';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

function App() {


  return (
    <>
      <Header />
      <BodySection />
      <HighlightsSection />
      <SearchListings />
      <PhotoGallery />
    </>
  )
}

export default App
