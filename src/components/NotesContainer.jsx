import Note from './Note'

function NotesContainer({ notesArr, deleteNote, handleModal, handleNoteModal }) {

    return (
        <div className='flex flex-row flex-wrap content-start justify-center h-screen'>
            {notesArr.map(( note ) => (
                <Note key={note.id} date={note.date} deleteNote={deleteNote} title={note.title}  note={note.note} id={note.id} handleModal={handleModal} handleNoteModal={handleNoteModal} />
            ))}
        </div>
)
}

export default NotesContainer
