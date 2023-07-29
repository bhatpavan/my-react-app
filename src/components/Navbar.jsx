import reactlogo from "../assets/reactjs-icon.png"
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="nav">
            <img src={require("../assets/reactjs-icon.png")} className="nav-img"/>
            <h3>React Facts</h3>
            <h4>React Course-Project-1</h4>
        </div>

    )
}