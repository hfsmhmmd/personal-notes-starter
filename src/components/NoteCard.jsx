import React, { useState } from "react";
import DeleteNoteButton from "./DeleteNoteButton";
function NoteCard(props) {
  const { title, content, dateStamp, id, deleteNote } = props;
  const deleteNoteHandler = () => {
    deleteNote(id);
  };
  return (
    <div className=" bg-sky-200 border-2 rounded  border-sky-400  w-80 md:w-94 h-64 py-2 px-2 mr-2 my-2 ">
      <p className=" font-bold text-md mb-1 truncate">{title}</p>
      <div className="h-4/6 overflow-y-auto border border-black-400">
        <p className="text-gray-700  text-sm">{content}</p>
      </div>
      <p className="">{dateStamp.substr(0, 10)}</p>
      <div className="h-1/6 flex flex-row">
        <DeleteNoteButton deleteNoteHandler={deleteNoteHandler} />
      </div>
    </div>
  );
}

export default NoteCard;
