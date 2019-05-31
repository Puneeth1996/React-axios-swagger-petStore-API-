import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

import Form from "./petForm";
import Table from "./Table";

class App extends React.Component {
  state = {
    name: [],
    id: [],
    error: false
  };
  getUser = async e => {
    e.preventDefault();
    const petName = e.target.elements.petName.value;
    var randomnumber = Math.floor(Math.random() * (10000 - 500 + 1)) + 500;
    const axios = require("axios");
    const params = {
      id: randomnumber,
      name: petName
    };

    let res = await axios
      .post(`https://petstore.swagger.io/v2/pet`, params)
      .catch(err => console.log(err + "posting error"));
    console.log(res);

    var name = this.state.name;
    name.push(petName);
    var id = this.state.id;
    id.push(id);
    this.setState({ name, id });
    console.log(id + " " + name);
  };

  componentDidMount() {
    axios
      .get(`https://petstore.swagger.io/v2/pet/9743`)
      .then(response => {
        var name = this.state.name;
        name.push(response.data.name);
        var id = this.state.name;
        id.push(id);
        this.setState({ name, id });
        this.setState({ error: false });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div className="App">
        <Form getUser={this.getUser} />
        <Table name={this.state.name} id={this.state.id} />
        <b>{this.state.error ? "Err!!!" : "No Error"}</b>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
