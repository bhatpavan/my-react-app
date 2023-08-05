import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";
import "./App.css"

function App() {
  let cardelements = [{
    imgUrl: require("./assets/image 12.png"),
    country: "USA",
    noOfRatings: 12,
    rating: 5.0,
    openSpots: 20,
  },
  {
    imgUrl: require("./assets/image 12.png"),
    country: "USA",
    noOfRatings: 12,
    rating: 5.0,
    openSpots: 0,
  },
  {
    imgUrl: require("./assets/image 12.png"),
    country: "IND",
    noOfRatings: 12,
    rating: 3.0,
    openSpots: 20,
  }]
  return (
    <>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <div className="app-cards">
        {cardelements.map(x =>
          <Card
            imgUrl={x.imgUrl}
            country={x.country}
            noOfRatings={x.noOfRatings}
            rating={x.rating}
            openSpots={x.openSpots}
            >
          </Card>)}
      </div>

    </>
  )
}

export default App;
