import React from "react";

export default function DeleteNoteButton({ deleteNoteHandler }) {
  return (
    <button
      className="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group "
      onClick={deleteNoteHandler}
    >
      <span className="relative px-1.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Delete
      </span>
    </button>
  );
}
