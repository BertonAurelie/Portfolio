
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
                        <div className ="modale__content">    
                            <div className ="modale__title">
                                <h3 className="modale__h2">nom du projet :</h3>                                
                                <h1>{item.title}</h1>
                            </div>       
                            <div className ="modale__description">
                            <h3 className="modale__h2">Description du projets :</h3>    
                            <p>{item.description}</p>
                            </div>                                             
                            <div className ="modale__tags">
                            <h3 className="modale__h2">Outils utilisés :</h3>    
                            <p>{item.tags}</p>
                            </div> 
                            <div className ="modale__site">
                            <button><a href ={item.site}></a>Visiter le site</button>
                            </div> 
                            <div className ="modale__pictures">    
                            {item.pictures}
                            </div>                
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