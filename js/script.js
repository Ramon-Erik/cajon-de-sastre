class NavBar {
    constructor(menu, listaNav, linksNav) {
        this.menu = document.querySelector(menu)
        this.listaNav = document.querySelector(listaNav)
        this.linksNav = document.querySelectorAll(linksNav)
        this.activeClass = 'active'
        this.handleClick = this.handleClick.bind(this)
    }
    
    animateLinks() {
        this.linksNav.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = '')
            :( link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`)
        })
    }

    handleClick() {
        this.listaNav.classList.toggle(this.activeClass)
        this.menu.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    addClickEvent() {
        this.menu.addEventListener('click', this.handleClick)
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
    '.nav-lista li'
)

menu.init()
