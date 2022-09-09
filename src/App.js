import React from "react";
import CardList from "./CardList";
import SearchBox from "./Searchbox.js";
import Scroll from "./Scroll";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  };

  render() {
    const filteredRobot = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.Searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1 className={"tc"}>Loading</h1>;
    } else {
      return (
        <div className="tc ">
          <h1 className="f1">ROBO FRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobot} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
