import React from 'react';
import Table from 'react-bootstrap/Table';
import Task from './Task';
import {connect} from "react-redux";
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

const TaskList = ()=>{
    return(
        <>
 <Table 
 striped bordered hover variant="dark"
 style={{marginTop:'30px'}} 
 className='container'>
  <thead>
    <tr className='text-info'>
      <th>Tasks</th>
      <th>Added On</th>
      <th>Status</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   <Task/>
  </tbody>
</Table>
</>
    );
};

// const mapStateToProps = (state) =>{
//   console.log(state )
//   const tasks = state.firestore.ordered.tasks;
//   return {
//     tasks:tasks,
//     // uid:state.firebase.auth.uid
//   };
// };

 export default compose(
  firestoreConnect(() => ['tasks']), // or { collection: 'todos' }
  connect((state, props) => ({
    tasks: state.firestore.ordered.tasks
  }))
  
)(TaskList)