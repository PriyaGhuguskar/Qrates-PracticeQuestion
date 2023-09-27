import './App.css';
import Bannercompo from './Component/Body/Banner/Bannercompo';
import Footercompo from './Component/Footer/Footercompo';
import NavBar from './Component/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bannercompo />
      <Footercompo />
    </div>
  );
}

export default App;
