import React , {useState} from "react";
import Fab from "@mui/material/Fab";            // Floating action button from material ui
import AddIcon from "@mui/icons-material/Add";  // The + icon from material ui icons
import Zoom from '@mui/material/Zoom';          // The animation of the Add (+) button

function CreateArea(props) {

  const [isFocussed, setIsFocussed] = useState(false);      //state to check if the user has clicked the text area

  function isFocussedHandel(){          //setting the isFocussed state to true once the user has clicked the text area
    setIsFocussed(true)
  }

  const [note, setNote] = useState({          //state to store title and content as an object
    title: "",
    content: ""
  });

  function changeHandel(event){              // function to handel change in both the input and the text area
    const {name, value} = event.target;      // destructuring the event object that was send during the occurence of the event stroring the event.target.name and the event.target.value in the name and value

    setNote((prev) => {return {...prev, [name]: value}});     // setting the note using the previous value and returning an object with the prev values and new value
  }

  function submitHandel(event){     // function to handel the click event on the add (+) button and getting hold of the event that was passed in
    props.addNote(note);            // calling the function addNote using the props and passing the note that is stored in the note object
    setNote({                       // again setting it to empty string to look cool
      title: "",
      content: ""
    });
    event.preventDefault();         // preventing the auto submission of the form when add (+) button is clicked
  }

  return (
    <div>
      <form className="create-note">

      {/* Conditional rendering, which means if isFocussed is true only then the input will be rendered */}
        {isFocussed && <input value = {note.title} onChange = {changeHandel} name="title" placeholder="Title" /> }

        <textarea onClick = {isFocussedHandel} value = {note.content} onChange = {changeHandel} name="content" placeholder="Take a note..." rows={isFocussed ? "3" : 1} />

        {/* zoom takes a prop called "in" which is bool, if true then animation happens, here we are setting the value of "in" to the value of isFocussed */}
        <Zoom in = {isFocussed}>
          <Fab onClick = {submitHandel} color="primary" aria-label="add">   {/* floating action button */}
            <AddIcon />     {/* component for the + icon */}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
