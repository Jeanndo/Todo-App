export const addTask = task =>{
    return(dispatch, getState, {getFirebase })=>{
       const firestore = getFirebase().firestore();
        //const authorId = getState().firebase.auth.uid;
        firestore
        .collection("tasks")
        .add({
            ...task,
           // authorId:authorId,
            data:new Date()
        })
        .then(()=>{
            dispatch({
                type: "ADD_TASK",
                task
            });
        })
        .catch(err =>{
            dispatch({
                type: "ADD_TASK_ERR",
                err
            });
        });
    }
}