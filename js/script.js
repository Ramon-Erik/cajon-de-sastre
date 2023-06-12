const menu = document.querySelector('.links-menu')
const menuBtn = document.querySelector('.btn-menu')
const fade = document.querySelector('.fade')

function scrollT() {
    return document.documentElement.scrollTop
}

function mostrarMenu() {
    if (menu.classList.contains('ativado')) {
        tirarMenu()
    } else {
        menu.classList.add('ativado')
        menuBtn.classList.add('ativado')
        menuBtn.classList.add('scroll')
        fade.classList.add('ativado')
    }
}

function tirarMenu() {
    menu.classList.remove('ativado')
    menuBtn.classList.remove('ativado')
    if (scrollT() < 113) {
        menuBtn.classList.remove('scroll')
    }
    fade.classList.remove('ativado')
}

document.addEventListener('scroll', () => {
    const verticalPosition = scrollT()
    
    console.log(verticalPosition)
    if (verticalPosition >= 113) {
        menuBtn.classList.add('scroll')
    } else {
        menuBtn.classList.remove('scroll')
    }
})