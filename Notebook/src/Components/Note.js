import React from "react";

const Note = ({ note }) => {
  return (
    <li className="note">
      {note.content} <strong>{note.important ? "important" : ""}</strong>
    </li>
  );
};

export default Note;
