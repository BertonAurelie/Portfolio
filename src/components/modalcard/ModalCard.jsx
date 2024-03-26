
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
                        <>    
                            <div className ="modal__title">                        
                                <h1>{item.title}</h1>
                            </div>       
                            <div className ="modal__description">
                                <h3 className="modal__h3">Description du projet :</h3>    
                                <p>{item.description}</p>
                            </div>                                             
                            <div className ="modal__tags">
                                <h3 className="modal__h3">Outils utilisés :</h3>    
                                <ul>
                                    {item.tags.map((tag, index) => (
                                        <li key={index}>{tag}</li>
                                    ))}
                                </ul>
                            </div> 
                            <div className ="modal__site">
                                <a href ={item.site} target="_blank">Visiter le site</a>
                            </div> 
                            <div className ="modal__pictures">    
                                {item.pictures.map((image) => (
                                    <img key={item.id} src = {image} className="modal__pictures--img"></img>
                                ))}
                            </div>                
                        </>
                    }
                />
                
                <button type="button" onClick={handleClick} id="button" >
                    <FaPlus/>
                </button>
            </article>
    );
}

export default ModalCard