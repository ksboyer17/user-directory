import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Table from './components/Table'

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
<div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
   );
 }
)
}
</thead>
</div>
)
 


 

export default App;
