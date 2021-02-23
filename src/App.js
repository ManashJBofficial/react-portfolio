import './App.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/home.js'
import GlobalStyles from './GlobalStyles.js'


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path='/' component={Home} exact />       
      </Switch>
    </Router>
  );
}

export default App;
