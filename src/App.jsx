import NoteFormContainer from "./components/NoteFormContainer";
import HeaderPage from "./components/HeaderPage";

import NoteCardContainer from "./components/NoteCardContainer";
import { getInitialData } from "./utils/index";
import React, { useState } from "react";
function App() {
  const title = "None";
  const content = "ini conteeeent";
  const [notes, setNotes] = useState(getInitialData());

  const handleSearch = (query) => {
    // Perform the search logic
    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      );
    });

    setNotes(filteredNotes);
  };

  const tryHandleDeleteNote = (id) => {
    console.log("test");
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleNewNotes = (newNote) => {
    const latestId = notes.length > 0 ? notes[notes.length - 1].id : 0;

    const newId = latestId + 1;

    const currentDate = new Date().toISOString().slice(0, 10);

    const formattedNewNote = {
      id: newId,
      title: newNote.NoteTitle,
      body: newNote.NoteContent,
      createdAt: currentDate,
      archive: newNote.archive || false,
    };
    console.log(formattedNewNote);
    setNotes([...notes, formattedNewNote]);
    console.log(notes);
  };

  return (
    <div className=" w-screen h-screen ">
      <HeaderPage onSearch={handleSearch} />
      {/* <HeaderPage /> */}
      <hr></hr>
      {/* top */}
      <div className="flex flex-col w-full h-full ">
        <NoteFormContainer handleNoteSubmit={handleNewNotes} />
        {/* bottom */}
        {notes.length != 0 ? (
          <NoteCardContainer
            notes={notes}
            handleDeletedNote={tryHandleDeleteNote}
          ></NoteCardContainer>
        ) : (
          <div>
            <p>Tidak ada Notes</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
