import DeleteButton from "./DeleteButton"

function Note({ date, note, id, deleteNote, title, handleModal, handleNoteModal }) {

    return (
        <div 
            className='bg-emerald-100 w-80 h-52 content-start m-5 flex flex-col justify-between rounded-md'>
                <div>
                    <div className="flex justify-between p-1">
                        <p className="text-left font-bold font-mono text-emerald-900 text-xs">{date} Hs.</p>
                        <DeleteButton deleteNote={deleteNote} id={id} />
                    </div>
                    <div className="cursor-pointer h-40 overflow-auto" onClick={handleModal}>
                        <div className="cursor-pointer h-40" onClick={() => handleNoteModal(id)}>
                            <p className="bg-green-200 rounded-md mx-3 mb-2 text-left text-emerald-950 font-bold">{title}</p>
                            <p className="mx-3 mb-2 text-left text-emerald-950">{note}</p>
                        </div>
                    </div>
                </div>
        </div>
)
}

export default Note
