import React, { Component } from "react";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/navigation.component";
import SignIn from "./components/signInForm/sign";
import Register from "./components/Resgister/register";
import Logo from "./components/Logo/logo.component";
import FoodLinkForm from "./components/FoodLinkForm/Foodlinkfrom.component";
import Rank from "./components/Rank/rank";
import FoodImageBox from "./components/FoodimageBox/foodimagebox.component";
import ListFoodContent from "./components/ListFoodContent/ListFoodContent";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "8abc6096267046fe8864cc5a0da7b88a",
});
const ParticlesOpton = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodContents: [],
      input: " ",
      imageUrl: " ",
      route: "signin",
    };
  }
  grabFoodContents = (data) => {
    const foodItems = data.outputs[0].data.concepts;
    return foodItems.map((foodItem) => {
      const name = foodItem.name;
      const val = Number(foodItem.value);
      return {
        name,
        val,
      };
    });
  };
  displayFoodContents = (foodItems) => {
    this.setState({ foodContents: foodItems });
  };
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FOOD_MODEL, this.state.input)
      .then((response) =>
        this.displayFoodContents(this.grabFoodContents(response))
      )
      .catch((err) => console.log(err));
  };
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  render() {
    const { imageUrl, foodContents, route } = this.state;
    return (
      <div className="App ">
        <Particles className="particles" params={ParticlesOpton} />
        {route === "home" ? (
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <div className="section-app shadow-5">
              <div className="item2">
                <Rank />
                <FoodLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FoodImageBox imageUrl={imageUrl} />
              </div>
              <div className="food-container">
                <h3 className="food">Food name and Ingredients</h3>
              </div>{" "}
              <ListFoodContent
                imageUrl={imageUrl}
                foodContents={foodContents}
                displayFoodContents={this.displayFoodContents}
              />
            </div>
          </div>
        ) : route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
