import BarraHome from './component/barra_home/barrahome.js';
import './App.css';
import BannerMain from './component/Banner_Main/Banner_main.js';
import CardsSession from './component/CardsSession/CardsSession.js';

function App() {
  return (
    <div className="App">
      <BarraHome/>
      <BannerMain/>
      <CardsSession/>
    </div>
  );
}

export default App;
