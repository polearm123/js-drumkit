//listen for a key press
//depending on the key, activate the sound connected to that key press


window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    const audioSelector = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audioSelector);
    if(!audioSelector) return; //if there is no audio with that datakey return with no sound

    audioSelector.play();

})

