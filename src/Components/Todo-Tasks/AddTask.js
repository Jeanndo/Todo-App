import React, { Component } from "react";
import {addTask} from '../../Actions/taskActions';
import {connect} from 'react-redux';

class AddTask extends Component {
  state = {
   Task: "",
  };

  ChangeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTask(this.state)
    console.log(this.state);
  };
  render() {
    return (
     
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "40px" }}
          onSubmit={this.submitHandler}
        
        >
          {/* <legend>
            <h4>AddTask</h4>
          </legend> */}
          <div className="mb-3" style={{marginLeft:'20%',marginRight:'20%'}}>
            <label htmlFor="Task" className="form-label">
              Add Task
            </label>
            <input
              type="text"
              className="form-control"
              id="Task"
              onChange={this.ChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{marginLeft:'45%'}}>
           Add Task
          </button>
        </form>
    );
  }
}
const mapDispatchToProps =dispatch=>{
  return {
    addTask: (task) => dispatch(addTask(task))
  };
}
export default connect(null,mapDispatchToProps)(AddTask);
