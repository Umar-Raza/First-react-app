

import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from './components/header/Header';
import Card from './components/cards/Card';
import Main from './components/main/Mian';
import Button from './components/button/Button';
import About from './pages/about/About';
import Archives from './pages/archives/Archive';
import WhereElse from './pages/whereElse/WhereElse';

function App() {
  return (

    <header className="App-header">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12 col-md-12'>
            <Card />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <Main />
            <Button />
          </div>
          <div className=" col-md-4 col-sm-12">
            <About />
            <Archives />
            <WhereElse />
          </div>
        </div>
      </div>

    </header >

  );
}

export default App;
