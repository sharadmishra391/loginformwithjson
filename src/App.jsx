import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./components/signup";
import LoginP from "./components/loginpage";
import Count from "./count";
import { sharadContext } from "./context";
import Count1 from "./count1";
import Layout from "./layout";
import Home from "./components/home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<LoginP/>} />
          

          </Route>
        </Routes>
      </BrowserRouter>
       
      
    </>
  );
};
export default App;
