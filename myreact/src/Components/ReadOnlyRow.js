import {React} from 'react';

const ReadOnlyRow=({user, handleEditClick,handleDeleteClick})=>{

    return(
        
             <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name} </td>
                <td><img src={user.avatar}/></td>
                <td>
                    <button type="button" className="m-2 btn btn-primary" onClick={(event)=>handleEditClick(event,user)} >Edit</button>
                    <button type="button" className="btn btn-danger" onClick={()=>handleDeleteClick(user.id) }>Delete</button>
                </td>
               
            </tr>
        
    )
}

export default ReadOnlyRow;


















