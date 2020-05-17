alert('Czesc, dobrze ze jestes!');

const firstName = 'Monika'
const secondName = 'Helman'

console.log (
    `Nazywam sie ${firstName} ${secondName}`)

 const footer = document.querySelector('.footer--js')    
 console.log(footer);
 footer.innerHTML = `Nazywam sie ${firstName} ${secondName}`
 console.log(footer);