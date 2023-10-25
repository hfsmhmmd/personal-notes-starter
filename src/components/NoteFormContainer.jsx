import React, { useState } from "react";
import FormNote from "./formNote";

function NoteFormContainer({ handleNoteSubmit }) {
  return <FormNote handleNoteSubmit={handleNoteSubmit} />;
}
export default NoteFormContainer;
