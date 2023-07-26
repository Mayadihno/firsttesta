import Logo from "./Components/Logo";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home/Home";
import Questions from "./Pages/Question/Questions";
import Test from "./Pages/Test/Test";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
