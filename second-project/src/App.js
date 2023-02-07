import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation /> 
   <Routes>
   <Route path="/" element={<MainPage/>} />
   <Route path="/second" element={<SecondPage/>} />
   <Route path="/third" element={<ThirdPage/>} />
    

        {/* <Route path="/second">
          <SecondPage />
        </Route>
     */}

   </Routes>
    </div>
  );
}

export default App;
