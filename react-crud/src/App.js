import React  from 'react';
import './App.css';
import EmployeeDetails from './EmployeeDetails';
import EditEmployee from './EditEmployee';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Login from './Login';
function App(props) {
  return (
 
     <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
          <Route exact path="/employeedetails" component={EmployeeDetails} />
          <Route exact path="/EditEmployee/editID/:id" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
 
  );
}
 
export default App;