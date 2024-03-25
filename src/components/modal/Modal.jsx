import { useRef, useEffect } from 'react';



function Modal(props) {
    const isOpen = props.isOpen
    const handleClose = props.handleClose
    const children = props.children
    const dialogRef = useRef(null);
    const close = () => {
        dialogRef.current?.close();
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen && !dialogRef.current?.open) {
            dialog?.showModal(); 
        } else {
            dialog?.close(); 
        }
    }, [isOpen]);

    return (
        <dialog ref={dialogRef} onClose={handleClose} style={{display: isOpen ? 'block' : 'none' }}>
            {children}
            <button 
                type="button" 
                onClick={close} 
                title="close modal" 
                aria-label="close modal"
                >
                close
            </button>
        </dialog>
    );
}

export default Modal