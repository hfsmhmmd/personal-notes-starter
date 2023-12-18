import React, { useState } from "react";
import FormNote from "./FormNote";

function NoteFormContainer({ handleNoteSubmit }) {
  return <FormNote handleNoteSubmit={handleNoteSubmit} />;
}
export default NoteFormContainer;
