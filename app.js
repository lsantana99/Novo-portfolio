let btnMore = document.querySelector('#more')
let cardMore = document.querySelector('.cards-projects-extra')
let header = document.querySelector('.header-desktop')

btnMore.addEventListener('click', () =>{
    const aberto = cardMore.classList.toggle('hidden')
    btnMore.textContent = aberto ? 'Mostrar mais' : 'Mostrar menos'
})

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50)
})