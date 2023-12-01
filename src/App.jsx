import { useState, useEffect } from "react"
import Header from "./components/Header"
import TextContainer from "./components/TextContainer"
import NotesContainer from "./components/NotesContainer"
import Modal from "./components/Modal"

function App() {

  const [notesArr, setNotesArr] = useState([])
  const [modal, setModal] = useState(false)
  const [noteModal, setNoteModal] = useState({})

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))
    if(notes) {
      setNotesArr(notes)
    }
  } , [])

  const deleteNote = (id) => {
    const newNotesArr = notesArr.filter((note) => note.id !== id)
    setNotesArr(newNotesArr)
    localStorage.setItem('notes', JSON.stringify(newNotesArr))
  }

  function handleModal() {
      if(!modal) {
        setModal(true) 
      } else { 
        setModal(false) 
      }
  }

  function handleNoteModal(id) {
    const note = notesArr.find((note) => note.id === id)
    setNoteModal(note)
  }

  return (
    <div className="container mx-auto my-10">
      <Header />
      <TextContainer 
        notesArr={notesArr}
        setNotesArr={setNotesArr}
      />
      <NotesContainer 
        notesArr={notesArr}
        setNotesArr={setNotesArr}
        deleteNote={deleteNote}
        handleModal={handleModal}
        handleNoteModal={handleNoteModal}
      />
      {modal && <Modal handleModal={handleModal} noteModal={noteModal}/>}
    </div>
  )
}

export default App
