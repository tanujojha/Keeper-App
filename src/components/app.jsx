
import React, {useState} from "react";
import Header from "./header";
import Notes from "./notes";
import Footer from "./footer";
import CreateArea from "./createArea"



function App(){

  const [notes, setNotes] = useState([]);

  function add(note){
    setNotes((prev) => {return [...prev, note]})
    console.log(notes);
  }

  function deleteNote(id){
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index != id;
      });
    });
  }

  return <div>
          <Header/>
          <CreateArea addNote = {add}/>
          {notes.map((note, index) => {return <Notes id = {index} key = {index} title = {note.title} content = {note.content} del = {deleteNote}/>})}
          <Footer/>
        </div>
}

export default App;
