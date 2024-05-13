const el = document.querySelector('play-pause');

el.addEventListener('click', () => {
  
const rightAnimations = el.querySelectorAll('.right animate'),
leftAnimations = el.querySelectorAll('.left animate'),
className = 'clicked';
  
  el.classList.toggle(className);
  
  if (el.classList.contains(className)) {
    rightAnimations[1].beginElement();
    leftAnimations[1].beginElement();
  } else {
    rightAnimations[0].beginElement();
    leftAnimations[0].beginElement();
  }
  
})

el.click();