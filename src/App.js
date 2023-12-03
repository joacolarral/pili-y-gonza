import "./App.scss";
import AdditionalInfo from "./view/AdditionalInfo";
import Countdown from "./view/Countdown";
import Footer from "./view/Footer";
import FrontPage from "./view/FrontPage";
import Gallery from "./view/Gallery";
import Gifts from "./view/Gifts";
import Information from "./view/Information";
import SocialMedia from "./view/SocialMedia";

function App() {
  return (
    <div className="App">
      <div className="container">
        <FrontPage />
        <Countdown />
        <Information />
        <Gallery />
        <AdditionalInfo />
        <Gifts />
        <SocialMedia />
        <Footer />
      </div>
    </div>
  );
}

export default App;
