import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_bbwgjjp', 'template_6qftpn5', form.current, {
            publicKey: 'FMqIrusQCJWRXoxen',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
    
        <form ref={form} onSubmit={sendEmail}>
        <h3> Pour toute demande, n'hésitez pas à me contacter à l'aide de ce formulaire !
        </h3>
            <fieldset className = "form_contact">
                <legend>Vos coordonnées</legend> 
                <label htmlFor="nom">Nom :</label>
                <input type="text" name="nom" id="nom"/>
                <label htmlFor="prenom">Prénom :</label>
                <input type="text" name="prenom" id="prenom"/>
                <label htmlFor="email" id="label__email">E-mail :</label>
                <input type="email" name="email" id="email"/>
            </fieldset>
            <fieldset>
                <legend>Votre message</legend> 
                <input type="text" name="message" id="message"/>
            </fieldset>
            
            <input type="submit" value="Send" className="button__style1"/>
            </form>
        
    )

}

export default Form