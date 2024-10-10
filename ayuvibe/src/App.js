import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

import './plugins/bootstrap/css/bootstrap.min.css';
import './plugins/icofont/icofont.min.css';
import './plugins/slick-carousel/slick/slick.css';
import './plugins/slick-carousel/slick/slick-theme.css';
import './css/style.css';
{/**/}

import './plugins/jquery/jquery.js'
import './plugins/bootstrap/js/popper.js'
import './plugins/bootstrap/js/bootstrap.min.js'

import './plugins/counterup/jquery.easing.js'

import './plugins/slick-carousel/slick/slick.min.js'
import './plugins/counterup/jquery.waypoints.min.js'
import './plugins/shuffle/shuffle.min.js'
import './plugins/counterup/jquery.counterup.min.js'

    

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}


export default App;
