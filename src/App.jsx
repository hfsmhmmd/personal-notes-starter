import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import NoteFormContainer from "./components/NoteFormContainer";
import HeaderPage from "./components/HeaderPage";

import NoteCardContainer from "./components/NoteCardContainer";
import { getInitialData } from "./utils/index";
import React, { useState } from "react";
function App() {
  const title = "None";
  const content = "ini conteeeent";
  const [notes, setNotes] = useState(getInitialData());
  const [openForm, setOpenForm] = useState();

  const handleSearch = (query) => {
    const filteredNotes = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.body.toLowerCase().includes(query.toLowerCase())
      );
    });

    setNotes(filteredNotes);
  };

  const tryHandleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleNewNotes = (newNote) => {
    const latestId = notes.length > 0 ? notes[notes.length - 1].id : 0;

    const newId = latestId + 1;

    const formattedNewNote = {
      id: newId,
      title: newNote.NoteTitle,
      body: newNote.NoteContent,
      createdAt: new Date(),
      archive: newNote.archive || false,
    };
    setNotes([...notes, formattedNewNote]);
  };

  return (
    <div className=" w-screen h-screen ">
      <HeaderPage onSearch={handleSearch} />
      <hr></hr>
      {openForm ? (
        <NoteFormContainer handleNoteSubmit={handleNewNotes} />
      ) : null}

      <div className="fixed bottom-4 right-3">
        {openForm ? (
          <button className="btn btn-circle" onClick={() => setOpenForm(false)}>
            <CloseOutlined />
          </button>
        ) : (
          <button className="btn btn-circle" onClick={() => setOpenForm(true)}>
            <PlusOutlined />
          </button>
        )}
      </div>
      <NoteCardContainer
        notes={notes}
        handleDeletedNote={tryHandleDeleteNote}
      ></NoteCardContainer>
    </div>
  );
}

export default App;
