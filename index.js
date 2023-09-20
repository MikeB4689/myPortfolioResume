const slideContainer = document.querySelector('.offers-container')
const slides = document.querySelectorAll('.front-page')
const dots = document.querySelectorAll('.dots')
const menuIcon = document.querySelector('.nav-icon i')
width = slides[0].clientWidth
let index = 0;
function makeItslide() {
    setInterval(function () {
        index++;

        if (index >= slides.length) {
            index = 0
        }
        slideContainer.style.transition = '0.5s ease-in-out'
        slideContainer.style.transform = `translateX(${index * - width}px)`

        slideContainer.addEventListener('transitionend', () => {
            if (slides[index].id === 'clone') {
                slideContainer.style.transition = "none"
                index = slides.length - 5;
                slideContainer.style.transform = `translateX(${index * - width}px)`
                dots.forEach(element => {
                    element.classList.remove('active')
                    dots[index].classList.add('active')


                })



            }
        })


        dots.forEach(element => {
            element.classList.remove('active')
            dots[index].classList.add('active')


        })


    }, 5000)

}

menuIcon.onclick = () => {
    const buttonNav = document.querySelectorAll('.navBar ul li a')
    let closestParent = menuIcon.closest('header')
    let navi = closestParent.querySelector('.navBar')
    navi.classList.toggle('active')
    buttonNav.forEach(element => {
        element.addEventListener('click', () => {
            element.closest('.navBar').classList.remove('active')
        })
    })




}


window.onscroll = () => {
    const showIcon = document.querySelector('.menuOnscroll')
    const navi = document.querySelector('.navBar')
    const scroll = window.scrollY


    console.log(scroll)
    if (scroll >= 100) {
        showIcon.classList.add('active')
        navi.classList.remove('active')

    } else {

        showIcon.classList.remove('active')
    }
}


function ShowNav() {
    const showSidebar = document.querySelector('.top-header h1 i')
    const shownav = document.querySelector('.menuOnscroll')
    const closeSidebar = document.querySelector('.image-holder p i')
    shownav.addEventListener('click', () => {
        const getNav = shownav.querySelector('.top-nav')
        getNav.classList.toggle('active')
    })

    showSidebar.addEventListener('click', () => {
        const parentElement = showSidebar.closest('.side-bar-container')
        const showSide = parentElement.querySelector('.sidebar-container')
        showSide.classList.add('active')
        console.log(showSide)
    })

    closeSidebar.addEventListener('click', () => {
        const parentElement = closeSidebar.closest('.side-bar-container')
        const closeSide = parentElement.querySelector('.sidebar-container')
        closeSide.classList.remove('active')

    })

}

function makeItRead() {
    const readMore = document.querySelectorAll('.read-icon p i')
    readMore.forEach(element => {
        element.addEventListener('click', e => {
            let clickBook = element.closest('.about-section')
            let openRead = clickBook.querySelector('.readmore')
            openRead.classList.toggle('active')


            if (openRead.className === 'readmore active') {

                element.closest('.read-icon').querySelector('span').innerHTML = "ReadLess"
                element.style.color = "red"

            } else {
                element.closest('.read-icon').querySelector('span').innerHTML = "Readmore.."
                element.style.color = ""
            }

        })

    })


}

makeItRead()
ShowNav();
makeItslide() 