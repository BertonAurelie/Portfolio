
import { useState} from "react";
import Modal from '../modal/Modal'
import { FaPlus } from "react-icons/fa6";

function ModalCard(props) {
    const item = props.item;
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = (() => {
        setIsOpen(false);
    });

    const handleClick = (() => {
        setIsOpen(true);
    });
    
    return (
            <article className='card' key={item.id}>
                <img 
                    src={item.cover}  
                    alt = "image du projet"
                />
                <h2 className="card__title">{item.title}</h2>    
            
                <Modal 
                    key={item.id}
                    isOpen={isOpen}
                    handleClose={handleClose}
                    children={
                        <div className ="ss">                            
                            <h1>{item.title}</h1>
                            <small>{item.description}</small>
                        </div>
                    }
                />
                
                <button type="button" onClick={handleClick}>
                    <FaPlus/>
                </button>
            </article>
    );
}

export default ModalCard