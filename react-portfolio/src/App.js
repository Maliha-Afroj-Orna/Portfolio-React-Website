import React from "react";

//components 
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component'
import TitleMessage from "./components/my-carousel/title-message/title-message.component";
import About from "./pages/about/about.component";

import './App.css';

const App = () =>{
  return (<div>
    <MyNavbar/>
    <MyCarousel/> 
    <TitleMessage/>
    {/*About me section*/}
    <About/>

  </div>
  );
}

export default App;
