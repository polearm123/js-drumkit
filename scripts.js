//listen for a key press
//depending on the key, activate the sound connected to that key press

function removeTransition(e){

    if(e.propertyName !== 'transform') return;

    console.log(e.propertyName);
    this.classList.remove('playing'); //this is the current key





}
function playSound(e) {
    
    const audioSelector = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // key.setAttribute("style","border: 5px solid red;")
    // key.style.text

    
    if(!audioSelector) return; //if there is no audio with that datakey return with no sound
    
    audioSelector.currentTime = 0; //
    audioSelector.play();

    key.classList.add('playing'); //adds the playing css elements to the key

}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll(".key");


keys.forEach((key) => key.addEventListener('transitionend',removeTransition)); //adds a listener to each key



