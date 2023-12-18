import React, { useState } from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import { showFormattedDate } from "../utils";
function NoteCard(props) {
  const { title, content, dateStamp, id, deleteNote } = props;
  const deleteNoteHandler = () => {
    deleteNote(id);
  };

  const formattedDate = showFormattedDate(dateStamp);
  return (
    <div className=" bg-blue-100 border-2 rounded-xl   w-80  h-56  py-2 px-2 mr-2 my-2 ">
      <p className=" font-bold text-md mb-1 truncate">{title}</p>
      <div className="h-4/6 overflow-y-auto border border-black-400">
        <p className="text-gray-700  text-sm">{content}</p>
      </div>
      <div
        className="relative inline-flex items-center justify-center mr-2
       mb-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group"
      >
        <p
          className="relative px-1.5 py-1 transition-all
         ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
        >
          {formattedDate}
        </p>
      </div>
      <DeleteNoteButton deleteNoteHandler={deleteNoteHandler} />
    </div>
  );
}

export default NoteCard;
