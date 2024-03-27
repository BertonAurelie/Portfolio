import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

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


    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
    };

    return (
    
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <h3> Pour toute demande, n'hésitez pas à me contacter à l'aide de ce formulaire !</h3>
            <fieldset className = "form_contact">
                <legend>Vos coordonnées</legend> 
                <div className="box__contact">
                    <label htmlFor="nom"></label>
                    <input 
                        type="text" 
                        name="nom" 
                        id="nom"
                        placeholder='Nom*'
                        {...register('nom', {
                            required: 'Merci de renseigner votre nom'                          
                        })}
                        aria-invalid={errors.nom ? "true" : "false"}
                    />
                    <p>{errors.nom?.message}</p>
                </div>
                <div className="box__contact">
                    <label htmlFor="prenom"></label>
                    <input 
                        type="text" 
                        name="prenom" 
                        id="prenom"
                        placeholder='Prénom'
                    />
                </div>
                <div className="box__contact">
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder='email*'
                        {...register('email', {
                            required: 'merci de renseigner votre email',
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                        aria-invalid={errors.mail ? "true" : "false"}
                    />
                     <p>{errors.email?.message}</p>
                </div>
            </fieldset>
            <fieldset>
                <legend>Votre message</legend> 
                <input name="message" id="message"/>
            </fieldset>
            
            <input type="submit" value="Send" className="button__style1"/>
            </form>
        
    )

}

export default Form