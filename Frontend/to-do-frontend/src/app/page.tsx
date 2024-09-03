'use client';
import { useState } from "react";

export default function Home() {

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addnote = ()=>{
    console.log("adding note");
  }

  const deleteNote = (index:number)=>{
    console.log("deleting note",index);
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Mis Notas</h1>

      <form onSubmit={addnote} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Agregar una nueva nota..."
          className="flex-grow"
        />
        <button type="submit">
          <p>Icon</p>
          Agregar
        </button>
      </form>

      <div className="space-y-2">
        {notes.map((note, index) => (
          <div key={index}>
            <div className="flex items-center justify-between p-4">
              <p>{note}</p>
              <button
                onClick={() => deleteNote(index)}
              >
                <p>icon</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No hay notas. ¡Agrega una!
        </p>
      )}
    </div>
  );
}
