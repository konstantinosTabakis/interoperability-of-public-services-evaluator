import { NavLink } from "react-router-dom"
import SurveyContext from "../context/SurveyContext"
import { useContext } from "react"
import translations from "../translations/translations"


function Menu() {

    const {dispatch, content} = useContext(SurveyContext)
    const handleChange= (e)=>{
        dispatch({type: 'SET_LANGUAGE', language: e.target.value, content: translations[e.target.value].content, questions: translations[e.target.value].questions  })
    }

    return (
        <nav className="nav-menu">
            <ul>
                <li><NavLink className="nav-link" to='/' end>{content.menu_home} </NavLink></li>
                <li><NavLink className="nav-link" to='/survey' end>{content.menu_survey} </NavLink></li>
                <li><NavLink className="nav-link" to='/about' end>{content.menu_about} </NavLink></li>
                <li>
                    <select name="lang" id="lang" onChange={handleChange} >
                        <option value="en">EN</option>
                        <option value="el">EL</option>
                    </select>
                </li>
            </ul>

        </nav>
    )
}

export default Menu