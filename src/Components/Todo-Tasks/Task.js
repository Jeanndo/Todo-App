
export default function Task(){
    return (
        <>
        <tr>
        <td>Task1</td>
        <td>on june</td>
        <td>
        <span className="material-icons" style={{cursor:'pointer'}}>
         check_circle
         </span>
        </td>
        <td>
        <span className="material-icons text-danger" style={{cursor:'pointer'}}>
        delete
        </span>
        </td>
      </tr> 
        </>
    )
}