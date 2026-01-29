let btnMore = document.querySelector('#more')
let cardMore = document.querySelector('.cards-inviseble')


btnMore.addEventListener('click', () =>{
    const aberto = cardMore.classList.toggle('cards-inviseble')
    btnMore.textContent = aberto ? 'Mostrar mais' : 'Mostrar menos'
})