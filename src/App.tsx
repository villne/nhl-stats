import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/NavBar';
import { ScheduleGames } from './components/home/Home';
import { Standings } from './components/standings/Standings';
import { Cards } from './components/cards/Cards';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='center-narrow'>
          <Switch>
            <Route path='/' exact component={ScheduleGames} />
            <Route path='/standings' exact component={Standings} />
            <Route path='/cards' exact component={Cards} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
