const menu = document.querySelector('.links-menu')
const menuBtn = document.querySelector('.btn-menu')
const fade = document.querySelector('.fade')

function scrollT() { //retornar a posição da tela (scrollY)
    return document.documentElement.scrollTop
}

function mostrarMenu() { // menu mostrado ao clicar na div .btn-menu
    if (menu.classList.contains('ativado')) { //tirar menu caso ele ja esteja visivel
        tirarMenu()
    } else { // adicionar menu estilos para menu ativo
        menu.classList.add('ativado')
        menuBtn.classList.add('ativado')
        menuBtn.classList.add('scroll')
        fade.classList.add('ativado')
    }
}

function tirarMenu() { // acionado também ao clicar no fade
    menu.classList.remove('ativado')
    menuBtn.classList.remove('ativado')
    if (scrollT() < 113) {
        menuBtn.classList.remove('scroll')
    }
    fade.classList.remove('ativado')
}

document.addEventListener('scroll', () => { //deixar o menu vsivel na tela branca
    const verticalPosition = scrollT()
    
    if (verticalPosition >= 113) {
        menuBtn.classList.add('scroll')
    } else {
        if (!menu.classList.contains('ativado')) {
            menuBtn.classList.remove('scroll')
        }
    }
})