const taskReducer = (state={} ,action)=>{
    switch(action.type){
        case "ADD_TASK":{
            console.log('Added a Task');
            return state
        }
        case "ADD_TASK_ERR":{
            console.log('An Error Occured!');
            return state
        }
        default: return state
    }
};

export default taskReducer;