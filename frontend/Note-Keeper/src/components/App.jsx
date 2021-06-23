import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import axios from "axios";

function App() {
  const [notes, setnotes] = React.useState([]);
  
  React.useEffect(()=>{
    refreshList();
  });
  
  function refreshList(){
    axios.get("/api/note").then((res)=>{
      const note=res.data;
      setnotes(note);
    }).catch((err)=>console.log(err));
  }

  function addNote(note) {
    axios.post("/api/note/",note).then((res)=>refreshList());
  }

  function deleteNote(id) {
    axios.delete(`/api/note/${id}/`).then((res)=>refreshList());
  }
  
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      )))}

      <Footer />
    </div>
  );
}

export default App;
