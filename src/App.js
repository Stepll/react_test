import React from 'react';
import './App.css';
import Content from './component/Content/Content';
import Header from './component/Header/Header';
import Navigation from './component/Navigation/Navigation';
import Page2 from './component/Page2/Page2';


const App = () => {
  return (
    <div className='app-wrapper'>
      {/* <Content /> */}
      <Page2 />
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
