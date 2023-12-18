import React, { useState } from "react";

function FormNote({ handleNoteSubmit }) {
  const [formData, setFormData] = useState({
    NoteTitle: "",
    NoteContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleNoteSubmit(formData);
    e.target.reset();
  };

  return (
    <div className=" basis-2/5 flex flex-col  items-center m-3.5">
      <div className="flex flex-col items-center border-2 border-sky-200  rounded-md space-y-3 px-2 py-3 ">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <h2 className="py-1">Note Title</h2>
            <input
              name="NoteTitle"
              type="text"
              id="title"
              className="block border-2  border-sky-200 bg-gray-100   rounded-sm w-80 "
              value={formData.NoteTitle}
              onChange={handleInputChange}
              placeholder=" Note title"
            />
          </div>

          <div>
            <h2 className="py-1">Notes </h2>
            <textarea
              id="content"
              name="NoteContent"
              type="text"
              value={formData.NoteContent}
              onChange={handleInputChange}
              placeholder=" Describe your Note"
              className="border-2 border-sky-200  rounded-sm  w-80  h-96 bg-gray-100  text-gray-700"
            ></textarea>
          </div>

          <button
            className="w-2/5 text-white bg-gradient-to-r from-blue-500
         via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
         focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
          shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormNote;
