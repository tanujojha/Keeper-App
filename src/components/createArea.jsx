import React , {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function changeHandel(event){
    const {name, value} = event.target;

    setNote((prev) => {return {...prev, [name]: value}});
  }

  function submitHandel(event){
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input value = {note.title} onChange = {changeHandel} name="title" placeholder="Title" />
        <textarea value = {note.content} onChange = {changeHandel} name="content" placeholder="Take a note..." rows="3" />
        <button onClick = {submitHandel}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
