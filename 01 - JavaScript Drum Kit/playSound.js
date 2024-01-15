function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    console.log(key);
    if(!audio) return;
    if(!key) return;

    key.classList.add('playing');
    audio.currentTime=0;
    audio.play();

}
window.addEventListener('keydown', playSound);
// window.addEventListener('keyup', remove);

// function remove(e) {
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if(!key) return;
//     key.classList.remove('playing');
// }


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
  
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend',removeTransition));  
