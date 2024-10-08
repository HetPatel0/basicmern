import { Posts } from "./components/Posts"
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";




const App = () => {

  
  return (

      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home/>}></Route>
                <Route path="/admin"  element={<Posts/>}></Route>
            </Route>
          </Routes>

        </BrowserRouter>
      </>

  )
}

export default App
