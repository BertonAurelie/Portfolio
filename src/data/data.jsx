import imgId1 from '../assets/sophie_bluel_cover.webp'
import imgSophie2 from '../assets/sophie_bluel_2.webp'
import imgSophie3 from '../assets/sophie_bluel_3.webp'
import imgSophie4 from '../assets/sophie_bluel_4.webp'
import imgSophie5 from '../assets/sophie_bluel_5.webp'
import imgId2 from '../assets/kasa_cover.webp'
import imgKasa2 from '../assets/kasa2.webp'
import imgKasa3 from '../assets/kasa3.webp'
import imgKasa4 from '../assets/kasa_4.webp'
import imgKasa5 from '../assets/kasa_5.webp'
import imgId3 from '../assets/mon_vieux_grimoire_cover.webp'
import imgGrimoire2 from '../assets/mon_vieux_grimoire_2.webp'
import imgGrimoire3 from '../assets/mon_vieux_grimoire_3.webp'
import imgGrimoire4 from '../assets/mon_vieux_grimoire_4.webp'
import imgGrimoire5 from '../assets/mon_vieux_grimoire_5.webp'


export const data = [
    {
        "id" : "1",
        "title" : "Sophie Bluel",
        "cover": imgId1,
        "pictures":[
            imgSophie2,
            imgSophie3,
            imgSophie4,
            imgSophie5
        ],
        "description":"Développement front-end du site d'une architecte d'intérieur.Création d'une page web dynamique avec JavaScript, gestion des interactions utilisateurs et communication avec des API. ",
        "tags": [
            "Html",
            "CSS",
            "JavaScript"
        ],
        "site" : "https://github.com/BertonAurelie/P3-Portfolio-architecte-sophie-bluel"
    },
    {
        "id" : "2",
        "title" : "Kasa",
        "cover": imgId2,
        "pictures":[
            imgKasa2,
            imgKasa3,
            imgKasa4,
            imgKasa5
        ],
        "description":"Développement front-end d'une application web de location immobilière à l'aide de React.Configuration d'une navigation entre les pages de l'application avec React Router et développement de composants React",
        "tags": [
            "Html",
            "React",
            "React Router",
            "Sass"
            
        ],
        "site" : "https://github.com/BertonAurelie/P6---kasa"
    },
    {
        "id" : "3",
        "title" : "Mon vieux grimoire",
        "cover": imgId3,
        "pictures":[
            imgGrimoire2,
            imgGrimoire3,
            imgGrimoire4,
            imgGrimoire5
        ],
        "description":"Développement back-end d'un site de notation de livres. Développement des modèles de données et implémentation des opérations CRUD pour la gestion des ressources. Mise en place d'un stockage sécurisé et d'un système d'authentification sécurisé pour les utilisateurs du site. Gestion du téléchargement et de l'optimisation des images",
        "tags": [
            "MongoDB",
            "Express",
            "Mongoose",
            "Node.js"
        ],
        "site" : "https://github.com/BertonAurelie/OC-P7-mon_vieux_grimoire---backend"
    }
]