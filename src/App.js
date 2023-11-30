import "./App.scss";
import Countdown from "./view/Countdown";
import FrontPage from "./view/FrontPage";
import Information from "./view/Information";

function App() {
  return (
    <div className="App">
      <FrontPage />
      <Countdown />
      <Information />
    </div>
  );
}

export default App;
