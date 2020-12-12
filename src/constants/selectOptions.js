const optionsCategories = [
    "------EMPLOI------",
    "Offres d'emploi",
    "Formations professionnelles",
    "------VEHICULES------",
    "Voitures",
    "Motos",
    "Caravaning",
    "Utilitaires",
    "Equipement Auto",
    "Nautisme",
    "Equipement moto",
    "Equipement Caravaning",
    "Equipement Nautisme",
    "------IMMOBILIER------",
    "Ventes immobilières",
    "Locations",
    "Colocations",
    "Bureaux & Commerces",
    "------VACANCES------",
    "Locations & Gîtes",
    "Chambres d'hôtes",
    "Campings",
    "Hôtels",
    "Hébergements insolites",
    "------MULTIMEDIA------",
    "Informatique",
    "Consoles & Jeux vidéo",
    "Image & Son",
    "Téléphonie",
    "------MAISON------",
    "Ameublement",
    "Electroménager",
    "Arts de la table",
    "Articles de sport",
    "Décoration",
    "Linge de maison",
    "Bricolage",
    "Jardinage",
    "Vêtements",
    "Chaussures",
    "Accessoires & Bagagerie",
    "Montres & Bijoux",
    "Equipement bébé",
    "Vêtements bébé",
  ];

 
export default optionsCategories.map((item, index) => {
return <option
key={index}
value={item}
>{item}</option>
})    



