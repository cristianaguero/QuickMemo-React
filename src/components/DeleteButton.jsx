
function DeleteButton({ deleteNote, id }) {

    function handleDelete() {
        const confirmation = confirm('Are you sure you want to delete this note?')

        if (confirmation) {
            deleteNote (id)
        }
    }

    return (
        <div>
            <button 
                type="button"
                className="bg-emerald-900 text-emerald-100 font-bold font-mono text-xs w-8 h-8 hover:bg-emerald-700 rounded-md"
                onClick={handleDelete}>
                    X
            </button>
        </div>
)
}

export default DeleteButton
