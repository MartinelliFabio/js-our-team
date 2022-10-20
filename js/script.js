"use strict";

/*  -----------------------------------------------------------------------------------------------
    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

    MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    
    MILESTONE 1:
    Stampare su console le informazioni di nome, ruolo e la stringa della foto
    
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    
    BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
    
    BONUS 2:
    Organizzare i singoli membri in card/schede e stilarli a vostro gusto 
    
    BONUS 3:
    Aggiungere attraverso un form un membro al team
--------------------------------------------------------------------------------------------------- */



// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

// Creo la variabile oggetto membriTeam con varie proprietà e i loro rispettivi valori
const membriTeam = [
    {
        'Name': 'Wayne Barnett',
        'Role': 'Founder & CEO',
        'Image': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'Name': 'Angela Caroll',
        'Role': 'Chief Editor',
        'Image': 'angela-caroll-chief-editor.jpg'
    },
    {
        'Name': 'Walter Gordon',
        'Role': 'Office Manager',
        'Image': 'walter-gordon-office-manager.jpg'
    },
    {
        'Name': 'Angela Lopez',
        'Role': 'Social Media Manager',
        'Image': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'Name': 'Scott Estrada',
        'Role': 'Developer',
        'Image': 'scott-estrada-developer.jpg'
    },
    {
        'Name': 'Barbara Ramos',
        'Role': 'Graphic Designer',
        'Image': 'barbara-ramos-graphic-designer.jpg'
    },
];

// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

// Creato due cicli for per vedere la funzione di tutti e due
for(let i = 0; i < membriTeam.length; i++) {
    console.log('Nome: ' + membriTeam[i].Name + ' Ruolo: ' + membriTeam[i].Role + ' Immagine: ' + membriTeam[i].Image);
}

for(let value of membriTeam) {
    for(let key in value) {
        console.log(key + ': ' + value[key]);
    }
}

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

const rowHTML = document.querySelector('.row');

for(let value of membriTeam) {
    const card = document.createElement('div');
    card.className = 'col-lg-4 g-4';
    for(let key in value) {
        const cardMembro = document.createElement('div');
        cardMembro.innerHTML += ' ' + key + ': ' + value[key]; 
        rowHTML.append(card);
        card.append(cardMembro);
    }
}