import { useState } from 'react'
import AddNote from './AddNote'

function TextArea() {
    const [userInput, setUserInput] = useState('')
    const [title, setTitle] = useState('')
    const [characterLimiteMessage, setCharacterLimiteMessage] = useState(null)

    function handleInput(e) {
        setUserInput(e.target.value)
    }

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleHeight(e) {
        e.target.style.height = 'inherit'
        e.target.style.height = `${e.target.scrollHeight}px`
    }

    function handleLimite(e) {
        if(e.target.value.length >= 500) {
            setCharacterLimiteMessage('You have exceeded the character limit!')
        } else {
            setCharacterLimiteMessage(null)
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <input 
                value={title} 
                onChange={handleTitle}  
                type="text" 
                placeholder="Title" 
                className='rounded-md shadow-md p-2 m-3 w-80'
                name='title'
                id='title' />
            <textarea 
                value={userInput} 
                onChange={handleInput} 
                onKeyUp={handleLimite}
                onKeyDown={handleHeight}
                className='rounded-md shadow-md p-2 mx-3 resize-none' 
                name="note" 
                id="note" 
                cols="40" 
                rows="5" 
                placeholder="Write your notes here!" 
                maxLength='500'/>
            <p className='text-xs'>Character limit: 500.</p>
            <span className='bg-red-600 text-white text-center px-3 font-bold my-1 rounded-md'>{characterLimiteMessage}</span>
            <AddNote 
                setUserInput={setUserInput}
                setTitle={setTitle}
            />
        </div>
)
}

export default TextArea