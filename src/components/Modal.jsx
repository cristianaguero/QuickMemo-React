import closeBtn from '../img/close.svg'

function Modal({ handleModal, noteModal }) {
    const { date, title, note } = noteModal
    return (
        <div className='fixed rounded-3xl bg-slate-900/75 top-8 left-8 right-8 bottom-8'>
            <div className="absolute right-12 top-12 w-12 h-12">
                <img 
                    className='w-full cursor-pointer' 
                    src={closeBtn} 
                    alt="close button"
                    onClick={handleModal} />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4 '>
                <p className="text-white font-bold font-mono text-xs mb-3">{date}</p>
                <p className="text-white font-bold text-4xl mb-3">{title}</p>
                <p className="text-white text-2xl">{note}</p>
            </div>
        </div>
)
}

export default Modal