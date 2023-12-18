import React from "react";
import NoteCard from "./NoteCard";
function NoteCardContainer(props) {
  const { notes, handleDeletedNote } = props;
  // const {id,title, body, createdAt,archived } = notes;
  const collectDeletedNote = (id) => {
    //
    const deletedNote = notes.find((note) => note.id === id);

    handleDeletedNote(id);
    // getDeletedNote(id); // Call the function passed as a prop with the note id
  };
  return (
    <div
      className="basis-3/5 flex flex-row   flex-wrap  justify-center 
    
    max-h-96 "
    >
      {notes.length != 0 ? (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            content={note.body}
            dateStamp={note.createdAt}
            id={note.id}
            deleteNote={collectDeletedNote}
          />
        ))
      ) : (
        <div>
          <p className="text-xl">Tidak ada Notes</p>
        </div>
      )}
    </div>
  );
}

export default NoteCardContainer;
