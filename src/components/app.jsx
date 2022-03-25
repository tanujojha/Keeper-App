
import React, {useState} from "react";
import Header from "./header";
import Notes from "./notes";
import Footer from "./footer";
import CreateArea from "./createArea"



function App(){

  const [notes, setNotes] = useState([]);       // state to store the notes in an array, it will be an array of objects

  function add(note){                           // A function to add note in the array, here we are passing the note from createArea.jsx
    setNotes((prev) => {return [...prev, note]})      //setting the notes array using the previous values and adding a new note that was passed in
    console.log(notes);
  }

  function deleteNote(id){                // A function to delete note with the id that is passed over from the notes.jsx
    setNotes((prev) => {                  // setting the notes array using the previous values
      return prev.filter((item, index) => {     // filtering the previous values or array of notes
        return index !== id;                    // returning all the items whose id is not equall to index
      });
    });
  }

  return <div>
          <Header/>
          <CreateArea addNote = {add}/>       {/* passing the add function as a prop to createArea */}
          {/* mapping through the notes array to render all the notes using the <Notes/> component */}
          {notes.map((note, index) => {return <Notes id = {index} key = {index} title = {note.title} content = {note.content} del = {deleteNote}/>})}
          <Footer/>
        </div>
}

export default App;
