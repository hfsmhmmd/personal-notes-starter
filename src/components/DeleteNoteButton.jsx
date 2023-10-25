import React from "react";

export default function DeleteNoteButton({ deleteNoteHandler }) {
  return (
    <button
      className="relative inline-flex items-center justify-center p-2.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
      onClick={deleteNoteHandler}
    >
      <span className="relative px-1.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Delete
      </span>
    </button>
  );
}
