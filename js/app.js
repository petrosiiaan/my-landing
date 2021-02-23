const links = document.querySelectorAll(".link-to")
const gallery = document.querySelectorAll(".gallery")
const body = document.querySelector("body")
const images = document.querySelectorAll('.img')


window.onload = () => {
    gallery.forEach((galer) => {
        galer.onmouseover = () => {
            galer.classList.add('gallery-hover')
        }
        galer.onmouseleave = () => {
            galer.className = 'gallery'
        }
    })

    body.style.animation = 'anime 1s ease'

    
    function setActive() {
       for(let i = 0; i < links.length; i++) {
           links[i].addEventListener('click', function() {
               for(let i = 0; i < links.length; i++) {
                   links[i].classList.remove('active')
               }
               this.className = ' active'
           })
       }
    }
    setActive()
}

