class NavBar {
    constructor(menu, listaNav, linksNav) {
        this.menu = document.querySelector(menu)
        this.listaNav = document.querySelector(listaNav)
        this.linksNav = document.querySelectorAll(linksNav)
        this.activeClass = 'Active'
        this.handleClick = this.handleClick.bind()
    }

    handleClick() {
        this.listaNav.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.menu.addEventListener('click',this.handleClick())
    }

    init() {
        if (this.menu) {
            this.addClickEvent()
        }
        return this
    }
}

const menu = new NavBar(
    '.btn-menu',
    '.nav-lista',
    '.nav-list li'
)

menu.init()
