// BONUS 3: Aggiungere attraverso un form un membro al team
console.log(membriTeam);

const buttonFormHTML = document.getElementById('carica-form');
console.log(membriTeam);

function form() {
    const cardMembri = JSON.parse(localStorage.getItem('membriTeam'));
    membriTeam.push(cardMembri);
    const nameHTML = document.querySelector('.name').value;
    const roleHTML = document.querySelector('.role').value;
    const imgHTML = document.querySelector('.img').files[0].name;

    let inputUtente = {
        'Name': nameHTML,
        'Role': roleHTML,
        'Image': imgHTML
    };
    membriTeam.push(inputUtente);

    localStorage.setItem('inputUtente', JSON.stringify(inputUtente));
    window.location.href = '../index.html';
    console.log(membriTeam);
}

buttonFormHTML.addEventListener('click', () => {
    form();
});