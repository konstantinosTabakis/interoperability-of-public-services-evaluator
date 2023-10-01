import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SurveyProvider } from "./context/SurveyContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Menu from "./components/Menu";
import Copyrights from "./components/Copyrights";
import Survey from "./pages/Survey";
import Results from "./pages/Results";
import SelectSurvey from "./pages/SelectSurvey";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <SurveyProvider>
      <ToastContainer />
        <Router>
          <Menu />
          <Copyrights/>
          <Routes>
            <Route path='/' exact={true} element={<Homepage />}></Route>
            <Route path='/about' exact={true} element={<About />}></Route>
            <Route path='/survey' exact={true} element={<Survey />}></Route>
            <Route path='/results' exact={true} element={<Results />}></Route>
            <Route path='/select' element={<SelectSurvey/>} />
            <Route path='/select/:id' element={<SelectSurvey/>} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        </Router>
      </SurveyProvider>
    </>
  );
}

export default App;
