import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SurveyProvider } from "./context/SurveyContext";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <SurveyProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' exact={true} element={<Homepage />}></Route>
            <Route path='/about' exact={true} element={<About />}></Route>
            {/* <Route path='/survey' exact={true} element={<Survey />}></Route> */}
          </Routes>
        </Router>
      </SurveyProvider>
    </>
  );
}

export default App;
