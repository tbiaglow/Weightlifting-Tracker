import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';
import {MyWindowPortal} from "../components/MyWindowPortal";

class User_Deadlift extends Component {
  state = {
    //Will hold user's history
    all: [],
    //Will hold x and y values for charting
    data: [],
  };

  componentDidMount() {
    this.loadUser()

  }

  //Function to display entire history, run immediately
  loadUser = () => {
    //Reset the all array in case it's already filled from another function
    this.setState({ all: [] })
    //Get the user whose id matches the id in the URL
    API.getUser(this.props.match.params.id)
      .then(res => {
        //Set all to the desired user data
        this.setState({ all: res.data[0].deadlift[0].history })
        // console.log(res.data[0].deadlift[0].history)
    //     console.log(this.state.all.pop())
        var array1 = this.state
        // console.log(array1.all[0])
      }).then(() => {
        // console.log(this.state)
        var array1;
        array1 = this.state
        // console.log(array1)
        // var data = [];
        // var labels = [];
        // console.log(array1.all[0].sets[array1.all[0].sets.length - 1])
        var oneRMArray = this.convertTo1RM(array1);
        // console.log(oneRMArray)
        // console.log(array1.all[0])
        var data = this.formArray(array1, oneRMArray);
        // console.log(data)
        var data = this.trimArray(data)
        // console.log(data)
        // var derivativeData
        var data = this.differentiate(data)

        this.setState({data: data})
        // console.log(this.state.data)  

    })
      .catch(err => console.log(err));
  };

  // Function to convert weight at a given # of reps and RPE to a 1RM, RPE 10 estimate
  convertTo1RM = array => {
    var oneRMArray = [];
    for (var i = 0; i < array.all.length; i ++) {
      if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].RPE) {
      switch (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].RPE) {
        case 10:
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          break;
        case 9.5: 
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.98
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.94
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          break;
        case 9:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          break;
        case 8.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.94
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          break;
        case 8:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.68
          }
          break;
        case 7.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.91
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.67
          }
          break;
        case 7:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.71
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.68
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.65
          }
          break;
        case 6.5:        
          if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.88
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.85
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.82
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.8
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.77
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.75
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.72
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.69
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.67
          }
          else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
            oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.64
          }
          break;
      }
      } else {
        if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 1){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 2){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.96
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 3){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.92
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 4){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.89
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 5){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.86
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 6){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.84
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 7){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.81
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 8){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.79
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 9){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.76
        }
        else if (array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].reps === 10){
          oneRMArray[i] = array.all[i].sets[array.all[i].sets.length - 1].workPerSet[0].weight / 0.74
        }
      }
    }
    return oneRMArray
  }
  
  // Function to create array of objects containing the date and lift weight on that date
  formArray = (array, oneRMArray) => {
    var data = []
    for (var i = 0; i < array.all.length; i++) {
      var d;
      var monthString = array.all[i].month.toString();
      var dayString = array.all[i].day.toString();
      var yearString = array.all[i].year.toString();
      var d = new Date(monthString + "-" + dayString + "-" + yearString);
      // console.log(d)
      var dParsed = Date.parse(d);
      // console.log(millisecondDate)

      data[i] = {
          x: dParsed,
          y: oneRMArray[i]
          // type: 'scatter'
      } 
    }
    return data
  }

  // Get rid of all values that are not greater than all previous values to eliminate graphical noise
  trimArray = array => {
    var arrayMax = array[0].y;
    for (var i = 0; i < array.length; i++) {
      if(array[i - 1]) {
        if (array[i].y < arrayMax) {
          array.splice(i, 1);
          i--;
          // array[i].y = NaN;
        } else if (array[i].y >= arrayMax) {
          arrayMax = array[i].y
        }
      }
    }
    return array
  }

  //Function to differentiate the data to get user's RATE of progress
  differentiate = data => {
    for (var i = 1; i < data.length - 1; i++) {
      data[i].yDeriv = ((data[i + 1].y - data[i - 1].y) / (data[i + 1].x - data[i - 1].x)) * 86400000 //multiply by number of milliseconds per day to get daily rate of change
    }
    data[data.length - 1].yDeriv = ((data[data.length - 1].y - data[data.length - 2].y) / (data[data.length - 1].x - data[data.length - 2].x)) * 86400000
    return data
  }

  //NOT WORKING, don't know why
  //==========================================================================
  loadRecent = () => {
      this.setState({ all: [] })
      API.getUser(this.props.match.params.id)
        .then(res => {
            this.setState({ all: res.data[0].deadlift[0].history.pop() })
            this.state.all = [this.state.all]
            console.log(this.state.all.length)
        })
        .catch(err => console.log(err));
  };
  //===========================================================================

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Deadlift History</h1>
            </Jumbotron>
            <br></br>
            <button onClick={() => this.loadUser()}>Display All</button>
            {/* NOT WORKING, don't know why */}
            {/* ========================================================================== */}
            <button onClick={() => this.loadRecent()}>Display Most Recent</button>
            {/* ========================================================================== */}
            <button><Link to={"/users/" + this.props.match.params.id}>Back</Link></button>
            <button><Link to={"/"}>Logout</Link></button>
            {/* If the user has data, map it */}
            {this.state.all.length ? (
                <List>
                    {this.state.all.map(i => (
                        <div>
                        Year: {i.year}
                        <br></br>
                        Month: {i.month}
                        <br></br>
                        Day: {i.day}
                        <br></br>
                        Volume: {i.sets.map(i2 => (
                            <div>
                                Sets: {i2.sets}
                                <br></br>
                                Reps: {i2.workPerSet[0].reps}
                                <br></br>
                                Weight: {i2.workPerSet[0].weight}
                                <br></br>
                                RPE: {i2.workPerSet[0].RPE}
                            </div>
                        ))}
                        <br></br><br></br>
                        </div>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-6 sm-12">
          <MyWindowPortal>
          <h2>Deadlift Progress (y, pounds) and its First Derivative (yDeriv, pounds per day)</h2>
          <ResponsiveContainer width='99%' height={500} >
          <LineChart
            data={this.state.data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="yDeriv" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
          </MyWindowPortal>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User_Deadlift;