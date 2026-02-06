let btnMore = document.querySelector('#more')
let cardMore = document.querySelector('.cards-projects-extra')
let header = document.querySelector('header')
let msgName = document.querySelector('#msg-name')
let msg = document.querySelector('#msg-msg')
let btnWpp = document.querySelector('#btnWpp')
let btnContact = document.querySelector('#contact')

btnMore.addEventListener('click', () =>{
    const aberto = cardMore.classList.toggle('hidden')
    btnMore.textContent = aberto ? 'Mostrar mais' : 'Mostrar menos'
})

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50)
})

btnWpp.addEventListener('click', () => {
    if(!msgName.value || !msg.value){
        alert('Digite os dados corretamente')
    } else {
        let readyMsg =`Olá me chamo ${msgName.value}\n Assunto: ${msg.value}`

        let encodedMsg = encodeURIComponent(readyMsg)

        window.open(`https://wa.me/5515981524319?text=${encodedMsg}`)    
    }
})

btnContact.addEventListener('click', () => {
    window.open(`https://wa.me/5515981524319?text=Olá+vim+pelo+portfólio`)
})
