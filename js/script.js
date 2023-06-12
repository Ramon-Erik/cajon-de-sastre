const menu = document.querySelector('.links-menu')
const menuBtn = document.querySelector('.btn-menu')
const fade = document.querySelector('.fade')

function mostrarMenu() {
    if (menu.classList.contains('ativado')) {
        tirarMenu()
    } else {
        menu.classList.add('ativado')
        menuBtn.classList.add('ativado')
        fade.classList.add('ativado')
    }
}

function tirarMenu() {
    menu.classList.remove('ativado')
    menuBtn.classList.remove('ativado')
    fade.classList.remove('ativado')
}
