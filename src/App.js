import React from "react";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Header/Profile";
import Social from "./components/Social/Social";
import SocialLink from "./components/SocialLink/SocialLink";




const App = () => {
  return (
    <div>
      <Profile/>
      <SocialLink/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;