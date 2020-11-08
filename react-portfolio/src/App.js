import React from "react";

//components 
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from './components/my-carousel/my-carousel.component'
import TitleMessage from "./components/my-carousel/title-message/title-message.component";

import './App.css';

const App = () =>{
  return (<div>
    <MyNavbar/>
    <MyCarousel/> 
    <TitleMessage/>
  </div>
  );
}

export default App;
