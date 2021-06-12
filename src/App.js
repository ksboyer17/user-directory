import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
//setting the initial array as empty
const [employees, setEmployees] = useState([]);
 
useEffect(() => {
  axios('https://randomuser.me/api/?results=20')
  .then(response => {
    console.log("data,information",response) 
    setEmployees(response.data.results)
  })
},[]) 
console.log(employees);
  return (
<div></div>
  );
}

export default App;
