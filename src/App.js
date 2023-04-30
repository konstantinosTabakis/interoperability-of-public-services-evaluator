import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SurveyProvider } from "./context/SurveyContext";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./components/Menu";
import Copyrights from "./components/Copyrights";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
function App() {
  return (
    <>
      <SurveyProvider>
        <Router>
          <Menu />
          <Copyrights/>
          <Routes>
            <Route path='/' exact={true} element={<Homepage />}></Route>
            <Route path='/about' exact={true} element={<About />}></Route>
            <Route path='/survey' exact={true} element={<Survey />}></Route>
            <Route path='/results' exact={true} element={<Results />}></Route>
          </Routes>
        </Router>
      </SurveyProvider>
    </>
  );
}

export default App;
