import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
export default function TaskBody(){
return(
 <div className='Task-holder'> 
  <div className='Inner-Task-Holder'>
   <div className='task'>
    task
   </div>
   <div className='Delete-Button'>
   <HighlightOffOutlinedIcon/>
   </div>
  </div>
  
 </div>  
)
}
