const menu = document.querySelector('.links-menu')
const menuBtn = document.querySelector('.btn-menu')

function mostraMenu() {
    if (menu.classList.contains('ativado')) {
        tiraMenu()
    } else {
        menu.classList.add('ativado')
        menuBtn.classList.add('ativado')
    }
}

function tiraMenu() {
    menu.classList.remove('ativado')
    menuBtn.classList.remove('ativado')
    // document.addEventListener('click', () => {
    //     if (menu.classList.contains('ativado')) {
    //         tiraMenu()
    //     }
    // }
    // )
}

// menu.addEventListener('click', (e) => {
//     if (!menu.contains(e.target)) {
//         mostraMenu()
//     }
// }
// )