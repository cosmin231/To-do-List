import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, updateNotes] = useState([]);

  function addNote(newNotes) {
    updateNotes(prevNotes => {
      return [...prevNotes, newNotes];
    })
  }

  function deleteNotes(id) {
    updateNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      })
    })
  }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}/>
        {notes.map((noteItem, index) => {
          return <Note
          key={index}
          id={index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete={deleteNotes}
          />
        })}
      <Footer />
    </div>
  );
}

export default App;
