import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <Route path="/" component={CountriesList} />
          <Route path="/:cca3" component={CountryDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
