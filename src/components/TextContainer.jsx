import TextArea from "./TextArea"
import { useState } from 'react'
import Validation from "./Validation"

function Container({notesArr, setNotesArr}) {

    const [validation, setValidation] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const date = new Date().toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false})
        const note = e.target.note.value
        const id = Math.random().toString(36).substring(2)
        const title = e.target.title.value

        const newNote = {
            title,
            date,
            note,
            id
        }

        if(note === '') {
            setValidation(true)
            return
        } 
            
        setNotesArr([newNote, ...notesArr])
        localStorage.setItem('notes', JSON.stringify([newNote, ...notesArr]))
        setValidation(false)
    }

    return (
        <form 
            className='mt-10 text-center'
            onSubmit={handleSubmit}>
                {validation && <Validation errorMessage={'Please enter a note!'} />}
                <TextArea />
        </form>
)
}

export default Container