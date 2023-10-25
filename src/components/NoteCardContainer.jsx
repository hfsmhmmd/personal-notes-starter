import React from "react";
import NoteCard from "./NoteCard";
function NoteCardContainer(props) {
  const { notes, handleDeletedNote } = props;
  // const {id,title, body, createdAt,archived } = notes;
  const collectDeletedNote = (id) => {
    //
    const deletedNote = notes.find((note) => note.id === id);
    console.log("deletedNote", deletedNote);
    handleDeletedNote(id);
    // getDeletedNote(id); // Call the function passed as a prop with the note id
  };
  return (
    <div className="basis-3/5 flex flex-row   flex-wrap  justify-center max-h-96 ">
      {notes.map((note) => (
        <NoteCard
          title={note.title}
          content={note.body}
          dateStamp={note.createdAt}
          id={note.id}
          deleteNote={collectDeletedNote}
        />
      ))}
    </div>
  );
}

export default NoteCardContainer;
