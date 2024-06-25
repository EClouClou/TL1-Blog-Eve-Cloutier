/**
 * @param {Array} Article
 */
class Article {
    constructor(
        img,
        title, 
        shortDescr, 
        longDescr,
        author,
        date,
        time,
        words,
        btnDetails
    ) {
        this.img = img;
        this.title = title;
        this.shortDescr = shortDescr;
        this.longDescr = longDescr;
        this.author = author;
        this.date = date;
        this.time = time;
        this.words = words;
        this.btnDetails = btnDetails;
    }

    toHtml() {
        const containerHtml = document.createElement('div'); 
        containerHtml.classList.add('article-list'); 
        containerHtml.setAttribute('data-search', this.title);

        const elements = { 
            img: 'article-img',
            title: 'article-title',
            shortDescr: 'article-short-description',
            longDescr:'detail-long-description',
            author: 'detail-author',
            date: 'detail-date',
            time: 'detail-time',
            words: 'detail-words',
            btnDetails: 'btn-details',
        };

        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        ['title', 'shortDescr', 'longDescr','author', 'date', 'time', 'words'].forEach(property => {
            const element = document.createElement('p');
            element.textContent = this[property];
            element.classList.add(elements[property]);
            textContainer.appendChild(element);
        });

        const imageElement = document.createElement('img');
        imageElement.src = this.img;
        imageElement.classList.add(elements.img);

        const buttonElement = document.createElement('button');
        buttonElement.textContent = this.btnDetails;
        buttonElement.classList.add(elements.btnDetails);
        buttonElement.setAttribute('data-article', this.title);
        textContainer.appendChild(buttonElement);

        containerHtml.appendChild(imageElement);
        containerHtml.appendChild(textContainer);

        return containerHtml;
    }
}

/** Bonne technique pour la generation du html */

const articles = [
    new Article(
        '../assets/IMG/difficile.jpg',
        'Problèmes et solutions',
        'Je vous partage ici les problèmes auxquels j\'ai fait face durant la création de ce blog ainsi que les solutions trouvées. ',
        'Créer ce blogue a été un défi enrichissant malgré les obstacles rencontrés à plusieurs moments. Partant du modèle de boutique fait durant la session, j\'ai dû l\'adapter à plusieurs niveaux pour le rendre fonctionnel. Un des principaux problèmes a été avec l\'outil de recherche, affichant une erreur de propriété nulle et ne montrant pas les résultats en vue «liste », que je n\'ai pas réussi à résoudre malgré mes recherches. Bien que l\'outil fonctionnait initialement, l\'intégration d\'une modale pour les détails des articles a causé des doublons dans les résultats, un problème auquel j\'ai réussi à trouver la solution en regardant de près mon ficher JavaScript, car j\'avais doublé la méthode toHtml, ce qui inévitablement, doublait les résultats. L\'organisation en grille des éléments a également posé son lot de problèmes, mais après une analyse approfondie de mon HTML, j\'ai opté pour une mise en page en Flexbox. Pour m\'aider dans la création de ce blogue, j\'ai trouvé des solutions grâce à des ressources comme CSS Tricks, W3Schools, SheCodes et MDN Web Docs, ainsi que dans les ateliers et notes de cours antérieurs. La plus grande difficulté a été la modale JavaScript, particulièrement complexe du fait du contenu injecté dynamiquement. Après de nombreuses tentatives infructueuses, j’ai fini par trouver une solution en faisant le tour de ressources en ligne et du matériel à ma disposition dans nos travaux, dont celui en équipe nommé Delazur. En somme, bien que le projet ait été exigeant et m’a demandé une grande quantité de temps, il m\'a permis de mieux comprendre plusieurs concepts techniques. Toutefois, le niveau de complexité m\'a souvent donné des sueurs froides, hormis la portion CSS que je maîtrise mieux, limitant ainsi le temps disponible pour peaufiner les détails et la mise en forme du projet.',
        'Eve Cloutier',
        '16 juin 2024',
        'Temps estimé pour lire l\'article : 1,2 min',
        'Nombre de mots : 294',
        'Consulter les détails',
    ),
    new Article(
        '../assets/IMG/australie.jpg',
        'Gold Coast, Australie',
        'La Gold Coast offre des plages infinies, des vagues parfaites pour le surf et un climat ensoleillé toute l\'année. C\'est également un lieu idéal pour les parcs à thème, les randonnées dans les forêts tropicales et la vie nocturne animée de Surfers Paradise.',
        'La Gold Coast en Australie est renommée pour ses plages magnifiques et son climat ensoleillé. Cette région, située dans le Queensland, est un véritable paradis pour les amateurs de soleil et de mer. Parmi les plus belles plages, Surfers Paradise est sans doute la plus célèbre. Avec sa vaste étendue de sable doré et ses vagues parfaites pour le surf, cette plage attire des millions de visiteurs chaque année. Le quartier adjacent regorge de restaurants, de boutiques et de divertissements, créant une atmosphère vibrante et animée. Un peu plus au sud, la plage de Burleigh Heads offre une ambiance plus détendue. Entourée de parcs et de sentiers de randonnée, elle est idéale pour les pique-niques en famille et les balades en pleine nature. Les surfeurs apprécient également cette plage pour ses excellentes conditions de surf. Le Burleigh Head National Park, situé à proximité, offre des vues spectaculaires sur l\'océan et la côte. Pour ceux qui recherchent une expérience plus tranquille, Coolangatta est une destination parfaite. Ses plages comme Rainbow Bay et Snapper Rocks sont idéales pour la baignade et le snorkeling. Coolangatta accueille également des compétitions internationales de surf, attirant des professionnels et des amateurs du monde entier. Les plages de la Gold Coast ne se limitent pas aux activités nautiques. La région est également connue pour ses parcs à thème, ses réserves naturelles et sa vie nocturne animée. Les visiteurs peuvent explorer le Currumbin Wildlife Sanctuary pour découvrir la faune australienne ou profiter des nombreux festivals et événements tout au long de l\'année. Avec ses plages idylliques, ses nombreuses activités et son atmosphère accueillante, la Gold Coast est une destination de choix pour des vacances ensoleillées et inoubliables.',
        'Sadrine Jasmin',
        '2 juin 2024',
        'Temps estimé pour lire l\'article : 1,5 min',
        'Nombre de mots : 279',
        'Consulter les détails',
    ),
    new Article(
        '../assets/IMG/espagne.jpg',
        'Costa del Sol, Espagne',
        'Située dans le sud de l\'Espagne, la Costa del Sol est une région ensoleillée connue pour ses stations balnéaires animées comme Marbella et Torremolinos. Vous y trouverez de belles plages, une vie nocturne vibrante et de délicieux fruits de mer.',
        'La Costa del Sol, située dans le sud de l\'Espagne, est réputée pour ses plages ensoleillées et son climat agréable. Marbella est l\'une des destinations les plus populaires, offrant des plages comme Playa de la Fontanilla, avec son sable doré et ses eaux calmes, parfaites pour la baignade et les sports nautiques. Le Paseo Marítimo, une promenade en bord de mer, est idéale pour les balades et les repas en terrasse. Nerja, avec ses plages pittoresques comme Burriana Beach, offre une atmosphère plus détendue. La plage est bordée de restaurants et de bars, et propose des activités comme le kayak et la plongée en apnée. Les célèbres grottes de Nerja, avec leurs formations de stalactites, sont une attraction incontournable. La Costa del Sol est imprégnée de culture espagnole et andalouse. Dégustez des tapas traditionnelles, du gazpacho et des fruits de mer frais dans les chiringuitos (restaurants de plage). Les festivités locales, comme la Feria de Málaga, offrent un aperçu des traditions locales avec des danses flamenco, des défilés et des manèges.  Pour les amateurs de culture et d\'histoire, visitez l\'Alcazaba de Málaga, une forteresse mauresque, et la Cathédrale de Séville. Les villes voisines comme Ronda et Grenade, avec l\'Alhambra, offrent des excursions d\'une journée enrichissantes. Avec ses plages magnifiques, sa riche culture et ses nombreuses activités, la Costa del Sol est une destination parfaite pour des vacances au soleil.',
        'Joseph Paquet',
        '23 mai 2024',
        'Temps estimé pour lire l\'article : 1 min',
        'Nombre de mots : 229',
        'Consulter les détails'
    ), 
    new Article(
        '../assets/IMG/grece.jpg',
        'Santorini, Grèce',
        'Santorini est une île emblématique des Cyclades, célèbre pour ses maisons blanches aux toits bleus, ses couchers de soleil époustouflants et ses plages volcaniques uniques. C\'est un endroit idéal pour se détendre, déguster de la cuisine méditerranéenne et explorer l\'histoire et la culture locales.',
        'Santorini, l\'une des îles les plus emblématiques des Cyclades en Grèce, est réputée pour ses paysages spectaculaires, ses couchers de soleil époustouflants et ses plages uniques. Contrairement aux plages de sable blanc typiques, Santorini offre des plages aux couleurs étonnantes dues à son origine volcanique. La plage de Perissa est l\'une des plus célèbres de l\'île. S\'étendant sur plusieurs kilomètres, elle est caractérisée par son sable noir volcanique et ses eaux cristallines. Perissa est bien équipée avec des chaises longues, des parasols, et de nombreux bars de plage et restaurants, créant une atmosphère vivante et accueillante. Les amateurs de sports nautiques peuvent y pratiquer le jet-ski, la planche à voile et la plongée sous-marine. Non loin de Perissa, la plage de Kamari offre une expérience similaire avec son sable noir et ses installations modernes. Kamari est également connue pour sa promenade animée bordée de tavernes, de cafés et de boutiques. Le soir, la zone s\'anime avec de la musique live et des spectacles, parfaits pour une sortie nocturne. Pour une expérience plus pittoresque, la plage de Red Beach est incontournable. Située près du site archéologique d\'Akrotiri, elle est célèbre pour ses falaises rouges spectaculaires qui contrastent avec le sable rouge et les eaux bleues profondes. C\'est un endroit idéal pour la baignade et la plongée avec tuba, offrant une vue sous-marine fascinante. La plage de Vlychada, également appelée "Plage de la Lune" en raison de ses formations rocheuses sculptées par le vent, offre une ambiance plus tranquille et sauvage. C\'est un endroit parfait pour se détendre et se ressourcer loin des foules. Santorini, avec ses plages uniques et variées, offre une expérience inoubliable, mariant beauté naturelle, histoire et culture. Les visiteurs sont captivés par la magie de cette île grecque et ses rivages exceptionnels.',
        'Sylvie Gauthier',
        '5 mai 2024',
        'Temps estimé pour lire l\'article : 1,5 min',
        'Nombre de mots : 294',
        'Consulter les détails'
    ),
    new Article(
        '../assets/IMG/guadeloupe.jpg',
        'Guadeloupe',
        'La Guadeloupe séduit avec ses plages spectaculaires, notamment la plage de Grande Anse à Deshaies avec son sable doré et ses eaux turquoise, parfaite pour la baignade. La plage de la Caravelle à Sainte-Anne, avec son sable fin et ses eaux calmes, est idéale pour les familles et les sports nautiques. L\'archipel offre également une riche culture créole, une cuisine savoureuse et des randonnées dans le parc national, abritant le volcan La Soufrière.',
        'La Guadeloupe, un archipel des Caraïbes, séduit par ses plages idylliques et sa culture riche. La plage de Grande Anse à Deshaies, sur l\'île de Basse-Terre, est l\'une des plus célèbres avec son sable doré, ses eaux turquoise et sa végétation luxuriante. C\'est un endroit parfait pour la baignade, le bronzage et les promenades le long de la côte. La plage de la Caravelle à Sainte-Anne, sur l\'île de Grande-Terre, est également très prisée. Avec son sable fin et ses eaux calmes, c\'est un lieu idéal pour les familles. Les amateurs de sports nautiques pourront s\'essayer au windsurf et au kitesurf. La Guadeloupe est imprégnée de coutumes créoles, et sa cuisine est un délice pour les gourmets. Goûtez aux plats traditionnels comme le bokit (un sandwich frit), les acras de morue, et le poulet boucané. Pour découvrir la culture locale, visitez le marché de Pointe-à-Pitre où vous trouverez des épices, des fruits tropicaux et de l\artisanat local. La Guadeloupe offre également de nombreuses possibilités de randonnées, notamment dans le parc national de la Guadeloupe, où vous pourrez explorer la Soufrière, un volcan actif, et les chutes du Carbet. Les plages de la Guadeloupe, combinées à une culture vibrante et des activités variées, offrent une expérience de vacances unique et inoubliable.',
        'Pénélope Jean',
        '3 avril janvier 2024',
        'Temps estimé pour lire l\'article : 1 min',
        'Nombre de mots : 210',
        'Consulter les détails'
    ),
    new Article(
        '../assets/IMG/hawai.jpg',
        'Maui, Hawaï',
        'Maui offre une combinaison de paysages spectaculaires, de plages magnifiques et d\'activités de plein air. De la route panoramique de Hana aux plages de sable noir de Waianapanapa, en passant par le volcan Haleakalā, Maui est un paradis pour les amateurs de soleil et de nature.',
        'Maui, surnommée "l\'île de la vallée", est l\'une des destinations les plus prisées d\'Hawaï pour ses plages spectaculaires et ses paysages à couper le souffle. La diversité des plages de Maui offre une expérience unique à chaque visiteur, allant des étendues de sable doré aux plages de sable noir. La plage de Kaanapali, située sur la côte ouest, est l\'une des plus populaires et emblématiques de l\'île. Ce vaste ruban de sable doré s\'étend sur près de cinq kilomètres et est bordé de luxueux hôtels et de complexes de villégiature. Kaanapali est idéale pour la baignade, le snorkeling et les promenades le long du front de mer. Àl\'extrémité nord de la plage, le rocher de Black Rock (Puu Kekaa) est un excellent spot pour le snorkeling, offrant une vue imprenable sur la vie marine colorée. Wailea Beach, sur la côte sud, est une autre plage de renommée mondiale. Elle est réputée pour son sable doux et ses eaux claires, parfaites pour la baignade et la plongée en apnée. Les complexes hôteliers de luxe à proximité ajoutent une touche de sophistication, et les visiteurs peuvent profiter des équipements de première classe. Pour une expérience plus sauvage et pittoresque, la plage de Honokalani à Waianapanapa State Park est un véritable joyau. Cette plage de sable noir volcanique est entourée de falaises abruptes et de végétation luxuriante, créant un cadre dramatique et impressionnant. Les grottes de lave et les piscines naturelles à proximité ajoutent une dimension d\'exploration aventureuse. Makena Beach, également connue sous le nom de Big Beach, offre une étendue de sable doré isolée et spectaculaire. Ses vagues puissantes en font un endroit populaire pour le bodyboard et le surf, mais c\'est aussi un lieu idéal pour simplement se détendre et profiter du soleil. Avec ses plages variées et ses paysages incroyables, Maui est une destination de rêve pour les amateurs de plage, promettant une expérience hawaïenne inoubliable.',
        'Sophie-Elen Grand-Pré',
        '15 mars 2024',
        'Temps estimé pour lire l\'article : 2 min',
        'Nombre de mots : 316',
        'Consulter les détails'
    ),
    new Article(
        '../assets/IMG/maldives.jpg',
        'Maldives',
        'Les Maldives sont célèbres pour leurs eaux cristallines, leurs bungalows sur pilotis et leur vie marine abondante. C\'est une destination idéale pour la plongée, le snorkeling et la relaxation totale sur des plages immaculées.',
        'Les Maldives sont synonymes de plages paradisiaques, avec des eaux cristallines et des récifs coralliens vibrants. L\'île de Veligandu, avec sa plage de sable blanc immaculé et ses eaux turquoise, est parfaite pour la baignade, le snorkeling et la plongée sous-marine. Les bungalows sur pilotis offrent une vue imprenable sur l\'océan et un accès direct à la mer. L\'île de Maafushi, plus animée, propose des plages magnifiques ainsi que des activités comme le jet-ski, le kayak et les excursions en bateau pour observer les dauphins. Les visiteurs peuvent également découvrir la culture locale en visitant les marchés et les mosquées de l\'île. Les coutumes des Maldives sont profondément enracinées dans la culture islamique, avec des influences de l\'Asie du Sud. La cuisine maldivienne est un délice pour les gourmets, avec des plats à base de poisson frais, de noix de coco et de riz. Ne manquez pas de goûter au garudhiya (soupe de poisson) et aux hedhikaa (collations locales). Pour une expérience unique, participez à une croisière au coucher du soleil ou à une excursion de pêche nocturne. Les Maldives offrent également des spas de classe mondiale, parfaits pour la détente et le rajeunissement. Les Maldives, avec leurs plages de rêve, leur riche culture et leurs nombreuses activités, constituent une destination idéale pour des vacances de luxe et de détente. Que ce soit pour une lune de miel, une escapade romantique ou une aventure sous-marine, les Maldives ne manqueront pas de vous séduire.',
        'Zacharie Cyren',
        ' 10 mars 2024',
        'Temps estimé pour lire l\'article : 1,5 min',
        'Nombre de mots : 243',
        'Consulter les détails'
    ),
    new Article(
        '../assets/IMG/martinique.jpg',
        'Martinique',
        'La Martinique, "l\'île aux fleurs", offre des plages paradisiaques comme la plage des Salines à Sainte-Anne avec son sable blanc et ses eaux turquoise, idéale pour se détendre. Les plages d\'Anse Dufour et Anse Noire, avec leur sable noir volcanique, sont parfaites pour le snorkeling et l\'observation des tortues marines. L\'île combine plages magnifiques, culture créole riche et paysages naturels impressionnants.',
        'La Martinique, surnommée "l\'île aux fleurs", offre des plages paradisiaques, parfaites pour les amateurs de soleil et de mer. Parmi les plus belles plages de l\'île, la plage des Salines à Sainte-Anne se distingue par son sable blanc et ses eaux cristallines, entourée de palmiers majestueux. C\'est un lieu idéal pour la détente et la baignade, mais aussi pour admirer le coucher du soleil. L\'Anse Dufour et l\'Anse Noire, situées près des Trois-Îlets, offrent une expérience unique avec leur sable noir volcanique et leurs eaux claires propices au snorkeling. Vous pourrez y observer des tortues marines et une variété de poissons tropicaux. Les coutumes de la Martinique reflètent un riche mélange de cultures créoles, françaises, et africaines. Ne manquez pas de goûter à la cuisine locale, notamment le colombo de poulet, les accras de morue et le célèbre rhum agricole martiniquais. Pour une expérience culturelle, visitez la ville de Fort-de-France avec sa bibliothèque Schoelcher et le marché couvert où vous pourrez acheter des épices et des produits locaux. Les amateurs de randonnée apprécieront l\'ascension de la Montagne Pelée, le volcan actif de l\'île, offrant des vues spectaculaires sur l\'île et l\'océan. En Martinique, la combinaison de plages magnifiques, de culture vibrante, et de paysages naturels impressionnants en fait une destination de choix pour des vacances mémorables.',
        'Alexa Gagnon',
        ' 28 janvier 2024',
        'Temps estimé pour lire l\'article : 1 min',
        'Nombre de mots : 216',
        'Consulter les détails'
    ),
    new Article(
        '../assets/IMG/mexique.jpg',
        'Cancún, Mexique',
        'Cancún est célèbre pour ses plages de sable blanc, ses eaux turquoise et ses nombreux complexes hôteliers tout compris. C\'est une destination populaire pour les amateurs de soleil, de plongée et de fêtes, avec de nombreuses excursions possibles vers des sites mayas et des cenotes.',
        'Le Mexique est célèbre pour ses plages spectaculaires, et la Riviera Maya, sur la côte est, abrite certaines des plus belles. Playa del Carmen offre une plage magnifique avec du sable blanc et des eaux turquoise, idéale pour la baignade et le farniente. La ville animée à proximité offre une variété de restaurants, de boutiques et de bars. Tulum, avec ses plages bordées de palmiers et ses ruines mayas surplombant la mer, offre une combinaison unique de beauté naturelle et d\'histoire. Les plages de Tulum sont parfaites pour la plongée en apnée, le yoga sur la plage et l\'exploration des cénotes (piscines naturelles). La culture mexicaine est riche et diversifiée, avec des traditions influencées par les civilisations maya et aztèque. Ne manquez pas de goûter à la cuisine locale, notamment les tacos, les tamales et le guacamole. Les festivals comme le Día de los Muertos (Jour des Morts) offrent une immersion unique dans les coutumes locales. En plus des plages, le Mexique propose de nombreuses attractions. Visitez les pyramides de Chichén Itzá, l\'une des sept merveilles du monde, et explorez les cénotes sacrées. Cancun, une destination prisée, offre une vie nocturne vibrante et des possibilités de plongée sous-marine sur la Grande Barrière de Corail mésoaméricaine. Le Mexique, avec ses plages sublimes, sa culture riche et ses nombreuses activités, est une destination idéale pour des vacances ensoleillées et mémorables.',
        'Siril McIntoch',
        ' 13 janvier 2024',
        'Temps estimé pour lire l\'article : 1,2 min',
        'Nombre de mots : 228',
        'Consulter les détails'
    )
]

const articleContainer = document.querySelector('.article-container');

articles.forEach(article => {

    const articleHtml = article.toHtml();
    articleContainer.appendChild(articleHtml);
});