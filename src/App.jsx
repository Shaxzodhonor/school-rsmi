import './App.scss';
import { Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Home from './pages/Home';
import SchoolSectionPage from './pages/SchoolSectionPage';


function App() {

  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/school-section"} component={SchoolSectionPage} />
      </Switch>
    </div>
  );
}

export default App;



