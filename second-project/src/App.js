import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return <div>
    <Routes>
    <Route path="/">
      <MainPage />
    </Route>
    <Route path="/second">
  <SecondPage />
    </Route>
  </Routes>
  </div>
}

export default App;
