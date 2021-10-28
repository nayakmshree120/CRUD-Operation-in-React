import {React} from 'react';

const Editrow=({editFormData ,handleEditFormChange,handleCancelClick})=>{

    return(
        <tr >
            <td>
                <input type="text" required="required" name="uid" placeholder="enter a id" value={editFormData.uid} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name="email" placeholder="enter emailid" required="required" value={editFormData.email} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" name="firstname" placeholder="enter first name" required="required" value={editFormData.firstname} onChange={handleEditFormChange}/>
            </td>
            <td>
                <input type="text" name="lastname" placeholder="enter lastname" required="required" value={editFormData.lastname} onChange={handleEditFormChange} />
            </td>
            <td>
            <input type="text" name="avatar" placeholder="enter avatar link" value={editFormData.avatar}  onChange={handleEditFormChange} />
            </td>
            <td>
                <button type="submit" className=" m-1 p-1 btn btn-secondary">Save</button>
                <button type="button" className="btn btn-danger" onClick={handleCancelClick}>Cancel</button>
            </td>
       
    </tr> 
        
    )
}
export default Editrow;




















