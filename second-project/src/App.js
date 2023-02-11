import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/MainPage";
import AddMeetup from "./pages/SecondPage";
import MyFavorites from "./pages/ThirdPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
   <Routes>
   <Route path="/" element={<AllMeetups/>} />
   <Route path="/second" element={<AddMeetup/>} />
   <Route path="/third" element={<MyFavorites/>} />
   </Routes>
    </Layout>
  );
}

export default App;
