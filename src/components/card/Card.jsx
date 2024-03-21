import {data} from '../../data/data'
import { useState} from "react";
import Modal from '../modal/Modal'
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

function Card() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClose = (() => {
        setIsOpen(false);
    });

    const handleClick = (() => {
        setIsOpen(true);
    });

    return (
        <>
            {data.map((item) => (
                <article className='card' key={item.id}>
                    <img 
                        src={item.cover}  
                        alt = "image du projet"
                        onClick={handleClick}
                        
                    />
                    <h2 className="card__title">{item.title}</h2>    
                
            <Modal 
                isOpen={isOpen} 
                handleClose={handleClose}
            >
                {/* Le contenu de la modale */}
                <div className ="modal__open">
                    <h1>{item.title}</h1>
                    <small>{item.description}</small>
                </div>
            </Modal>
            
            
            <button
                type="button"
                onClick={handleClick}
            >
                <FaPlus />
            </button>
                </article>
            
            ))}    
            
            
        </>
    )
}
export default Card