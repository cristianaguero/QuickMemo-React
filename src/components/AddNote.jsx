
function AddNote({ setUserInput, setTitle }) {
    return (
        <div>
            <input 
                type='submit' 
                onClick={() => {
                    setTimeout(() => {
                        setUserInput('');
                        setTitle('');
                        }, 100);
                    }}
                className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold my-2 py-2 px-4 rounded-md w-80 cursor-pointer shadow-md mx-3' 
                value='Add Note' />
        </div>
)
}

export default AddNote
