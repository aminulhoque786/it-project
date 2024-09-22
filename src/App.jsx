


import Layout from "./components/root/Layout"
import About from "./pages/About";
import Carrers from "./pages/Carrers";
import Home from "./pages/Home"
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom"
import Investors from "./pages/Investors";
import Companies from "./pages/Companies";


function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Company" element={<Companies />} />
        <Route path="/Carrers" element={<Carrers />} />
        <Route path="/investors" element={<Investors />} />
      </Route>
    )
  );
  




  return (
    <>
<RouterProvider router={router} />
    </>
  )
}


export default App
