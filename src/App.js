import React from 'react';
import './App.css';
import Page1 from './component/Content/Content';
import Header from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Page2 from './component/Page2/Page2';
import Page3 from './component/Page3/Page3';
import Login from './component/Login/Login';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Route path='' component={Login} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Header title='page' />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
