
function Form () {

    return (
    
        <form method ="get">
            <fieldset>
                <legend>Vos coordonnées</legend> 
                <label for="nom">Nom</label>
                <input type="text" name="nom" id="nom"/>
                <label for="prenom">Prénom</label>
                <input type="text" name="prenom" id="prenom"/>
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email"/>
            </fieldset>
            <fieldset>
                <legend>Votre message</legend> 
                <input type="text" name="message" id="message"/>
            </fieldset>
            </form>
        
    )

}

export default Form