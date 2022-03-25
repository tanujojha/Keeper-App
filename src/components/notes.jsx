import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';      // material ui icon for delete(trash can)



function Notes(props){

  return <div className = "note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {/* onClick calling an anoymous func and inside that getting hold of the del using props and passing the id of the note */}
            <button onClick = {() => {props.del(props.id)}}><DeleteIcon/></button>  {/* delete component for trash can */}
          </div>
}


export default Notes;
