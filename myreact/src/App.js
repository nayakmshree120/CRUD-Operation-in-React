import {useState,useEffect,Fragment} from 'react';
import axios from "axios" ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReadOnlyRow from './Components/ReadOnlyRow'
import Editrow from './Components/Editrow';
 
export default function App()
 {
  const[userData,setUserData]=useState([]);

  const[addFormData,setAddFormData]=useState({
    uid:'',
    email:'',
    firstname:'',
    lastname:'',
    avatar:''
  })

  const[editFormData,setEditFormData]=useState({
    uid:'',
    email:'',
    firstname:'',
    lastname:'',
    avatar:''
  })

  const[editUserId,setEditUserId]=useState(null);

  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;
  
    setAddFormData(newFormData);
  }
  
  const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);

  }

  const handleAddFormSubmit=(event)=>{
    event.preventDefault();

    const newContact={
        id:addFormData.uid,
        email:addFormData.email,
        first_name:addFormData.firstname,
        last_name:addFormData.lastname,
        avatar:addFormData.avatar
    }
    const newUserData=[...userData ,newContact];
    setUserData(newUserData);
  }

  const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    
    const editedContact={
      id:editUserId,
      id:editFormData.uid,
      email:editFormData.email,
      first_name:editFormData.firstname,
      last_name:editFormData.lastname,
      avatar:editFormData.avatar
  }
  const newContacts=[...userData];
  const index=userData.findIndex((user)=>user.id== editUserId)

   newContacts[index]=editedContact;
   setUserData(newContacts);
   setEditUserId(null);
  }

  const handleEditClick=(event,user)=>{
    event.preventDefault();
    setEditUserId(user.id);

    const formValues={
      id:user.uid,
      email:user.email,
      first_name:user.firstname,
      last_name:user.lastname,
      avatar:user.avatar
    }
    setEditFormData(formValues);
  }
  
  const handleCancelClick=()=>{
    setEditUserId(null);
  }

  const handleDeleteClick=(userid)=>{
    const newContacts=[...userData];
    const index=userData.findIndex((user)=>user.id===userid)
    newContacts.splice(index,1);
    setUserData(newContacts);
  }
  const mystyle = {
    color: "darkorange",
    textAlign:"center",
    fontSize:"30px",
    fontWeight: "bold"
  };
  useEffect(()=>{
    axios.get('https://reqres.in/api/users?page=2')
    .then(response =>{
        setUserData(response.data.data)
        console.log(response);
    })
},[])
return (
    <>
    <div className="container-fluid">
      <h3 style={mystyle}>User Details</h3>
      <form onSubmit={handleEditFormSubmit}>
    <table className="table table-bordered border-success m-2 p-2 ">
      <thead>
      <tr>
        <th >Id</th>
        <th >Email</th>
        <th>First Name</th>
        <th >Last Name</th>
        <th>Avatar</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
          userData.map((user)=>(
            <Fragment>
              {editUserId== user.id ?( <Editrow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />) 
              : (<ReadOnlyRow user={user} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
            
            
            </Fragment>
          )
          
          )
        }

    </tbody>
    </table>
    </form>
    <h2 style={mystyle}>Add  User Details</h2>
        <form onSubmit={handleAddFormSubmit} >
          <input type="text" name="uid" className="m-2 p-1" placeholder="enter id" required="required" onChange={handleAddFormChange} />
          <input type="text" name="email" className="m-2 p-1" placeholder="enter emailid" required="required" onChange={handleAddFormChange} />
          <input type="text" name="firstname" className="m-2 p-1" placeholder="enter first name" required="required" onChange={handleAddFormChange} />
          <input type="text" name="lastname" className="m-2 p-1" placeholder="enter lastname" required="required" onChange={handleAddFormChange} />
          <input type="text" name="avatar"  className="m-2 p-1" placeholder="enter avatar  link" required="required" onChange={handleAddFormChange} />
          <button className="m-2 btn btn-success" type="submit" >Add</button>
        </form>

    </div>
    </>
  );
}
