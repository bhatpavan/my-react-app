import "./Welcome.css"

export function Welcome(){
    return (
        <div className="welcome">
            <img className="welcome-img" src={require("../assets/Group 77.png")}/>
            <h1>Online Expereinces</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}