let pp_el = document.querySelector('play-pause');

pp_el.addEventListener('click', () => {
  
  const polygons = pp_el.querySelectorAll("polygon"),
  className = 'clicked';
  
  pp_el.classList.toggle(className);

  if (pp_el == undefined) {
    setTimeout(function() {
      pp_el.click()
    }, 50);
    return;
  }
  
  if (pp_el.classList.contains(className)) {
    polygons.forEach(elem => {
      elem.querySelectorAll("animate")[1].beginElement();
    });
  } else {
    polygons.forEach(elem => {
      elem.querySelectorAll("animate")[0].beginElement();
    });
  }
  
  console.log("pp js");
  
})

window.addEventListener("load", function() { setTimeout(function() { pp_el.click(); }, 50); });