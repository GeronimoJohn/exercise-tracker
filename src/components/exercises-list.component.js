import React, { Component } from "react";
import { link } from "react-router-dom";
import axios from "axios";

export default class Exerciselist extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercise: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>You are on exercise component</p>
      </div>
    );
  }
}
