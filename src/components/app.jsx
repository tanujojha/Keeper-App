
import React from "react";
import Header from "./header";
import Notes from "./notes";
import Footer from "./footer";
import notes from "../notes-list"


function App(){
  return <div>
          <Header/>
          {notes.map(note => <Notes key = {note.key} title = {note.title} content = {note.content}/> )}
          <Footer/>
        </div>
}

export default App;
