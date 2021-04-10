// Importing modules
import  {loadScore} from './resources/modules/score.js';
import  {snake} from './resources/modules/snake.js';


// Wait to DOM is loaded to start
document.addEventListener('DOMContentLoaded', function () {
    let playButton = document.querySelector('.playButton');
    playButton.addEventListener('click', playAnimation);
});

function playAnimation() {
    let tl = gsap.timeline();
    tl.to(this, {duration: 2, ease:'power1.out', y:200, opacity:0, onComplete:()=>{
        removeElement(this);
        loadGameComponents();
    }});
}

function loadGameComponents() {
    loadScore();
    snake();
}

function removeElement(element) {
    element.parentNode.remove();
}