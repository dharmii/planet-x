/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")
const navToogle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if(navToogle){
    navToogle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



/*=============== ADD BLUR HEADER ===============*/


const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header") 
                       : header.classList.remove("blur-header")
}
window.addEventListener('scroll',blurHeader)

/*=============== SWIPER PLANETS ===============*/ 

const swiperTravel = new Swiper('.travel__swiper',{
    loop:true,
    spaceBetween: '32',
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    }


})

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight)
        {
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/