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
// BONUS 1: Trasformare la stringa foto in una immagine effettiva21
// BONUS 2: Organizzare i singoli membri in card/schede e stilarli a vostro gusto 

const rowHTML = document.querySelector('.row');

function ourTeam () {
    const inputUtente = JSON.parse(localStorage.getItem('inputUtente'));
    membriTeam.push(inputUtente);
    console.log(inputUtente); 
    for(let value of membriTeam) {
        const card = document.createElement('div');
        card.className = 'col-4 g-4 fw-bold d-flex flex-column-reverse';
        for(let key in value) {
            const cardMembro = document.createElement('div');
            if(key == 'Name') {
                cardMembro.innerHTML = value[key];
                cardMembro.className = 'fs-4 card-member';  
            } else if(key == 'Role') {
                cardMembro.innerHTML = value[key];
                cardMembro.className = 'my-text-white-blue';  
            } else if(key == 'Image') {
                    cardMembro.className = 'card-member';  
                    cardMembro.innerHTML = '<img src="./img/' + value[key] + '">';                     
            }
            rowHTML.append(card);
            card.append(cardMembro);
        }
    }  
    localStorage.setItem('cardMembri', JSON.stringify(membriTeam)); 
}
ourTeam();

const btnToFormHTML = document.getElementById('btn-to-form');

function toForm() {
    window.location.href = "./pages/form.html";
}
btnToFormHTML.addEventListener('click', () => {
    toForm();
});

console.log(membriTeam);
