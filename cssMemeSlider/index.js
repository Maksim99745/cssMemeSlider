document.addEventListener('DOMContentLoaded', function(){
    alert('i live')
    });

const sliderLine = document.querySelector('.slides-line')
const dots = document.querySelectorAll('.dot-conteiner')
const centerOfDots = document.querySelectorAll('.dot')
const describtions = document.querySelectorAll('.meme-describtion')

let position = 0;
let dotIndex = 1;
let describtionIndex = 0;


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 100 * index;
        dotIndex = 1 * index
        sliderLine.style.left = -position + '%'

        for (currentDot of centerOfDots) {
            currentDot.classList.remove('active-dot')
        }

        centerOfDots[dotIndex].classList.add('active-dot')

        for (describtion of describtions) {
            describtion.classList.remove('related-meme-describtion')
        }
        describtions[dotIndex].classList.add('related-meme-describtion')

    })
} )
