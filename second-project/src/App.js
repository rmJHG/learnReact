import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
   <Routes>
   <Route path="/" element={<MainPage/>} />
   <Route path="/second" element={<SecondPage/>} />
   <Route path="/third" element={<ThirdPage/>} />
   </Routes>
    </Layout>
  );
}

export default App;
